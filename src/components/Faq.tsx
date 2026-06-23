import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-[4px] border border-border bg-card">
      {items.map((item, i) => (
        <Reveal key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-serif text-lg font-medium text-navy">{item.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-navy transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
