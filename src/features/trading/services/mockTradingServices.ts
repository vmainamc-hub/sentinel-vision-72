import type { ContractAvailability, Market, OpenContract, Proposal, Tick, TradeResult, ContractType } from "../types";

export const markets: Market[] = [
  { id: "R_50", symbol: "R_50", name: "Volatility 50 Index", shortName: "V50", category: "Volatility", basePrice: 241.2638, decimals: 4, favourite: true },
  { id: "R_75", symbol: "R_75", name: "Volatility 75 Index", shortName: "V75", category: "Volatility", basePrice: 382451.17, decimals: 2, favourite: true },
  { id: "R_100", symbol: "R_100", name: "Volatility 100 Index", shortName: "V100", category: "Volatility", basePrice: 1287.43, decimals: 2 },
  { id: "R_25", symbol: "R_25", name: "Volatility 25 Index", shortName: "V25", category: "Volatility", basePrice: 611.529, decimals: 3 },
  { id: "BOOM500", symbol: "BOOM500", name: "Boom 500 Index", shortName: "Boom 500", category: "Crash/Boom", basePrice: 3498.21, decimals: 2, favourite: true },
  { id: "CRASH500", symbol: "CRASH500", name: "Crash 500 Index", shortName: "Crash 500", category: "Crash/Boom", basePrice: 2871.64, decimals: 2 },
  { id: "JD50", symbol: "JD50", name: "Jump 50 Index", shortName: "Jump 50", category: "Jump", basePrice: 923.17, decimals: 2 },
  { id: "STP", symbol: "STP", name: "Step Index", shortName: "Step", category: "Step", basePrice: 314.25, decimals: 2 },
  { id: "RB100", symbol: "RB100", name: "Range Break 100 Index", shortName: "Range 100", category: "Range Break", basePrice: 183.72, decimals: 2 },
];

function seededNoise(seed: number) { const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); }
export const marketDataService = {
  getMarkets: () => markets,
  initialTicks(market: Market, count = 1000): Tick[] {
    const ticks: Tick[] = []; let quote = market.basePrice;
    for (let i = 0; i < count; i++) {
      const wave = Math.sin((i + market.id.length * 9) / 13) * 0.028;
      const noise = (seededNoise(i + market.basePrice) - 0.5) * 0.16;
      quote += wave + noise;
      const fixed = Number(quote.toFixed(market.decimals));
      ticks.push({ marketId: market.id, epoch: 1730000000 + i, quote: fixed, digit: Number(fixed.toFixed(market.decimals).slice(-1)), sequence: i });
    }
    return ticks;
  },
  nextTick(market: Market, previous: Tick): Tick {
    const i = previous.sequence + 1;
    const delta = Math.sin((i + market.id.length * 11) / 9) * 0.035 + (seededNoise(i * 1.7 + market.basePrice) - 0.5) * 0.13;
    const quote = Number((previous.quote + delta).toFixed(market.decimals));
    return { marketId: market.id, epoch: previous.epoch + 1, quote, digit: Number(quote.toFixed(market.decimals).slice(-1)), sequence: i };
  },
};
export const contractService = { getAvailability: (): ContractAvailability[] => [
  { family: "Digits", contracts: ["Even", "Odd", "Matches", "Differs", "Over", "Under"] },
  { family: "Direction", contracts: ["Rise", "Fall", "Higher", "Lower"] },
  { family: "Other", contracts: ["Touch", "No Touch"] },
] };
export const proposalService = { getProposal(input: Omit<Proposal, "id" | "payout" | "profit">): Proposal { const multiplier = ["Matches","Differs"].includes(input.contract) ? 1.88 : 1.92; const payout = Number((input.stake * multiplier).toFixed(2)); return { ...input, id: `PX-${input.marketId}-${input.contract}`, payout, profit: Number((payout-input.stake).toFixed(2)) }; } };
export const tradeService = { previewBuy(proposal: Proposal) { return { accepted: false, prototype: true, message: `${proposal.contract} order staged — no real trade was placed.` }; } };
export const accountService = { getAccount: () => ({ type: "Demo", currency: "USD", balance: 10000 }) };
export const openContracts: OpenContract[] = [{ id: "CT-849201", market: "V75", type: "Odd", prediction: "Odd", entry: 382451.12, current: 382451.17, stake: 5, pnl: 3.72, remaining: "3 ticks", status: "Open" }];
export const tradeHistory: TradeResult[] = [
  { time: "11:28:14", market: "V50", contract: "Even", direction: "Even", stake: 5, payout: 9.6, profit: 4.6, result: "Won", id: "CT-849184" },
  { time: "11:21:07", market: "Boom 500", contract: "Rise", direction: "Rise", stake: 10, payout: 0, profit: -10, result: "Lost", id: "CT-849153" },
  { time: "11:09:42", market: "V75", contract: "Over", direction: "Over 3", stake: 3, payout: 5.76, profit: 2.76, result: "Won", id: "CT-849077" },
  { time: "10:54:19", market: "Step", contract: "Differs", direction: "Differs 7", stake: 2, payout: 3.76, profit: 1.76, result: "Won", id: "CT-848992" },
];
export const familyFor = (type: ContractType) => ["Even","Odd","Matches","Differs","Over","Under"].includes(type) ? "Digits" : ["Rise","Fall","Higher","Lower"].includes(type) ? "Direction" : "Other";
