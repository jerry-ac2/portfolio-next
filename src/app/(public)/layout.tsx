import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal header - just the logo */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6">
        <Link
          href="/"
          className="text-lg font-medium hover:text-muted-foreground transition-colors"
        >
          jeremiah.
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}
