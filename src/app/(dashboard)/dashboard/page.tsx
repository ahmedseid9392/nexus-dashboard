import {
  Activity,
  ArrowUpRight,
  DollarSign,
  ShoppingBag,
  Users,
} from "lucide-react";
import DashboardShell from "@/components/layout/DashboardShell";
import PageHeader from "@/components/layout/PageHeader";

const stats = [
  {
    title: "Total revenue",
    value: "$48,294",
    change: "+12.8%",
    icon: DollarSign,
  },
  { title: "Active users", value: "2,840", change: "+8.2%", icon: Users },
  { title: "Orders", value: "1,264", change: "+4.6%", icon: ShoppingBag },
  { title: "Engagement", value: "68.4%", change: "+2.1%", icon: Activity },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Overview"
        description="Welcome back, Jordan. Here's what's happening today."
        action={
          <button className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Download report
          </button>
        }
      />
      <section
        aria-label="Key metrics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map(({ title, value, change, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-secondary)]">
                {title}
              </span>
              <Icon size={18} className="text-[var(--text-secondary)]" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <strong className="text-2xl font-semibold">{value}</strong>
              <span className="flex items-center text-xs font-medium text-[var(--success)]">
                {change}
                <ArrowUpRight size={14} />
              </span>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Compared to last month
            </p>
          </article>
        ))}
      </section>
      <section className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)]">
        <article className="min-h-72 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
          <h2 className="font-semibold">Revenue overview</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Monthly performance
          </p>
          <div className="mt-8 flex h-40 items-end gap-2 sm:gap-4">
            {[38, 55, 45, 68, 52, 78, 62, 88, 70, 96, 74, 84].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-[var(--accent)]/70"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
          <div className="mt-3 flex justify-between text-xs text-[var(--text-secondary)]">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
          <h2 className="font-semibold">Recent activity</h2>
          <div className="mt-5 space-y-5">
            {[
              ["New order received", "Order #3289 · 10 min ago"],
              ["Subscription renewed", "Acme Inc. · 42 min ago"],
              ["New user joined", "Taylor Morgan · 1 hour ago"],
              ["Payment completed", "$248.00 · 2 hours ago"],
            ].map(([title, meta]) => (
              <div key={title} className="flex gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
