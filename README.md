# Velora

Laravel 13 + Inertia React starter application with Fortify authentication, Wayfinder routes/actions, Tailwind CSS v4, Pest, Rector, and PHPStan.

Repository: `git@github.com:vmalits/velora.git`

## Stack

- PHP `8.5`
- Laravel `13`
- Inertia Laravel `v3` + React `19`
- Fortify (auth, 2FA, passkeys)
- Tailwind CSS `v4`
- Pest `v4`, Rector `v2`, PHPStan/Larastan
- Laravel Sail (Docker-based local environment)

## Quick Start

1. Clone and enter project:

```bash
git clone git@github.com:vmalits/velora.git
cd velora
```

2. Install dependencies and initialize app (via Sail):

```bash
cp .env.example .env
./vendor/bin/sail composer install
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate --force
./vendor/bin/sail npm install
```

3. Start local development (app + queue + logs + vite):

```bash
./vendor/bin/sail composer run dev
```

## Sail Workflow

If you use Laravel Sail, run commands through Sail:

```bash
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate
./vendor/bin/sail composer install
./vendor/bin/sail npm install
```

Example full dev command in Sail:

```bash
./vendor/bin/sail composer run dev
```

## Code Quality

Run all backend static checks in one command:

```bash
./vendor/bin/sail composer run analyse
```

This runs:

- `pint --parallel --test`
- `rector process --dry-run`
- `phpstan analyse`

Auto-fix formatting/linting (PHP + frontend):

```bash
./vendor/bin/sail composer run lint:fix
```

## Tests

Run test suite:


```bash
./vendor/bin/sail php artisan test --compact
```
