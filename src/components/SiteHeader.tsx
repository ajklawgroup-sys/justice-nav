import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { FIRM } from "@/lib/firm";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/personal-injury", label: "Personal Injury" },
  { to: "/immigration", label: "Immigration" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <a href="/">
          <div style={{ background: "white", borderRadius: 4, padding: "4px 10px", display: "inline-block" }}>
            <img
              src="/ajk_logo.PNG"
              alt="AJK Law Group"
              style={{ height: 64, width: "auto", display: "block" }}
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={FIRM.phoneHref}
            className="hidden items-center gap-2 rounded-[999px] bg-white px-4 py-2 text-sm font-bold text-navy transition-opacity hover:opacity-85 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {FIRM.phone}
          </a>
          <button
            aria-label="Open menu"
            className="text-white lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy lg:hidden">
          <div className="container-x flex h-16 items-center justify-between">
            <a href="/">
              <div style={{ background: "white", borderRadius: 4, padding: "4px 10px", display: "inline-block" }}>
                <img src="/ajk_logo.PNG" alt="AJK Law Group" style={{ height: 44, width: "auto", display: "block" }} />
              </div>
            </a>
            <button aria-label="Close menu" className="text-white" onClick={() => setOpen(false)}>
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="container-x mt-8 flex flex-col gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-white hover:text-white"
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={FIRM.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-[999px] bg-white px-5 py-3 font-bold text-navy"
            >
              <Phone className="h-5 w-5" />
              {FIRM.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
