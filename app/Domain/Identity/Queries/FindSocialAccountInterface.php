<?php

declare(strict_types=1);

namespace App\Domain\Identity\Queries;

use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Models\SocialAccount;

interface FindSocialAccountInterface
{
    public function handle(SocialProvider $provider, string $providerId): ?SocialAccount;
}
