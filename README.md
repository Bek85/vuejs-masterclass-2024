# vuejs-masterclass-2024

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Local Supabase

The app runs against a local Supabase stack by default. It requires [Docker Desktop](https://docs.docker.com/desktop/).

```sh
cp .env.example .env     # local URL + default local keys
pnpm supabase:start   # start the local stack (API :54321, DB :54322, Studio :54323, Mailpit :54324)
pnpm db:reset         # apply supabase/migrations to the local DB
pnpm db:seed          # seed fake data
pnpm supabase:types   # regenerate types from the local DB
pnpm dev
```

`pnpm supabase:status` prints the local URLs and keys. Use the `*:remote` scripts (`db:reset:remote`, `supabase:types:remote`) to work against the linked cloud project.

Notes:
- `analytics` is disabled in `supabase/config.jsonc`: on Windows its log collector needs the Docker daemon exposed on `tcp://localhost:2375` and fails to start otherwise.
- Keep cloud credentials in `.env.cloud.local` (git-ignored) and run `pnpm dev --mode cloud` to use them. Don't leave them commented out in `.env`: older Node versions (20.x) did not skip commented lines in `--env-file`.
- The local database runs Postgres 17, the same version as the linked cloud project (pinned in `supabase/.temp/postgres-version` by `supabase link`). Supabase CLI 3 reads `supabase/config.jsonc`; older CLIs need `config.toml` and won't work with this project.
