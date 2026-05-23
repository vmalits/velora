<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Domain\Identity\Actions\LoginWithGoogleAction;
use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Exceptions\AuthException;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse as SymfonyRedirectResponse;

class SocialLoginController extends Controller
{
    public function redirect(): SymfonyRedirectResponse
    {
        return Socialite::driver(SocialProvider::Google->value)->redirect();
    }

    public function callback(LoginWithGoogleAction $action): RedirectResponse
    {
        try {
            $action->handle();

            return redirect()->intended(config('fortify.home'));
        } catch (AuthException $authException) {
            Log::warning('Google login failed', ['message' => $authException->getMessage()]);

            return redirect()
                ->route('login')
                ->with('status', $authException->getMessage());
        }
    }
}
