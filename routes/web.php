<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\SocialLoginController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware('guest')
    ->group(function () {
        Route::get('auth/google/redirect', [SocialLoginController::class, 'redirect'])
            ->name('auth.google.redirect');
        Route::get('auth/google/callback', [SocialLoginController::class, 'callback'])
            ->name('auth.google.callback');
    });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
