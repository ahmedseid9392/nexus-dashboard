"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

export default function NavItem({
  label,
  href,
  icon: Icon,
  onNavigate,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  onNavigate?: () => void;
}) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? "bg-[var(--accent)]/20 text-white" : "text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-white"}`}
    >
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </Link>
  );
}
