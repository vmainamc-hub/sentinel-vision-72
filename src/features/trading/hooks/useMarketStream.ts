import { useEffect, useMemo, useState } from "react";
import { marketDataService } from "../services/mockTradingServices";
import type { DigitStat, Market, SentinelState, Tick } from "../types";

export function useMarketStream(market: Market, windowSize: number) {
  const [ticks, setTicks] = useState<Tick[]>(() => marketDataService.initialTicks(market));
  useEffect(() => {
    setTicks(marketDataService.initialTicks(market));
    const id = window.setInterval(() => setTicks((current) => {
      const last = current[current.length - 1];
      if (!last) return marketDataService.initialTicks(market);
      return [...current.slice(-999), marketDataService.nextTick(market, last)];
    }), 1100);
    return () => window.clearInterval(id);
  }, [market]);
  const current = ticks[ticks.length - 1];
  const previous = ticks[ticks.length - 2];
  const change = current && previous ? current.quote - previous.quote : 0;
  const windowTicks = ticks.slice(-windowSize);
  const stats = useMemo<DigitStat[]>(() => Array.from({ length: 10 }, (_, digit) => {
    const count = windowTicks.filter((tick) => tick.digit === digit).length;
    const firstHalf = windowTicks.slice(0, Math.floor(windowTicks.length / 2)).filter((tick) => tick.digit === digit).length;
    const secondHalf = count - firstHalf;
    const diff = secondHalf - firstHalf;
    const trend: DigitStat["trend"] = diff > 2 ? 2 : diff > 0 ? 1 : diff < -2 ? -2 : diff < 0 ? -1 : 0;
    const reverseIndex = [...windowTicks].reverse().findIndex((tick) => tick.digit === digit);
    return { digit, count, percentage: windowTicks.length ? (count / windowTicks.length) * 100 : 0, trend, lastSeen: reverseIndex < 0 ? windowTicks.length : reverseIndex };
  }), [windowTicks]);
  const sentinel = useMemo<SentinelState>(() => {
    const odd = windowTicks.filter((tick) => tick.digit % 2).length;
    const recent = windowTicks.slice(-12);
    const momentum = recent.length > 1 ? (recent[recent.length - 1].quote - recent[0].quote) * 10 : 0;
    const pressure = Math.min(94, 50 + Math.abs(odd - (windowTicks.length - odd)));
    return { psychology: Math.round(52 + pressure / 5), pressure: Math.round(pressure), momentum: Number(momentum.toFixed(1)), parity: odd >= windowTicks.length / 2 ? "ODD" : "EVEN", threat: pressure > 78 ? "MEDIUM" : "LOW", liquidity: "CLEAR", feed: "LIVE", market: "OPEN" };
  }, [windowTicks]);
  return { ticks, current, change, stats, sentinel };
}
