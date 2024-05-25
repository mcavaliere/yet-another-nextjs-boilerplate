export {};

export type Roles = "admin" | "member";

declare global {
  // For custom metadata in Clerk.
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
