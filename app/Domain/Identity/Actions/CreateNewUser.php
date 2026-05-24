<?php

declare(strict_types=1);

namespace App\Domain\Identity\Actions;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Domain\Identity\Models\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;
    use ProfileValidationRules;

    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'name'     => $input['name'],
            'email'    => $input['email'],
            'password' => $input['password'],
        ]);
    }
}
