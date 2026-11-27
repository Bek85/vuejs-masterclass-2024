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
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Local Supabase

The app runs against a local Supabase stack by default. It requires [Docker Desktop](https://docs.docker.com/desktop/).

```sh
cp .env.example .env     # local URL + default local keys
npm run supabase:start   # start the local stack (API :54321, DB :54322, Studio :54323, Mailpit/Inbucket :54324)
npm run db:reset         # apply supabase/migrations to the local DB
npm run db:seed          # seed fake data
npm run supabase:types   # regenerate types from the local DB
npm run dev
```

`npm run supabase:status` prints the local URLs and keys. Use the `*:remote` scripts (`db:reset:remote`, `supabase:types:remote`) to work against the linked cloud project.
