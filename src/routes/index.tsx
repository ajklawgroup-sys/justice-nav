import { createFileRoute } from "@tanstack/react-router";
import {
  Gavel,
  FileText,
  ShieldCheck,
  Clock,
  Languages,
  HeartHandshake,
  Star,
  Check,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Section, Eyebrow, GoldButton, NavyButton, CallButton } from "@/components/ui-kit";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personal Injury & Immigration Lawyers | AJK Law Group | Anaheim, CA" },
      {
        name: "description",
        content:
          "AJK Law Group — Anaheim personal injury & immigration attorneys. No fees unless we win. Free confidential case review. Se Habla Español.",
      },
      { property: "og:title", content: "AJK Law Group | Anaheim Personal Injury & Immigration" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const piList = [
  "Car Accidents",
  "Truck Accidents",
  "Motorcycle Accidents",
  "Slip & Fall",
  "Wrongful Death",
  "Workers Compensation",
];
const immList = [
  "Asylum & Refugee",
  "Family-Based Petitions",
  "DACA",
  "Deportation Defense",
  "Work Visas",
  "Green Cards",
];

const whyTiles = [
  { icon: ShieldCheck, t: "No Fees Unless We Win", d: "You pay $0 until we recover for you." },
  { icon: Clock, t: "Available 24/7", d: "We are here when you need us most." },
  { icon: Languages, t: "Se Habla Español", d: "Serving our Spanish-speaking community." },
  { icon: HeartHandshake, t: "Compassionate Advocacy", d: "We treat every client like family." },
];

const steps = [
  { n: "1", t: "Get a Free Case Review", d: "Tell us what happened — no obligation, 24/7." },
  { n: "2", t: "We Handle Everything", d: "Paperwork, insurance, courts. You focus on healing." },
  { n: "3", t: "Get Compensated", d: "We fight for the maximum recovery you deserve." },
];

const testimonials = [
  {
    q: "AJK Law Group fought for me when no one else would. After my car accident, they handled everything and got me a result I never expected. Highly recommend.",
    n: "Maria G., Anaheim",
  },
  {
    q: "Mr. Abusharar helped my family when we were terrified of deportation. He never gave up on us and we are now safe. God bless this firm.",
    n: "Ahmad K., Client",
  },
  {
    q: "Professional, responsive, and they genuinely care. My slip and fall case was handled perfectly from start to finish.",
    n: "Jennifer T., Orange County",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-gold" />
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="container-x grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[3fr_2fr]">
          <Reveal>
            <Eyebrow gold>Anaheim's Trusted Law Firm</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] text-white md:text-6xl">
              Real Lawyers. <span className="italic text-gold">Real Results.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Hurt in an accident or facing an immigration issue? Contact {FIRM.name} for a FREE
              confidential consultation today.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GoldButton href="#lead">GET FREE CONSULTATION</GoldButton>
              <CallButton light />
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-gold" /> No Fees Unless We Win
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-gold" /> Available 24/7
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-gold" /> Se Habla Español
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div id="lead">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured In */}
      <Section bg="bg-card" className="!py-10">
        <Reveal className="text-center">
          <Eyebrow>As Seen In</Eyebrow>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
            {["NBC", "CNN", "FOX", "ABC News", "Bloomberg"].map((b) => (
              <span key={b} className="font-serif text-2xl font-semibold text-ink">
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Practice Areas */}
      <Section bg="bg-background">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            How We Can Help You
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-2">
          <RevealItem className="flex flex-col rounded-[4px] border border-border bg-card p-8 shadow-sm transition-transform hover:scale-[1.02]">
            <Gavel className="h-10 w-10 text-amber" />
            <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">Personal Injury Law</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We fight for accident victims across Southern California. If you have been hurt through
              no fault of your own, we handle everything while you focus on healing — and you pay
              nothing unless we win.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink">
              {piList.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <NavyButton to="/personal-injury">LEARN MORE</NavyButton>
            </div>
          </RevealItem>

          <RevealItem className="flex flex-col rounded-[4px] border border-border bg-card p-8 shadow-sm transition-transform hover:scale-[1.02]">
            <FileText className="h-10 w-10 text-amber" />
            <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">Immigration Law</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              From asylum cases to family petitions, DACA renewals to deportation defense — {FIRM.name}{" "}
              navigates complex immigration matters with compassion and aggressive advocacy.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink">
              {immList.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <NavyButton to="/immigration">LEARN MORE</NavyButton>
            </div>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* Why Choose */}
      <Section bg="bg-navy">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            The System Is Rigged. We Are Here to Fix It.
          </h2>
          <p className="mt-4 text-white/70">
            Insurance companies and the government have armies of lawyers working against you. At{" "}
            {FIRM.name}, we level the playing field for everyday people in Anaheim and across Southern
            California.
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyTiles.map((tile) => (
            <RevealItem
              key={tile.t}
              className="rounded-[4px] border border-white/10 bg-white/5 p-6"
            >
              <tile.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-3 font-serif text-xl font-semibold text-white">{tile.t}</h3>
              <p className="mt-1 text-sm text-white/65">{tile.d}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* 3-Step */}
      <Section bg="bg-soft">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">What to Expect</h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.n} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[999px] bg-navy font-serif text-2xl font-semibold text-gold">
                {s.n}
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Calendar */}
      <Section bg="bg-card">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Schedule a Consultation
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book directly on our calendar — no phone tag, no waiting.
          </p>
        </Reveal>
        <div className="mt-10">
          <CalendarEmbed />
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="bg-navy">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex justify-center">
            <Stars />
          </div>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.n} className="rounded-[4px] bg-card p-6 shadow-sm">
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-ink">"{t.q}"</p>
              <p className="mt-4 font-semibold text-navy">— {t.n}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-8 text-center text-sm text-white/70">
          Trusted by families across Southern California
        </p>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-gold">
        <div className="container-x py-16 text-center md:py-20">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              Get Your FREE Case Review Today
            </h2>
            <p className="mt-3 font-medium text-navy/80">
              All law firms are not the same. There is only one {FIRM.name}.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center justify-center rounded-[999px] bg-navy px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
              >
                CALL NOW {FIRM.phone}
              </a>
              <a
                href="#lead"
                className="inline-flex items-center justify-center rounded-[999px] bg-white px-6 py-3 text-sm font-bold text-navy transition-opacity hover:opacity-85"
              >
                SUBMIT YOUR CASE
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
