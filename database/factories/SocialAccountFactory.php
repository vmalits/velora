<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Models\SocialAccount;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<SocialAccount>
 */
class SocialAccountFactory extends Factory
{
    #[\Override]
    protected $model = SocialAccount::class;

    public function definition(): array
    {
        return [
            'user_id'       => UserFactory::new(),
            'provider'      => SocialProvider::Google,
            'provider_id'   => Str::ulid()->toString(),
            'email'         => fake()->unique()->safeEmail(),
            'token'         => Str::random(10),
            'refresh_token' => Str::random(10),
        ];
    }
}
