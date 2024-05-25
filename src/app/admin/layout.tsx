import { checkRole } from "@/lib/permissions";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  // If the user does not have the admin role, redirect them to the home page
  if (!checkRole("admin")) {
    redirect("/");
  }

  return <>{children}</>;
}
