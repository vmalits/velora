<?php

declare(strict_types=1);

namespace App\Domain\Identity\Dto;

use Laravel\Socialite\Contracts\User as SocialiteUser;
use Laravel\Socialite\Two\User as OAuth2User;

final readonly class SocialUserDTO
{
    public function __construct(
        public string $id,
        public string $name,
        public string $email,
        public ?string $token,
        public ?string $refreshToken,
    ) {}

    public static function fromSocialite(SocialiteUser $user): self
    {
        return new self(
            id: $user->getId(),
            name: $user->getName() ?? '',
            email: $user->getEmail() ?? '',
            token: $user instanceof OAuth2User ? $user->token : null,
            refreshToken: $user instanceof OAuth2User ? $user->refreshToken : null,
        );
    }
}
