/**
 * Shared config for all Sentry initialization files: client, edge, and server.
 */
export const baseConfig = {
  debug: process.env.NODE_ENV === "development",
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
  tracesSampleRate: 0.1,
};
