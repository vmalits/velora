<?php

declare(strict_types=1);

namespace App\Domain\Identity\Actions;

use App\Domain\Identity\Dto\SocialUserDTO;
use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Exceptions\AuthException;
use App\Domain\Identity\Models\SocialAccount;
use App\Domain\Identity\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

final readonly class LoginWithGoogleAction
{
    public function __construct(
        private FindSocialAccountInterface $findSocialAccount,
        private FindUserByEmailInterface $findUserByEmail,
    ) {}

    /**
     * @throws AuthException|Throwable
     */
    public function handle(): User
    {
        $googleUser = SocialUserDTO::fromSocialite(
            Socialite::driver(SocialProvider::Google->value)->user(),
        );

        $social = $this->findSocialAccount->handle(
            SocialProvider::Google,
            $googleUser->id,
        );

        $user = $social !== null
            ? User::findOrFail($social->user_id)
            : $this->registerViaSocial($googleUser);

        Auth::login($user, remember: true);

        return $user;
    }

    /**
     * @throws AuthException|Throwable
     */
    private function registerViaSocial(SocialUserDTO $googleUser): User
    {
        $existingUser = $this->findUserByEmail->handle($googleUser->email);

        if ($existingUser?->hasSocialProvider(SocialProvider::Google) === false) {
            throw AuthException::SocialEmailConflict($googleUser->email);
        }

        return DB::transaction(
            callback: function () use ($googleUser, $existingUser) {
                $user = $existingUser ?? User::create([
                    'name'  => $googleUser->name,
                    'email' => $googleUser->email,
                ]);

                SocialAccount::query()
                    ->create([
                        'user_id'       => $user->id,
                        'provider'      => SocialProvider::Google,
                        'provider_id'   => $googleUser->id,
                        'email'         => $googleUser->email,
                        'token'         => $googleUser->token,
                        'refresh_token' => $googleUser->refreshToken,
                    ]);

                return $user;
            },
            attempts: 3,
        );
    }
}
