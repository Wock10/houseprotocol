import Link from "next/link";
import { RAKE_SPLIT } from "@/lib/protocol";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 felt-grid opacity-70" />

      <section className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-5 py-20 sm:py-28">
        <p className="animate-rise mb-5 text-xs uppercase tracking-[0.28em] text-gold">
          Whitepaper v1 · Ethereum
        </p>
        <h1 className="animate-rise font-[family-name:var(--font-display)] text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-foreground">
          The House Protocol
        </h1>
        <p className="animate-rise-delay mt-6 max-w-xl text-xl leading-relaxed text-muted sm:text-2xl">
          Anyone can be the house.
        </p>
        <p className="animate-rise-delay mt-4 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg">
          A peer-funded ETH bankroll that any slots-style game can plug into —
          4% protocol rake, then a fair game. Lenders earn yield. Builders earn
          referrer flow. Players and lenders earn THP.
        </p>
        <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
          <Link
            href="/how-it-works"
            className="inline-flex items-center bg-gold px-5 py-3 text-sm font-semibold tracking-wide text-[#07140f] transition hover:bg-gold-soft"
          >
            How it Works
          </Link>
          <Link
            href="/tokenomics"
            className="inline-flex items-center border border-line px-5 py-3 text-sm font-medium text-foreground transition hover:border-gold/50 hover:text-gold-soft"
          >
            Tokenomics
          </Link>
        </div>
      </section>

      <div className="glow-line mx-auto max-w-5xl" />

      <section className="relative mx-auto grid max-w-5xl gap-8 px-5 py-16 sm:grid-cols-3 sm:py-20">
        {[
          {
            title: "Crowdfunded house",
            body: "Deposit ETH as fungible vault shares. Earn volume yield and THP while the casino runs.",
          },
          {
            title: "Fair after the rake",
            body: "4% skimmed at bet open. The remaining 96% plays at 100% RTP via on-chain VRF.",
          },
          {
            title: "Built to be built on",
            body: "Minimal integrator surface. Flagship slots stay intentionally ordinary so others ship the real games.",
          },
        ].map((item) => (
          <div key={item.title} className="border-t border-line/70 pt-5">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <section className="relative mx-auto max-w-5xl px-5 pb-20">
        <div className="border border-line/60 bg-[#0c1f17]/70 px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            4% rake split
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-foreground">
            Where the edge goes
          </h2>
          <ul className="mt-8 divide-y divide-line/50">
            {RAKE_SPLIT.map((row) => (
              <li
                key={row.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <p className="font-medium text-foreground">{row.label}</p>
                  <p className="mt-1 text-sm text-muted">{row.detail}</p>
                </div>
                <p className="shrink-0 font-[family-name:var(--font-display)] text-2xl text-gold-soft">
                  {row.pct}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
