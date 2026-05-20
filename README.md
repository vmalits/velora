# Velora

Laravel 13 + Inertia React starter application with Fortify authentication, Wayfinder routes, Octane/FrankenPHP, Tailwind CSS v4, Pest, Rector, and Larastan.

Repository: `git@github.com:vmalits/velora.git`

## Stack

- PHP `8.5` + Laravel `13`
- Octane `v2` (FrankenPHP)
- Inertia Laravel `v3` + React `19`
- Fortify (auth, 2FA, passkeys)
- PostgreSQL `18`, Valkey (Redis-compatible), Typesense `27`, RustFS (S3-compatible)
- Tailwind CSS `v4`, Wayfinder, Vite `v8`
- Pest `v4`, Rector `v2`, Larastan `v3`, Pint
- Laravel Sail (Docker)

## Quick Start

1. Clone and enter project:

```bash
git clone git@github.com:vmalits/velora.git
cd velora
```

2. Start Sail and set up the app:

```bash
cp .env.example .env
./vendor/bin/sail up -d
./vendor/bin/sail composer install
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate --force
./vendor/bin/sail npm install
./vendor/bin/sail npm run build
```

Or use the one-command setup (requires composer installed locally):

```bash
cp .env.example .env
composer run setup
```

3. Start development:

```bash
./vendor/bin/sail composer run dev
```

This runs concurrently: app server, queue worker, log stream (`pail`), and Vite HMR.

## Sail Services

| Service   | Port | Purpose                        |
|-----------|------|--------------------------------|
| App       | 8000 | Octane/FrankenPHP (Sail)       |
| Vite      | 5173 | Frontend HMR                   |
| PostgreSQL| 5432 | Database                       |
| Valkey    | 6379 | Cache, queues, sessions        |
| Typesense | 8108 | Search (Scout)                 |
| RustFS    | 9000 | S3-compatible file storage     |

## Code Quality

Static analysis (lint check + PHPStan):

```bash
./vendor/bin/sail composer run analyse
```

Auto-fix PHP formatting and Rector issues:

```bash
./vendor/bin/sail composer run lint
./vendor/bin/sail composer run rector
```

Frontend lint and format:

```bash
./vendor/bin/sail npm run lint
./vendor/bin/sail npm run format
```

Full CI check (backend + frontend):

```bash
./vendor/bin/sail composer run ci:check
```

## Tests

```bash
./vendor/bin/sail artisan test --compact
```
