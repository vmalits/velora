<?php

declare(strict_types=1);

namespace App\Domain\Identity\Queries;

use App\Domain\Identity\Models\User;

interface FindUserByEmailInterface
{
    public function handle(string $email): ?User;
}
