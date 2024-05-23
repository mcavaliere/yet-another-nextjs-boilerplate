"use client";

import posthog from "posthog-js";
import { PostHogProvider as OrigPHProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <OrigPHProvider client={posthog}>{children}</OrigPHProvider>;
}
