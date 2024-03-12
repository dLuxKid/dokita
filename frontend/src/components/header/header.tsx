import Link from "next/link";
import React from "react";

const nav_items = [
  { item: "Home", route: "/" },
  { item: "Service", route: "/service" },
  { item: "Contact Us", route: "/contact-us" },
];

export default function Header() {
  return (
    <nav className="w-screen flex items-center justify-center p-[5%]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-main-green">Dokita</h1>
        <ul className="w-full flex items-center justify-center gap-6">
          {nav_items.map((item, i) => (
            <Link key={i} href={item.route}>
              <li className="text-lg md:text-xl font-normal hover:text-main-green text-black">
                {item.item}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-6">
          <button className="text-lg md:text-xl font-medium text-main-green">
            Sign Up
          </button>
          <button className="cta-btn">Log In</button>
        </div>
      </div>
    </nav>
  );
}
