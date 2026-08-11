# KineticWork Starter Template

A production-ready [Next.js](https://nextjs.org) starter template for building web applications with the [KineticWork](https://praesyn.com/kineticwork) methodology — fast, reliable, and maintainable.

```bash
# Clone and start building in seconds
git clone https://github.com/PraeSynBH/kineticwork-template.git my-app
cd my-app
pnpm install
pnpm dev
```

## What's Included

- **Next.js 16** with App Router, Server Components, and Turbopack
- **TypeScript** in strict mode with `noUncheckedIndexedAccess`, `noImplicitReturns`, and more
- **Tailwind CSS 4** with KineticWork brand design tokens
- **shadcn/ui** — accessible, customizable components (Button, Card, Dialog, Form, and 12+ more)
- **ESLint + Prettier** pre-configured
- **GitHub Actions CI/CD** — lint, typecheck, build on every PR
- **Prisma schema** reference with NextAuth.js models
- **Sample API route** (`/api/health`)
- **Project structure** pre-organized with `src/components`, `src/lib`, `src/hooks`, `src/types`

## Tech Stack

| Layer          | Default                       |
| -------------- | ----------------------------- |
| Framework      | Next.js 16 (App Router)       |
| Language       | TypeScript (strict)           |
| Styling        | Tailwind CSS 4 + shadcn/ui    |
| Components     | shadcn/ui (Base UI primitives)|
| Database       | PostgreSQL (Prisma ORM)       |
| Auth           | NextAuth.js v5 (Auth.js)      |
| Forms          | React Hook Form + Zod         |
| Server State   | TanStack Query                |
| Icons          | Lucide React                  |
| CI/CD          | GitHub Actions                |
| Package Manager| pnpm                          |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/health/       # Sample API route
│   ├── globals.css       # Global styles + design tokens
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Homepage
├── components/
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Shared utilities
│   ├── auth.ts           # NextAuth.js config reference
│   ├── prisma.ts         # Prisma client singleton reference
│   └── utils.ts          # cn() utility
└── types/                # TypeScript type definitions
prisma/
└── schema.prisma         # Database schema
```

## Getting Started

### Prerequisites

- **Node.js 22+** (LTS)
- **pnpm** (recommended) or npm
- **PostgreSQL** (for database features)

### Setup

1. Clone and install:

```bash
git clone https://github.com/PraeSynBH/kineticwork-template.git my-app
cd my-app
pnpm install
```

2. Copy and configure environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting (CI) |

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components are added to `src/components/ui/`. They're fully customizable — you own the code.

## Database Setup

This template includes a reference Prisma schema. To set up your database:

```bash
pnpm add @prisma/client
pnpm add -D prisma
npx prisma generate
npx prisma db push   # or migrate
```

## Authentication

The template includes reference patterns for NextAuth.js v5. When ready to add auth:

```bash
pnpm add next-auth@beta @auth/prisma-adapter
```

Uncomment the configuration in `src/lib/auth.ts` and add your providers.

## Conventions

- **TypeScript strict mode** — all code must compile with strict flags
- **ESLint + Prettier** — run `pnpm lint` and `pnpm format:check` before committing
- **Component structure** — one component per file, co-locate tests with `*.test.tsx`
- **API routes** — use Next.js API routes for simple APIs; consider tRPC for complex ones
- **Environment variables** — never commit secrets; document all vars in `.env.example`

## CI/CD

GitHub Actions runs on every push and PR to `main`:

- **Lint** — ESLint + Prettier check
- **Type Check** — TypeScript compilation check
- **Build** — Production build verification

## KineticWork Methodology

This template embodies the [KineticWork Delivery Framework](https://praesyn.com/kineticwork):

- **Phase 0:** Discovery & Scoping
- **Phase 1:** Design & Architecture
- **Phase 2:** Build (iterative, weekly demos)
- **Phase 3:** Quality Assurance
- **Phase 4:** Launch & Handover
- **Phase 5:** Sustain (optional retainer)

[Learn more about KineticWork →](https://praesyn.com/kineticwork)

## Brand

KineticWork is a [PraeSyn](https://praesyn.com) brand. Colors:

- **Kinetic Orange** — `#F26B21`
- **PraeSyn Dark** — `#18181b`

## License

MIT © [PraeSyn, LLC](https://praesyn.com)