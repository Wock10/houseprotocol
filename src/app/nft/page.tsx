import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "NFT Bootstrap",
};

export default function NftPage() {
  return (
    <PageShell
      eyebrow="Bootstrap"
      title="Initial NFT Offering"
      lead="A fixed-size, flat-price public NFT sale hard-caps the raise, funds the house, seeds THP liquidity, and grants timed  -  not perpetual  -  upside to early supporters."
    >
      <h2>Sale shape</h2>
      <ul>
        <li>
          <strong>Supply placeholder:</strong> 10,000 NFTs (1,000 remains an
          alternate if the raise target is smaller).
        </li>
        <li>
          <strong>Price:</strong> flat ETH price, public sale.
        </li>
        <li>
          <strong>Cap:</strong> hard-capped ETH raise.
        </li>
      </ul>

      <h2>Where the ETH goes</h2>
      <p>
        Raise proceeds are <strong>not</strong> 100% bankroll. Majority of ETH
        enters the house vault so play can start with real depth. A minority
        seeds the initial <strong>THP/ETH protocol-owned liquidity</strong> so
        the token has a functioning pool at launch.
      </p>

      <h2>Timed utility</h2>
      <p>
        NFT utility has a <strong>fixed end date</strong>. During the window,
        holders may receive:
      </p>
      <ul>
        <li>
          A pro-rata slice of the protocol fee bucket (from the 0.50% protocol
          rake)
        </li>
        <li>
          A share of the NFT bootstrap emission allocation (~10% of THP supply;
          emission curve details later)
        </li>
      </ul>
      <p>
        When the window ends, fee-share and NFT emissions stop. There is no
        perpetual ownership of the casino framed as an equity-like claim. The
        NFT is a bootstrap instrument with a known sunset.
      </p>

      <h2>Why an NFT at all</h2>
      <p>
        The house needs an initial bankroll before organic deposits and volume
        can compound. Selling a timed participation NFT is a clean way to fund
        that bankroll, seed POL, and reward early believers without promising
        eternal rent.
      </p>
    </PageShell>
  );
}
