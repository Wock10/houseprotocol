import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { RAKE_SPLIT } from "@/lib/protocol";

export const metadata: Metadata = {
  title: "How it Works",
};

export default function HowItWorksPage() {
  return (
    <PageShell
      eyebrow="Whitepaper"
      title="How it Works"
      lead="The House Protocol is a crowdfunded on-chain casino bankroll. Games are skins over one ETH vault, one rake schedule, and one VRF-backed settlement path."
    >
      <h2>The problem</h2>
      <p>
        Online casino house edge is usually opaque and owned by operators.
        Liquidity, odds, and fee routing sit behind a black box. Players cannot
        verify fairness; builders cannot plug into a shared bankroll without
        becoming the house themselves.
      </p>

      <h2>The idea</h2>
      <p>
        Depositors fund an ETH house vault. Anyone can build a slots-style (or
        similar) experience on top. When a player wagers, the protocol takes a
        fixed volume rake at bet open, then runs an actuarially fair game on
        the remainder. Outcomes settle on-chain with VRF-first randomness.
      </p>
      <p>
        <strong>Plain language:</strong> 4% protocol rake, then a fair game.
        Effective return to player on the full wager is 96%.
      </p>

      <h2>Fee-then-fair accounting</h2>
      <p>Example with a $1 wager:</p>
      <ul>
        <li>
          <strong>$0.04</strong> is raked immediately and split across protocol
          buckets.
        </li>
        <li>
          <strong>$0.96</strong> becomes risk capital and plays at{" "}
          <strong>100% RTP</strong> (fair EV).
        </li>
        <li>
          The inner game is not “96% RTP.” Stacking rake and a second house edge
          would silently push effective RTP near 92% — the protocol does not do
          that.
        </li>
      </ul>

      <h2>Rake split (4% of wager volume)</h2>
      <ul>
        {RAKE_SPLIT.map((row) => (
          <li key={row.label}>
            <strong>
              {row.pct} — {row.label}.
            </strong>{" "}
            {row.detail}
          </li>
        ))}
      </ul>

      <h2>House vault (lenders)</h2>
      <p>
        Lenders deposit <strong>ETH</strong> into a fungible share vault. Share
        price can fall after unlucky variance — depositors are underwriting the
        house, not holding a guaranteed note. In return they receive:
      </p>
      <ul>
        <li>
          Claimable cash yield from the <strong>1.25%</strong> lender bucket
          (and buffer overflow after the reserve target is met)
        </li>
        <li>THP emissions based on shares × time</li>
      </ul>
      <p>
        Withdrawals are available when the vault is idle (no unsettled bets,
        plus a short cooldown). The protocol also schedules a{" "}
        <strong>daily 10-minute pause</strong> for exits and housekeeping. A
        max deposit per address limits whale ownership of the house.
      </p>
      <p>
        Bet sizing scales with liquidity: <strong>max bet as % of TVL</strong>{" "}
        and a <strong>max multiplier</strong> (hence max payout), sized with
        the insurance buffer in mind so a single spin cannot insolvent the
        pool.
      </p>

      <h2>Integrator surface</h2>
      <p>Less is more. The intended call shape:</p>
      <p>
        <code>
          play(betWei, referrer, gameId, playerData) → {"{"} requestId, seed,
          payoutWei {"}"}
        </code>
      </p>
      <ul>
        <li>
          <code>gameId</code> / <code>playerData</code> are opaque bytes for any
          skin or UI.
        </li>
        <li>
          The protocol returns entropy and a payout so the same result can drive
          slots, dice skins, or raw contract play.
        </li>
        <li>
          Helpers such as <code>quoteMaxBet()</code> /{" "}
          <code>quoteMaxPayout()</code> expose live risk limits.
        </li>
        <li>
          Global effective player RTP is fixed by the rake model. Integrators
          cannot offer a better protocol RTP than the house; they may add their
          own product-layer fees above it if they choose.
        </li>
      </ul>

      <h2>Referrers</h2>
      <p>
        Integrator games may set <code>referrer</code> to their own address and
        earn <strong>0.75%</strong> of volume they drive. The flagship slots
        experience hardcodes referrer to the protocol treasury — you cannot
        siphon flagship flow. Forking the flagship is free game.
      </p>

      <h2>Flagship game</h2>
      <p>
        v1 ships a first-party on-chain slots surface: polished enough to use,
        intentionally ordinary. The point is the bankroll and the API — not a
        moat around one theme pack.
      </p>

      <h2>Randomness</h2>
      <p>
        Settlement is VRF-first (Chainlink VRF or equivalent) so outcomes are
        verifiable on Ethereum mainnet. Exact module details land with the
        contracts; the whitepaper commits to on-chain resolve with robust
        randomness, not a trusted off-chain spinner.
      </p>
    </PageShell>
  );
}
