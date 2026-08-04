import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-base text-foreground">
            The House Protocol
          </p>
          <p className="mt-2 max-w-md leading-relaxed">
            Experimental DeFi software. Not financial advice. No guaranteed
            yields. Parameters and economics in this whitepaper are draft and
            may change before mainnet.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal" className="hover:text-gold-soft">
            Legal
          </Link>
          <Link href="/roadmap" className="hover:text-gold-soft">
            Roadmap
          </Link>
          <Link href="/how-it-works" className="hover:text-gold-soft">
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
}
