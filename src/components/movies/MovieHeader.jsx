"use client"
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Search" },
  { href: "/favourites", label: "Favourites" },
];

const previewLinks = [
  { href: "/preview/loading", label: "Loading" },
  { href: "/preview/empty", label: "Empty" },
  { href: "/preview/error", label: "Error" },
];

export default function MovieHeader() {

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-900/50">
            M
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-100">
            MovieSearch
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-zinc-700 sm:block" aria-hidden="true" />
        </nav>
      </div>
    </header>
  );
}
