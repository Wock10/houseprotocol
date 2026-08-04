export const RAKE_SPLIT = [
  {
    label: "Lender yield",
    pct: "1.25%",
    detail: "Claimable ETH yield for vault depositors  -  separate from principal.",
  },
  {
    label: "Insurance buffer",
    pct: "0.50%",
    detail:
      "Fills until a target reserve (about 10-15% of TVL), then redirects to lender yield.",
  },
  {
    label: "THP liquidity (POL)",
    pct: "1.00%",
    detail: "Market-buys THP and adds protocol-owned liquidity while external buys stay closed.",
  },
  {
    label: "Referrer",
    pct: "0.75%",
    detail:
      "Paid to the referrer on the call. Integrator games may route to themselves; flagship locks this to treasury.",
  },
  {
    label: "Protocol",
    pct: "0.50%",
    detail: "Treasury and timed NFT fee-share during the bootstrap window.",
  },
] as const;

export const TOKEN_ALLOCATION = [
  { label: "Play + lend emissions", pct: "45%" },
  { label: "NFT bootstrap emissions", pct: "10%" },
  { label: "Initial POL", pct: "25%" },
  { label: "Team + treasury", pct: "15%" },
  { label: "Ecosystem / insurance", pct: "5%" },
] as const;
