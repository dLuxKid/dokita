"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const nav_items = [
  { item: "Home", route: "/" },
  { item: "Service", route: "/service" },
  { item: "Contact Us", route: "/contact-us" },
];

export default function Header() {
  return (
    <NavigationMenu className="flex items-center justify-center px-[5%] h-24">
      <div className="w-full flex items-center justify-between gap-6">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"}>
              <h1 className="text-primary">Dokita</h1>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex items-center justify-center gap-6">
          {nav_items.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link
                href={item.route}
                className="text-lg md:text-xl font-normal hover:text-primary text-black"
              >
                {item.item}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuList className="flex items-center justify-center gap-6">
          <NavigationMenuItem>
            <Link href={"/"}>
              <Button variant={"link"}>Sign Up</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/"}>
              <Button>Log In</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
