import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Swords, HeartHandshake } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui-kit";
import { LeadForm } from "@/components/LeadForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AJK Law Group | Abusharar, Jubran & Khatib | California" },
      {
        name: "description",
        content:
          "Meet the attorneys of AJK Law Group (Abusharar & Associates) — fighting for California families in personal injury and immigration matters.",
      },
      { property: "og:title", content: "About AJK Law Group | California" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const attorneys = [
  {
    name: "Akram Abusharar, Esq.",
    role: "Immigration Law Specialist",
    focus: "Practice Focus: Immigration Law Only",
    licensed: "Licensed in MI and MD",
    initials: "AA",
    bio: "Leading AJK Law Group with a relentless commitment to justice for immigrant families, handling immigration matters before USCIS and in immigration courts nationwide.",
  },
  {
    name: "Lewis Jubran, Esq.",
    role: "Attorney",
    licensed: "Licensed in CA and D.C.",
    initials: "LJ",
    bio: "A dedicated advocate who fights tirelessly to protect clients' rights in both personal injury and immigration matters.",
  },
  {
    name: "Salah Khatib, Esq.",
    role: "Attorney",
    licensed: "Licensed in CA",
    initials: "SK",
    bio: "Bringing compassion and tenacity to every case, ensuring each client is treated like family.",
  },
];

const values = [
  { icon: ShieldCheck, t: "Integrity", d: "We do what is right for our clients, every single time." },
  { icon: Swords, t: "Tenacity", d: "We never back down from a fight worth winning." },
  { icon: HeartHandshake, t: "Compassion", d: "We treat every client with the care they deserve." },
];

function About() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-x py-16 text-center md:py-24">
          <Reveal>
            <Eyebrow gold>Our Firm</Eyebrow>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
              About {FIRM.name}
            </h1>
            <p className="mt-4 text-lg text-white/75">Fighting for California families since day one.</p>
          </Reveal>
        </div>
      </section>

      <Section bg="bg-background">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Our Mission</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Our mission is to defend the powerless and level the playing field for real people who
            have been hurt or threatened through no fault of their own.
          </p>
        </Reveal>
      </Section>

      <Section bg="bg-soft">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Meet Our Team</h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {attorneys.map((a) => (
            <RevealItem
              key={a.name}
              className="rounded-[4px] border border-border bg-card p-7 text-center shadow-sm"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[999px] bg-navy font-serif text-3xl font-semibold text-white">
                {a.initials}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{a.name}</h3>
              <p className="mt-1 text-sm font-semibold text-navy">{a.role}</p>
              {"focus" in a && a.focus ? (
                <p className="text-xs text-muted-foreground">{a.focus}</p>
              ) : null}
              <p className="text-xs text-muted-foreground">{a.licensed}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section bg="bg-background">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Our Values</h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <RevealItem key={v.t} className="rounded-[4px] border border-border bg-card p-7 text-center shadow-sm">
              <v.icon className="mx-auto h-10 w-10 text-navy" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="rounded-[4px] bg-soft px-6 py-4 text-sm text-ink">
            {FIRM.name} proudly serves English and Arabic-speaking clients across California.
          </p>
        </Reveal>
      </Section>

      <Section bg="bg-soft">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              Let's Talk About Your Case
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out for a free, confidential consultation with our team.
            </p>
          </Reveal>
          <Reveal>
            <LeadForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
