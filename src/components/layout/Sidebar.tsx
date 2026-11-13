import {
  Activity,
  BarChart3,
  Box,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import NavItem from "./NavItem";

const items = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Products", href: "/dashboard/products", icon: Box },
  { label: "Users", href: "/dashboard/users", icon: Users },
  { label: "Activity", href: "/dashboard/activity", icon: Activity },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="mb-7 flex items-center gap-3 px-2">
        <div className="grid size-9 place-items-center rounded-xl bg-[var(--accent)] font-bold">
          N
        </div>
        <span className="font-semibold tracking-wide">Nexus</span>
      </div>
      <nav aria-label="Main navigation" className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.href} {...item} onNavigate={onNavigate} />
        ))}
      </nav>
    </aside>
  );
}
