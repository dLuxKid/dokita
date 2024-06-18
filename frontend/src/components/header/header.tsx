"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useState } from "react";

const nav_items = [
  { item: "Home", route: "/" },
  { item: "Service", route: "/service" },
  { item: "Contact Us", route: "/contact-us" },
];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

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
        <NavigationMenuList className="lg:flex hidden items-center justify-center gap-6">
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
        <NavigationMenuList className="lg:flex hidden items-center justify-center gap-6">
          <NavigationMenuItem>
            <Link href={"/signup"}>
              <Button variant={"link"}>Sign Up</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/login"}>
              <Button>Log In</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div
          className="lg:hidden cursor-pointer group flex gap-8 items-center flex-col justify-center"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <div className="space-y-2">
            <span
              className={`block h-1 w-10 origin-center rounded-full bg-primary transition-transform ease-in-out ${
                openNav && "translate-y-1.5 rotate-45"
              }`}
            />
            <span
              className={`block h-1 w-10 origin-center rounded-full bg-primary ${
                openNav && "hidden"
              }`}
            />
            <span
              className={`block h-1 w-10 origin-center rounded-full bg-primary transition-transform ease-in-out ${
                openNav && "-translate-y-1.5 -rotate-45"
              }`}
            />
          </div>
        </div>
      </div>
      {openNav && (
        <div
          className="lg:hidden flex items-center justify-center absolute w-full z-50 top-24 inset-x-0 bg-background p-4"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <NavigationMenuList className="flex items-center justify-center w-full flex-col gap-6">
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

            <NavigationMenuItem>
              <Link href={"/signup"}>
                <Button variant={"link"}>Sign Up</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/login"}>
                <Button>Log In</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </NavigationMenu>
  );
}
