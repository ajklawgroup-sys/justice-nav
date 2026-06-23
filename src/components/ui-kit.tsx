import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { FIRM } from "@/lib/firm";

export function Section({
  children,
  className = "",
  bg = "bg-background",
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section className={`${bg} ${className}`}>
      <div className="container-x py-16 md:py-20">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, gold = false }: { children: ReactNode; gold?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        gold ? "text-white" : "text-navy"
      }`}
    >
      {children}
    </p>
  );
}

export function GoldButton({
  children,
  href,
  to,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
}) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-[999px] bg-gold px-6 py-3 text-sm font-bold text-navy transition-opacity hover:opacity-85";
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function NavyButton({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-[999px] bg-navy px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
    >
      {children}
    </Link>
  );
}

export function CallButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={FIRM.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-[999px] px-6 py-3 text-sm font-bold transition-opacity hover:opacity-85 ${
        light ? "border border-white text-white" : "bg-navy text-white"
      }`}
    >
      <Phone className="h-4 w-4" />
      CALL {FIRM.phone}
    </a>
  );
}
