import Link from "next/link";

const nav = [
  { href: "/how-it-works", label: "How it Works" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/nft", label: "NFT" },
  { href: "/risk", label: "Risk" },
  { href: "/roadmap", label: "Roadmap" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-[#07140f]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-lg tracking-tight text-foreground transition-colors group-hover:text-gold-soft">
            The House Protocol
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-muted sm:inline">
            THP
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
