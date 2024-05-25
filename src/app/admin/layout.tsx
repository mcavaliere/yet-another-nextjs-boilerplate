import { checkRole } from "@/lib/permissions";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";
import { AdminHeading } from "./AdminHeading";
import { AdminNavbar } from "./AdminNavbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  // If the user does not have the admin role, redirect them to the home page
  if (!checkRole("admin")) {
    return redirect("/");
  }

  return (
    <div className="w-full p-4 md:px-10">
      <AdminHeading />
      <AdminNavbar />
      {children}
    </div>
  );
}
