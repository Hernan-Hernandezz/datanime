"use client";
import Link from "next/link";

function Item({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li className="hover:text-primary-400">
      <Link href={href}>{children}</Link>
    </li>
  );
}
export default function NavBar() {
  return (
    <header className="max-w-7xl justify-between pb-4">
      <nav className=" flex max-w-full justify-around rounded-2xl bg-primary-200 p-4">
        <button className="rounded-full bg-default-200 p-2 md:hidden">
          menu
        </button>
        <ul className="flex w-3/5 flex-col items-center justify-around text-lg font-bold sm:flex-row">
          <Item href="/">Home</Item>
          <Item href="/top">Top</Item>
          <Item href="/directories">Directories</Item>
        </ul>
        <div contextMenu="bg-default-200">
          <input
            className="rounded-full bg-default-200 p-3 "
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button className="rounded-full bg-default-200 p-3 hover:bg-primary-600">
            Search
          </button>
        </div>
      </nav>
    </header>
  );
}
