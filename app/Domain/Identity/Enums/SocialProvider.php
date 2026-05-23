<?php

declare(strict_types=1);

namespace App\Domain\Identity\Enums;

enum SocialProvider: string
{
    case Google = 'google';

    public function label(): string
    {
        return match ($this) {
            self::Google => 'Google',
        };
    }
}
