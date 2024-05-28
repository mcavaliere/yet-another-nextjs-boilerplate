import { checkRole } from "@/lib/permissions";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";
import { AdminNavbar } from "./AdminNavbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function AdminLayout({ children }: { children: ReactNode }) {
  // If the user does not have the admin role, redirect them to the home page
  if (!checkRole("admin")) {
    return redirect("/");
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col">
        <AdminNavbar />

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </TooltipProvider>
  );
}
