<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->foreignUlid('user_id')->index();
            $table->string('provider');
            $table->string('provider_id');
            $table->string('email')->nullable();
            $table->text('token')->nullable();
            $table->text('refresh_token')->nullable();
            $table->timestamps();

            $table->unique(['provider', 'provider_id']);

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_accounts');
    }
};
