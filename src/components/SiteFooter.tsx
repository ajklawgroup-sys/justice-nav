import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { FIRM } from "@/lib/firm";

const columns = [
  {
    title: "Practice Areas",
    links: [
      "Car Accidents",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Slip & Fall",
      "Wrongful Death",
      "Rideshare Accidents",
    ],
    to: "/personal-injury",
  },
  {
    title: "Immigration Services",
    links: ["Asylum", "Family Petitions", "DACA", "Deportation Defense", "Work Visas", "Green Cards"],
    to: "/immigration",
  },
  {
    title: "About",
    links: ["Our Team", "Blog", "Careers"],
    to: "/about",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <a href="/">
            <div style={{ background: "white", borderRadius: 4, padding: "4px 10px", display: "inline-block" }}>
              <img src="/ajk_logo.PNG" alt="AJK Law Group" style={{ height: 40, width: "auto", display: "block" }} />
            </div>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/60">{FIRM.tagline}</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, MapPin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex h-9 w-9 items-center justify-center rounded-[999px] border border-white/20 transition-colors hover:border-white hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to={col.to} className="transition-colors hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{FIRM.address}</li>
            <li>
              <a href={FIRM.phoneHref} className="hover:text-white">
                {FIRM.phone}
              </a>
            </li>
            <li>
              <a href={FIRM.emailHref} className="hover:text-white">
                {FIRM.email}
              </a>
            </li>
            <li className="text-white/60">Mon–Fri 9am–6pm</li>
            <li className="text-white/60">Sat by appt</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2025 {FIRM.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Disclaimer</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <Link to="/contact" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
        <div className="container-x pb-8 text-xs leading-relaxed text-white/35">
          Attorney Advertising. No guarantee of outcome. Cases handled by attorneys licensed in their
          respective jurisdictions. Akram Abusharar licensed in MI and MD. Lewis Jubran licensed in CA
          and D.C. Salah Khatib licensed in CA.
        </div>
      </div>
    </footer>
  );
}
