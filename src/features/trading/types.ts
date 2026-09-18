export type MarketCategory = "Favourites" | "Volatility" | "Crash/Boom" | "Jump" | "Step" | "Range Break" | "Other Derived";
export type ContractType = "Even" | "Odd" | "Matches" | "Differs" | "Over" | "Under" | "Rise" | "Fall" | "Higher" | "Lower" | "Touch" | "No Touch";
export type ChartMode = "Area" | "Line" | "OHLC";
export interface Market { id: string; symbol: string; name: string; shortName: string; category: MarketCategory; basePrice: number; decimals: number; favourite?: boolean; }
export interface Tick { marketId: string; epoch: number; quote: number; digit: number; sequence: number; }
export interface DigitStat { digit: number; count: number; percentage: number; trend: -2 | -1 | 0 | 1 | 2; lastSeen: number; }
export interface ContractAvailability { family: string; contracts: ContractType[]; }
export interface Proposal { id: string; marketId: string; contract: ContractType; stake: number; payout: number; profit: number; duration: number; unit: string; barrier?: number; digit?: number; }
export interface OpenContract { id: string; market: string; type: ContractType; prediction: string; entry: number; current: number; stake: number; pnl: number; remaining: string; status: "Open" | "Sold"; }
export interface TradeResult { time: string; market: string; contract: ContractType; direction: string; stake: number; payout: number; profit: number; result: "Won" | "Lost"; id: string; }
export interface SentinelState { psychology: number; pressure: number; momentum: number; parity: "EVEN" | "ODD"; threat: "LOW" | "MEDIUM" | "HIGH"; liquidity: "CLEAR" | "THIN"; feed: "LIVE" | "STALE"; market: "OPEN" | "PAUSED"; }
