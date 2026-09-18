# Sentinel DTrader prototype

## Goal
Build a complete, clickable manual Deriv options workspace using deterministic mock data and one authoritative market tick stream. The interface will clearly identify all execution as prototype-only.

## Experience
- Create a dense graphite trading cockpit with compact navigation, multi-market tabs, a collapsible market finder, a large chart workspace, and an adaptive Trade Deck.
- Add a prominent live 0–9 digit distribution, expandable digit pressure, Sentinel intelligence, open-contract controls, and a filterable history view.
- Provide a dedicated mobile composition with persistent access to trade controls and active contracts through bottom sheets.
- Add restrained transitions for live ticks, market and contract changes, panel expansion, and prototype confirmations.

## Interactions
- Switch, add, and close market tabs; search and favourite markets.
- Switch chart modes and timeframes, with functional chart controls and mock markers.
- Select contract families and types; dynamically show only relevant duration, stake, barrier, prediction, and digit controls.
- Change the digit window and recompute all distribution and intelligence values from the same tick history used by the chart and displayed market price.
- Open and close intelligence, pressure, and active-contract panels; switch between workspace and history.
- Simulate proposal and execution confirmation without presenting trades as real.

## Technical structure
- Define replaceable models for Market, Tick, DigitStats, ContractAvailability, Proposal, OpenContract, TradeResult, and SentinelState.
- Implement mock service interfaces for market data, contracts, proposals, trades, and account data.
- Split the interface into focused modules for the account header, market tabs/finder, chart, contract selector/Trade Deck, digit intelligence, Sentinel intelligence, open contracts, and history.
- Use Recharts for the visual price series and derive every live panel from the shared deterministic stream.
- Add unique page metadata and validate desktop and mobile rendering and interactions in the running preview.
