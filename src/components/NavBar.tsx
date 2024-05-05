"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import { SwitchMode } from "@/components/SwitchMode";

function Item({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li className="hover:text-primary-400">
      <Link href={href}>{children}</Link>
    </li>
  );
}
export default function NavBar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    const stateOpen = open;
    setOpen(!stateOpen);
  };
  const [search, setSearch] = useState("");
  return (
    <header className="mx-auto max-w-7xl justify-center">
      <nav className=" flex max-w-full justify-between rounded-2xl bg-primary-200 p-4">
        <button
          onClick={toggle}
          className="h-10 w-10 rounded-xl border-1 border-default-900 bg-default-200 p-2 md:hidden"
        >
          <Menu className="text-default-900" />
        </button>
        <ul
          className={`absolute left-0 top-20 z-20 h-40 w-screen flex-col items-center justify-around bg-primary-200 text-lg font-bold transition-all duration-1000 md:relative md:left-auto md:top-auto md:flex md:h-auto md:w-2/5 md:flex-row ${open ? "flex" : "hidden"}`}
        >
          <Item href="/">Home</Item>
          <Item href="/directories">Directories</Item>
        </ul>
        <div className="flex">
          <SwitchMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="rounded-full bg-default-200">
            <input
              className="w-3/5 rounded-l-full bg-default-200 p-3 "
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              href={search !== "" ? `/directories?q=${search}` : ""}
              className="w-1/5 rounded-r-full bg-default-200 p-3 hover:bg-primary-600"
            >
              Search
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
