"use client";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
export default function NavBar() {
  return (
    <header>
      <Navbar>
        <NavbarContent className="flex items-center justify-around ">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/top">Top</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/categories">Categories</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
