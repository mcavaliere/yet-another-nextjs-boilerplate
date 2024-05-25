# Yet Another Next.js Boilerplate

A boilerplate for myself containing the tools I use the most; I'm not sure which direction it will go in. Stay tuned.

## Current Tech Stack

- [Next.js](https://nextjs.org/) with [App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for UI elements
- [Prisma ORM](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/) database
- [Clerk](https://clerk.com/) for authentication and user management
- [PostHog](https://posthog.com/) for product and website analytics
- [Amazon SES](https://aws.amazon.com/ses/) and [JSX Email](https://jsx.email/) for transactional emails
- [Sentry](https://sentry.io/) for error and performance monitoring
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/) for unit tests.
- [Playwright](https://playwright.dev/) for E2E tests.
- Landing page template from [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page)

### TODO

- [x] Add Posthog
- [x] Add Sentry
- [x] Add Shadcn-ui
- [x] Add an ORM
- [x] Add transactional emails & `jsx-email`
- [x] Add Authentication
- [ ] Add object storage
- [x] Add Vitest
- [x] Add Playwright
- [x] Add a landing page template
- [ ] Add GitHub Actions CI setup
- [ ] Add Stripe or Lemon Squeezy

## Installation

First, create accounts for the services you want to use. You'll need API keys for each in step #3 below.

- [PostHog](https://posthog.com/)
- [Sentry](https://sentry.io/)
- [Clerk](https://clerk.com/)

Then:

1. Clone the repo
2. `pnpm install`
3. Copy `.env.example` to `.env.local` and fill in the required values (incl those API keys from above).
4. `pnpm dev` to start the server.

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```

## Running E2E Tests

1. `pnpm build:test` to create a production build (with NODE_ENV=test)
2. `pnpm test:e2e` to run the tests.
3. Optionally `pnpm test:e2e:ui` to run Playwright in UI mode.
