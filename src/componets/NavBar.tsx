import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <nav className="w-screen">
        <ul className="flex lg:justify-around items-center md:flex-col">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/top">Top</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
