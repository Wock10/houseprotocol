import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Roadmap",
};

const phases = [
  {
    title: "1 · Whitepaper",
    body: "Shareable product site and locked economic sketch — you are here.",
  },
  {
    title: "2 · Contracts",
    body: "Vault, rake router, VRF play module, THP token, referrer wiring, pause controls.",
  },
  {
    title: "3 · NFT bootstrap",
    body: "Hard-capped public mint. Majority ETH to bankroll, minority to POL seed. Utility window starts.",
  },
  {
    title: "4 · Flagship slots",
    body: "Ordinary on-chain slots on the shared house. Referrer locked to treasury.",
  },
  {
    title: "5 · Integrations",
    body: "Third-party skins and games using the minimal play API and earning referrer flow.",
  },
];

export default function RoadmapPage() {
  return (
    <PageShell
      eyebrow="Path"
      title="Roadmap"
      lead="Contracts and production parameters come after the whitepaper. Sequence matters: bankroll and risk before themes."
    >
      <ol className="list-none space-y-0 p-0">
        {phases.map((phase, index) => (
          <li
            key={phase.title}
            className="border-t border-line/50 py-6 first:border-t-0 first:pt-0"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              Phase {index + 1}
            </p>
            <h2 className="!mt-2">{phase.title.replace(/^\d+ · /, "")}</h2>
            <p>{phase.body}</p>
          </li>
        ))}
      </ol>
      <h2>Governance</h2>
      <p>
        Launch parameters — fee splits, caps, pause — sit behind a multisig with
        a path to broader governance. The whitepaper is the starting
        constitution, not the final bytecode.
      </p>
    </PageShell>
  );
}
