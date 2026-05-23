<?php

declare(strict_types=1);

use App\Domain\Identity\Actions\LoginWithGoogleAction;
use App\Domain\Identity\Enums\SocialProvider;
use App\Domain\Identity\Exceptions\AuthException;
use App\Domain\Identity\Models\SocialAccount;
use App\Domain\Identity\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;

test('existing social account logs in user', function () {
    $user = User::factory()->create([
        'email' => 'jason@example.com',
    ]);

    SocialAccount::factory()->create([
        'user_id'     => $user->id,
        'provider'    => SocialProvider::Google,
        'provider_id' => 'google-123',
        'email'       => 'jason@example.com',
    ]);

    Socialite::fake('google', (new SocialiteUser)->map([
        'id'    => 'google-123',
        'name'  => $user->name,
        'email' => 'jason@example.com',
    ]));

    $result = app(LoginWithGoogleAction::class)->handle();

    expect($result->id)->toBe($user->id);
    $this->assertAuthenticatedAs($user);
});

test('new user is registered via Google', function () {
    Socialite::fake('google', (new SocialiteUser)->map([
        'id'    => 'google-456',
        'name'  => 'Jane Doe',
        'email' => 'jane@example.com',
    ])->setToken('fake-token')->setRefreshToken('fake-refresh-token'));

    $result = app(LoginWithGoogleAction::class)->handle();

    expect($result)
        ->name->toBe('Jane Doe')
        ->email->toBe('jane@example.com');

    $this->assertDatabaseHas('users', [
        'name'  => 'Jane Doe',
        'email' => 'jane@example.com',
    ]);

    $this->assertDatabaseHas('social_accounts', [
        'user_id'       => $result->id,
        'provider'      => SocialProvider::Google->value,
        'provider_id'   => 'google-456',
        'email'         => 'jane@example.com',
        'token'         => 'fake-token',
        'refresh_token' => 'fake-refresh-token',
    ]);

    $this->assertAuthenticatedAs($result);
});

test('existing user without Google provider throws conflict exception', function () {
    User::factory()->create(['email' => 'existing@example.com']);

    Socialite::fake('google', (new SocialiteUser)->map([
        'id'    => 'google-789',
        'name'  => 'Existing User',
        'email' => 'existing@example.com',
    ]));

    app(LoginWithGoogleAction::class)->handle();
})->throws(
    AuthException::class,
    "Account with email 'existing@example.com' already exists.",
);

test('existing user with Google provider gets additional social account linked', function () {
    $user = User::factory()->create(['email' => 'linked@example.com']);

    SocialAccount::factory()->create([
        'user_id'     => $user->id,
        'provider'    => SocialProvider::Google,
        'provider_id' => 'google-old',
        'email'       => 'linked@example.com',
    ]);

    Socialite::fake('google', (new SocialiteUser)->map([
        'id'    => 'google-new',
        'name'  => $user->name,
        'email' => 'linked@example.com',
    ])->setToken('new-token')->setRefreshToken('new-refresh'));

    $result = app(LoginWithGoogleAction::class)->handle();

    expect($result->id)->toBe($user->id);

    $this->assertDatabaseHas('social_accounts', [
        'user_id'     => $user->id,
        'provider_id' => 'google-new',
        'token'       => 'new-token',
    ]);

    $this->assertAuthenticatedAs($user);
});
