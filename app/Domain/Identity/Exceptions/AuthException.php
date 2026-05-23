<?php

declare(strict_types=1);

namespace App\Domain\Identity\Exceptions;

use Exception;

class AuthException extends Exception
{
    public static function SocialEmailConflict(string $email): self
    {
        return new self(\sprintf("Account with email '%s' already exists.", $email), 409);
    }
}
