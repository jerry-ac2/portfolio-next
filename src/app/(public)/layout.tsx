"use client";

import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <footer className="px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm tracking-wide text-(--muted-foreground)">
            © {new Date().getFullYear()} Jeremiah Egemonye
          </p>
          <p className="text-xs text-(--foreground-dim)">
            Built with craft and care
          </p>
        </div>
      </footer>
    </>
  );
}
