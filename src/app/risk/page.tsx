import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Risk",
};

export default function RiskPage() {
  return (
    <PageShell
      eyebrow="Safety"
      title="Risk Principles"
      lead="Lenders underwrite a real casino. Caps, buffers, and pauses exist to make ruin unlikely — not to pretend variance does not exist."
    >
      <h2>Shares can go down</h2>
      <p>
        Vault shares are fungible claims on house equity. After a cold streak,
        share price can be below a depositor&apos;s entry. The design prioritizes
        insurance and hard payout caps so a single outcome cannot empty the
        pool, but it does <strong>not</strong> promise principal protection.
      </p>

      <h2>Hard risk knobs</h2>
      <ul>
        <li>
          <strong>Max bet</strong> as a percentage of TVL
        </li>
        <li>
          <strong>Max multiplier</strong> (and therefore max payout), constrained
          by available risk capital and buffer
        </li>
        <li>
          <strong>Reserve / insurance buffer</strong> funded by 0.50% of volume
          until a target ratio (about 10–15% of TVL), then that stream redirects
          to lender yield
        </li>
        <li>
          <strong>Max deposit per address</strong> to limit whale ownership of
          the house
        </li>
      </ul>
      <p>
        Exact percentages will be set with formal risk analysis before mainnet.
        The whitepaper locks the knobs, not the final calibration.
      </p>

      <h2>Idle exits and daily pause</h2>
      <p>
        Depositors cannot yank liquidity mid-spin. Withdrawals require an idle
        vault (no unsettled bets) and a short cooldown. Separately, the protocol
        auto-pauses once per day for about <strong>10 minutes</strong> so exits
        and housekeeping can clear without racing live action.
      </p>

      <h2>Insurance priority</h2>
      <p>
        Buffer capital sits ahead of aggressive bet sizing. Max bet and max win
        scale with usable liquidity after reserve requirements. Future hardening
        may add drawdown circuit breakers; v1 emphasizes the scheduled pause plus
        hard caps.
      </p>

      <h2>Smart contract and market risk</h2>
      <p>
        This is experimental Ethereum software. Bugs, oracle/VRF failures,
        governance mistakes, THP market illiquidity, and regulatory change are
        all in scope. Do not deposit funds you cannot lose. Nothing in this
        site is an offer of securities or a guarantee of profit.
      </p>
    </PageShell>
  );
}
