"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-[--dark-text] hover:opacity-80 transition-opacity"
        >
          Jeremiah.
        </Link>

        {/* Right side link */}
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm text-[--dark-text] hover:opacity-80 transition-opacity"
        >
          <span>👋</span>
          <span>About me</span>
        </Link>
      </div>
    </nav>
  );
}
