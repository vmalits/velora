<?php

declare(strict_types=1);

namespace App\Providers\Domain;

use App\Domain\Identity\Queries\FindSocialAccount;
use App\Domain\Identity\Queries\FindSocialAccountInterface;
use App\Domain\Identity\Queries\FindUserByEmail;
use App\Domain\Identity\Queries\FindUserByEmailInterface;
use Illuminate\Support\ServiceProvider;

class IdentityServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(FindSocialAccountInterface::class, FindSocialAccount::class);
        $this->app->bind(FindUserByEmailInterface::class, FindUserByEmail::class);
    }
}
