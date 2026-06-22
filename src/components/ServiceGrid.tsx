import type { LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "./Reveal";

export function ServiceGrid({
  items,
}: {
  items: { icon: LucideIcon; title: string; desc: string }[];
}) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <RevealItem
          key={it.title}
          className="rounded-[4px] border border-border bg-card p-6 shadow-sm transition-transform hover:scale-[1.02]"
        >
          <it.icon className="h-9 w-9 text-amber" />
          <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
