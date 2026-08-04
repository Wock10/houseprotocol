import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { TOKEN_ALLOCATION } from "@/lib/protocol";

export const metadata: Metadata = {
  title: "Tokenomics",
};

export default function TokenomicsPage() {
  return (
    <PageShell
      eyebrow="THP"
      title="Tokenomics"
      lead="THP is a fixed-supply incentive and liquidity token. Early acquisition is through protocol activity and protocol-owned bids  -  external buys may never unlock."
    >
      <h2>Supply</h2>
      <p>
        Fixed supply: <strong>1,000,000,000 THP</strong>. Working allocation for
        whitepaper v1 (subject to final parameter review before launch):
      </p>
      <ul>
        {TOKEN_ALLOCATION.map((row) => (
          <li key={row.label}>
            <strong>{row.pct}</strong>  -  {row.label}
          </li>
        ))}
      </ul>
      <p>
        Team / treasury vesting schedule is TBD. Ongoing builder revenue is not
        only the token allocation: flagship volume routes the{" "}
        <strong>0.75% referrer</strong> bucket to treasury, and the{" "}
        <strong>0.50% protocol</strong> bucket funds treasury and timed NFT
        fee-share.
      </p>

      <h2>How THP is earned</h2>
      <ul>
        <li>
          <strong>Players</strong>  -  emissions by wager volume during the
          bootstrap window.
        </li>
        <li>
          <strong>Lenders</strong>  -  emissions by vault shares x time.
        </li>
        <li>
          <strong>NFT holders</strong>  -  timed bootstrap emissions during the
          NFT utility window (curve details later).
        </li>
      </ul>
      <p>
        There is a <strong>daily emission cap</strong>. Fee earnings (ETH rake
        yield) are not capped the same way  -  depositors keep uncapped claim on
        their yield stream. Emissions use an <strong>inverse-activity</strong>{" "}
        bias in the bootstrap window: quieter days mint more THP within a
        min/max band so the flywheel can still form when volume is thin.
      </p>

      <h2>External buys may never unlock</h2>
      <p>
        Inspired by early FWA-style design: THP is not meant to be freely bought
        on day one. Phase 1 assumes <strong>sell-only / activity + POL bids</strong>
        . Opening external buys is a governance decision that{" "}
        <strong>may never happen</strong>. The whitepaper treats that as a
        feature, not a temporary bug.
      </p>

      <h2>Protocol-owned liquidity</h2>
      <p>
        <strong>1.00%</strong> of wager volume market-buys THP and adds
        protocol-owned liquidity. That creates structural bid and exit depth
        even while open-market buys stay closed. A minority of the NFT raise
        also seeds the initial THP/ETH pool so the chart is not hollow at TGE.
      </p>

      <h2>Optional win → THP cashout</h2>
      <p>
        Players may optionally take a win as THP: the ETH payout market-buys
        THP for the user through the protocol. Degens who want ETH keep the
        default cash path. This is a documented v1 product option, not a
        mandatory conversion.
      </p>

      <h2>What THP is not</h2>
      <p>
        THP is not a claim on depositor principal, not a promise of price
        appreciation, and not an investment contract pitch. It is a coordination
        and incentive asset for a peer-funded house. Numbers here are design
        targets for an experimental protocol.
      </p>
    </PageShell>
  );
}
