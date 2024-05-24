# Yet Another Next.js Boilerplate

A boilerplate for myself containing the tools I use the most; I'm not sure which direction it will go in. Stay tuned.

## Current Tech Stack

- [Next.js](https://nextjs.org/) with [App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/) database
- [Shadcn UI](https://ui.shadcn.com/)
- [PostHog](https://posthog.com/) for product and website analytics
- [Sentry](https://sentry.io/) for error and performance monitoring
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/) for unit tests.
- [Playwright](https://playwright.dev/) for E2E tests.
- Landing page template from [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page)

### TODO

- [x] Add Posthog
- [x] Add Sentry
- [x] Add Shadcn-ui
- [x] Add an ORM
- [ ] Add transactional emails & `jsx-email`
- [ ] Add Authentication
- [ ] Add object storage
- [x] Add Vitest
- [x] Add Playwright
- [x] Add a landing page template
- [ ] Add GitHub Actions CI setup
- [ ] Add Stripe or Lemon Squeezy

## Installation

1. Clone the repo
2. `pnpm install`
3. `pnpm dev` to start the server.

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```

## Running E2E Tests

1. `pnpm build:test` to create a production build (with NODE_ENV=test)
2. `pnpm test:e2e` to run the tests.
3. Optionally `pnpm test:e2e:ui` to run Playwright in UI mode.
