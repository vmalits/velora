<?php

declare(strict_types=1);

namespace App\Domain\Identity\Queries;

use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Models\SocialAccount;

final readonly class FindSocialAccount implements FindSocialAccountInterface
{
    public function handle(SocialProvider $provider, string $providerId): ?SocialAccount
    {
        return SocialAccount::query()
            ->where('provider', $provider)
            ->where('provider_id', $providerId)
            ->first();
    }
}
