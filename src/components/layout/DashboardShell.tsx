"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-4 p-4 md:grid-cols-[220px_minmax(0,1fr)] md:p-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <Topbar onMenuClick={() => setMenuOpen(true)} />
          <main className="min-h-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
            {children}
          </main>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
          <aside
            aria-label="Mobile navigation"
            className="relative h-full w-[min(20rem,85vw)] bg-[var(--surface)] p-4 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Nexus</span>
              <button
                className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </aside>
        </div>
      )}
    </div>
  );
}
