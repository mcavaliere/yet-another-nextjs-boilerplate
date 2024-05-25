"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import Link from "next/link";
export function AdminNavbar() {
  return (
    <NavigationMenu className="mb-4 bg-secondary">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/admin" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Admin Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin/styleguide" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Style Guide
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
