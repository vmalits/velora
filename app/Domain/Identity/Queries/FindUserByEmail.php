<?php

declare(strict_types=1);

namespace App\Domain\Identity\Queries;

use App\Domain\Identity\Models\User;

final readonly class FindUserByEmail implements FindUserByEmailInterface
{
    public function handle(string $email): ?User
    {
        return User::query()
            ->where('email', $email)
            ->first();
    }
}
