# Sentinel Trader

Build a completely new, premium next-generation Deriv Options / Synthetic Indices manual trading platform called Sentinel DTrader.

IMPORTANT: This is NOT a forex/CFD trading terminal, NOT MT5, NOT cTrader, and NOT a generic cryptocurrency trading dashboard.

The visual and interaction foundation must be a modern evolution of Deriv Trader / DTrader for binary and digital options, but the design must be original and substantially more sophisticated, elegant and futuristic.

The product should feel like a 2030 professional trading cockpit, not an old-fashioned 2010 trading form.

The application is initially a UI/UX prototype. Do NOT implement fake trading functionality as if it were real. Use clearly structured mock data and service interfaces so real Deriv API/WebSocket functionality can be connected later.

CORE PRODUCT

The user should be able to manually trade Deriv options from one unified workspace.

The primary market universe is:

Volatility Indices

Crash/Boom Indices

Jump Indices

Step Indices

Range Break Indices

Other Deriv Derived/Synthetic markets when available

Do NOT make forex the focus of the interface.

Do NOT design this as a CFD platform.

The application should be structured around:

MARKET → CHART → CONTRACT → LIVE DIGIT INTELLIGENCE → SENTINEL INTELLIGENCE → EXECUTION → OPEN CONTRACT

DESIGN PRINCIPLE

The interface must be adaptive.

Changing the selected market should update the chart, market information, available contracts, digit statistics and trading panel.

Changing the contract type should transform the trading panel so that only controls relevant to that contract are displayed.

The user must never need to leave the main trading workspace just to change market or contract.

MAIN DESKTOP LAYOUT

Create a sophisticated dark professional interface.

Use:

deep graphite/dark background

subtle glass panels

thin elegant borders

restrained gradients

excellent spacing

premium typography

subtle animations

clear hierarchy

highly readable numerical information

restrained use of accent colors

no casino aesthetic

no excessive neon

no giant cartoon buttons

The interface should look like a serious professional financial product.

TOP NAVIGATION

Create a compact top navigation/header containing:

Sentinel logo/wordmark

DTrader

connection status

account/demo status

balance

settings

notifications

Below the header create a horizontal market-tab system.

Example:

V50 | V75 | V100 | V25 | Boom 500 | Crash 500 | Step | +

Each market tab should show:

market name

live status

current price

optional tiny movement indicator

The user can open multiple markets as tabs.

Clicking a market tab must switch the entire trading workspace to that market.

MARKET FINDER

Create a collapsible left-side market finder.

Categories:

Favourites
Volatility
Crash/Boom
Jump
Step
Range Break
Other Derived

Include:

search

favourites

live market status

market name

current price

small movement indicator

The market list should be designed so it can later be populated dynamically from the Deriv API.

Do not hard-code the architecture around a fixed market list.

CENTRAL LIVE CHART

The central portion of the screen must contain a large professional live trading chart.

Include:

current price

live tick updates using mock data

candle/line/OHLC chart options

timeframe controls

chart type controls

zoom

fullscreen

indicators button

drawing tools button

current price line

entry marker

expiry marker

contract markers

optional live P/L overlay

The chart should visually resemble a modern evolution of Deriv Trader rather than a forex terminal.

ADAPTIVE CONTRACT DECK

Create a right-side trading panel called:

TRADE DECK

At the top show the selected market.

Then provide contract families relevant to Deriv options.

DIGITS:

Even

Odd

Matches

Differs

Over

Under

DIRECTION:

Rise

Fall

Higher

Lower

OTHER DIGITAL/OPTIONS CONTRACTS:

Touch

No Touch

Structure the interface so additional Deriv contract families can later be added without redesigning the application.

When the user selects EVEN/ODD, show:

duration

duration unit

stake

live proposal area

payout

potential profit

execution buttons

When the user selects OVER/UNDER, show:

prediction/barrier selector

duration

stake

proposal

payout

profit

execution button

When the user selects MATCHES/DIFFERS, show an elegant 0–9 digit selector.

When the user selects RISE/FALL, show the appropriate directional contract controls.

The contract panel must dynamically change based on the selected contract.

Do not show irrelevant controls.

LIVE 0–9 DIGIT DISTRIBUTION

THIS IS ONE OF THE MOST IMPORTANT FEATURES OF THE DESIGN.

Create a large, beautiful and highly visible section at the bottom of the main trading workspace called:

LIVE DIGIT DISTRIBUTION

It must contain all ten digits:

0 1 2 3 4 5 6 7 8 9

For every digit display:

percentage

count

visual frequency bar

direction/change indicator

recent appearance information

Example:

0 9.4% ████████
1 7.8% ██████
2 10.1% █████████
3 12.2% ███████████
4 8.7% ███████
5 13.4% ████████████
6 9.8% ████████
7 7.2% ██████
8 12.0% ███████████
9 9.4% ████████

This must visually communicate the live distribution immediately.

Include selectable statistical windows:

20
50
100
120
500
1000

When the user changes the window, the distribution visualization should update.

Also display aggregate information such as:

EVEN %
ODD %
HOT DIGITS
COLD DIGITS
MOST RECENT DIGIT
CURRENT STREAK

For the prototype, use deterministic mock data.

Architect this component so the mock data source can later be replaced by a real tick stream.

IMPORTANT:

Do NOT create a fake random percentage generator that changes independently from the chart.

The component should be structured around a single market tick data source.

SENTINEL INTELLIGENCE

Below or adjacent to the digit distribution, create a compact intelligence layer.

Title:

SENTINEL LIVE INTELLIGENCE

Display:

Psychology

Pressure

Momentum

Parity

Losing Threat

Liquidity

Feed Status

Market Status

Example:

Psychology 68%
Pressure 74%
Momentum +12
Parity ODD
Losing Threat LOW
Liquidity CLEAR
Feed LIVE

Use neutral statuses such as:

ANALYSIS READY
ANALYSIS LAG
FEED STALE
ENGINE BUSY
BACKEND DEGRADED
NO TRADE

Do not make the prototype automatically place trades.

Sentinel is intelligence and analysis.

The user remains in control of manual execution.

DIGIT PRESSURE VISUALIZATION

Add an optional expandable section showing digit pressure:

0 ↓
1 ↓
2 →
3 ↑
4 ↑
5 ↑↑
6 →
7 ↓
8 ↑
9 →

This should be visually sophisticated but compact.

TRADE EXECUTION

Create realistic manual execution controls.

Before execution, the interface should show a proposal/quote area.

Example:

Stake: $1.00
Payout: $1.92
Potential Profit: $0.92

Then display the appropriate action button.

For Even/Odd:

EVEN | ODD

For Rise/Fall:

RISE | FALL

For Over/Under:

OVER | UNDER

For Matches/Differs:

MATCHES | DIFFERS

Do not implement real trading in the prototype.

Create clean service abstractions so the real Deriv proposal and buy APIs can be connected later.

OPEN CONTRACTS

Create a collapsible bottom/right section for active contracts.

Each contract card should display:

contract type

market

contract ID

entry price

current value

stake

current P/L

expiry

remaining ticks/time

status

Sell/Close action

The Sell/Close control should be visually present but clearly implemented as a prototype action until the real Deriv API is connected.

HISTORY

Create a professional transaction/history panel.

Columns:

Time
Market
Contract
Direction/Prediction
Stake
Payout
Profit/Loss
Result
Contract ID

Provide filtering by:

market

contract

win/loss

date

RESPONSIVE MOBILE DESIGN

Do NOT simply shrink the desktop interface.

Create a dedicated mobile composition.

Mobile should prioritize:

market

live chart

live 0–9 digit distribution

Sentinel intelligence

contract controls

execution

open contracts

Use bottom sheets for trade controls and active contracts.

The main Buy/Trade controls must remain easily reachable with one hand.

The 0–9 distribution must remain visible and useful on mobile.

MICROINTERACTIONS

Add tasteful transitions:

market switching

contract switching

live tick updates

digit percentage changes

panel expansion

contract selection

tab switching

trade confirmation

Do not over-animate the application.

The interface should feel extremely fast.

ARCHITECTURE

Even though this is a prototype, organize the code professionally.

Create clear modules/components for:

MarketFinder
MarketTabs
ChartWorkspace
ContractSelector
TradeDeck
DigitDistribution
DigitPressure
SentinelIntelligence
OpenContracts
TradeHistory
AccountHeader
ConnectionStatus

Create a service layer abstraction such as:

marketDataService
contractService
proposalService
tradeService
accountService

Use mock implementations initially.

The production implementation will later replace these with real Deriv WebSocket/API services.

VERY IMPORTANT:

Design around one authoritative market-data stream.

Do not create separate independent fake tick streams for:

chart

digit distribution

Sentinel

market price

They should all consume the same mock market-data source in the prototype.

This is important because the production version will use one authoritative Deriv tick stream to avoid duplicate processing and unnecessary WebSocket connections.

DATA MODEL

Use a market state concept similar to:

Market
Tick
DigitStats
ContractAvailability
Proposal
OpenContract
TradeResult
SentinelState

Make these models easy to replace with real Deriv API responses later.

VISUAL QUALITY BAR

The finished interface should look like a product that could plausibly be launched in 2030.

It should NOT look like:

an old binary-options website

a casino

a generic admin dashboard

MT5

cTrader

a forex terminal

a cryptocurrency exchange clone

It should feel like:

A futuristic professional Deriv manual-trading cockpit with real-time digit intelligence.

BRAND

Product name:

SENTINEL DTRADER

Use a sophisticated Sentinel visual identity.

Do not add unnecessary logos from third parties.

Do not copy Deriv branding.

Use original interface styling.

IMPORTANT FINAL REQUIREMENT

Build the complete clickable UI prototype.

The major interactions must work visually:

switch market

open/close market tabs

search markets

select contract

change duration

change stake

switch Even/Odd

switch Over/Under

switch Matches/Differs

select digits

change digit window

expand/collapse intelligence

expand/collapse open contracts

switch between chart/workspace/history views

responsive mobile navigation

Use realistic deterministic mock market data.

Clearly separate prototype/mock services from future real Deriv integration.

Do not claim that mock trading is real trading.

The result should be a polished, production-quality frontend foundation that can later be connected to the real Deriv API without redesigning the UI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b8b8357c-e873-4da5-ae07-cdc49841d4fb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
