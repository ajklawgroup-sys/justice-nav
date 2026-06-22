import { Phone } from "lucide-react";
import { FIRM } from "@/lib/firm";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href={FIRM.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-[999px] bg-gold py-3 font-bold text-navy"
      >
        <Phone className="h-5 w-5" />
        CALL {FIRM.phone}
      </a>
    </div>
  );
}
