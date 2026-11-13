import { Bell, Menu, Search } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 sm:px-5">
      <button
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] md:hidden"
      >
        <Menu size={20} />
      </button>
      <label className="relative hidden max-w-md flex-1 sm:block">
        <Search
          aria-hidden="true"
          size={17}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
        />
        <input
          aria-label="Search"
          placeholder="Search anything..."
          className="h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] pl-10 pr-3 text-sm outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
        />
      </label>
      <div className="ml-auto flex items-center gap-2">
        <button
          aria-label="Notifications"
          className="relative rounded-lg p-2.5 text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)]"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[var(--accent)]" />
        </button>
        <button className="flex items-center gap-2 rounded-lg p-1.5 pr-2.5 hover:bg-[var(--surface-elevated)]">
          <span className="grid size-8 place-items-center rounded-full bg-[var(--surface-elevated)] text-xs font-semibold">
            JD
          </span>
          <span className="hidden text-sm sm:inline">Jordan Davis</span>
        </button>
      </div>
    </header>
  );
}
