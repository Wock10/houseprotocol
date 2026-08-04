import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Legal",
};

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="Disclaimer"
      title="Legal"
      lead="Short, plain disclaimers for an experimental protocol. This is not a legal opinion."
    >
      <h2>Experimental software</h2>
      <p>
        The House Protocol is experimental decentralized finance software. The
        materials on this site describe a design under active iteration. Nothing
        here is production-ready until contracts are deployed, audited, and
        explicitly marked live.
      </p>

      <h2>No offer of securities</h2>
      <p>
        Nothing on this site is an offer to sell, or a solicitation to buy,
        securities, investment contracts, or any other regulated financial
        product. THP, NFTs, and vault shares are described as protocol
        mechanisms — not as equity, debt, or guaranteed yield instruments.
      </p>

      <h2>No guaranteed returns</h2>
      <p>
        Vault yield is variable and depends on wager volume and house
        performance. Share price can decline. Token emissions and market prices
        can go to zero. Past illustrations are not predictions.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        Access to casino-style protocols may be restricted where you live.
        Persons in prohibited jurisdictions should not use the protocol if or
        when it launches. The operators of this informational site make no
        representation that the protocol will be available in the United States
        or any other specific country.
      </p>

      <h2>Forward-looking statements</h2>
      <p>
        Roadmaps, allocations, fee splits, and timelines are forward-looking and
        may change without notice. Smart contract risk, market risk, and
        regulatory risk apply in full.
      </p>
    </PageShell>
  );
}
