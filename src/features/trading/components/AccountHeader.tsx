import { Bell, Bolt, CircleUserRound, Settings, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { accountService } from "../services/mockTradingServices";

export function AccountHeader({ view, onView }: { view: "workspace" | "history"; onView: (view: "workspace" | "history") => void }) {
  const account = accountService.getAccount();
  return <header className="flex h-14 items-center justify-between border-b border-border bg-panel px-3 lg:px-4">
    <div className="flex min-w-0 items-center gap-3"><div className="grid size-8 shrink-0 place-items-center border border-primary/40 bg-primary/10 text-primary"><Bolt className="size-4" /></div><div className="min-w-0"><div className="truncate text-sm font-semibold tracking-wide">SENTINEL <span className="text-primary">DTRADER</span></div><div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">Options intelligence terminal</div></div></div>
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary"><Button size="sm" variant={view === "workspace" ? "secondary" : "ghost"} onClick={() => onView("workspace")}>Workspace</Button><Button size="sm" variant={view === "history" ? "secondary" : "ghost"} onClick={() => onView("history")}>History</Button></nav>
    <div className="flex items-center gap-2"><div className="hidden items-center gap-2 border-r border-border pr-3 text-xs lg:flex"><Wifi className="size-3 text-positive"/><span>Connected</span><span className="text-muted-foreground">32ms</span></div><div className="text-right"><div className="text-[10px] uppercase text-muted-foreground">{account.type} account</div><div className="font-mono text-sm font-semibold">${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div></div><Button size="icon" variant="ghost" aria-label="Notifications"><Bell/></Button><Button size="icon" variant="ghost" aria-label="Settings"><Settings/></Button><CircleUserRound className="hidden size-6 text-muted-foreground sm:block"/></div>
  </header>;
}
