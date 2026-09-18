import { createFileRoute } from "@tanstack/react-router";
import { TradingApp } from "@/features/trading/TradingApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sentinel DTrader — Synthetic Options Intelligence" },
      { name: "description", content: "A next-generation manual options trading cockpit for Deriv synthetic indices, digit analytics, and Sentinel intelligence." },
      { property: "og:title", content: "Sentinel DTrader — Synthetic Options Intelligence" },
      { property: "og:description", content: "A professional manual options workspace for synthetic indices with synchronized digit intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TradingApp,
});
