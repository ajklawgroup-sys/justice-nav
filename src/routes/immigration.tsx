import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, GraduationCap, Scale, Briefcase, IdCard, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Section } from "@/components/ui-kit";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/immigration")({
  head: () => ({
    meta: [
      { title: "Immigration Lawyers Anaheim CA | Asylum, DACA, Deportation Defense | AJK" },
      {
        name: "description",
        content:
          "AJK Law Group's Anaheim immigration attorneys handle asylum, family petitions, DACA, deportation defense, work visas and green cards. Se Habla Español.",
      },
      { property: "og:title", content: "Immigration Attorneys in Anaheim | AJK Law Group" },
      { property: "og:url", content: "/immigration" },
    ],
    links: [{ rel: "canonical", href: "/immigration" }],
  }),
  component: Immigration,
});

const services = [
  { icon: ShieldCheck, title: "Asylum", desc: "Protection for those fearing persecution in their home country." },
  { icon: Users, title: "Family Petitions", desc: "Reuniting families through family-based immigration petitions." },
  { icon: GraduationCap, title: "DACA", desc: "Renewals and guidance under current policy for Dreamers." },
  { icon: Scale, title: "Deportation Defense", desc: "Aggressive defense in removal and immigration court proceedings." },
  { icon: Briefcase, title: "Work Visas", desc: "Employment-based visa petitions for workers and employers." },
  { icon: IdCard, title: "Green Cards", desc: "Guidance through permanent residency from start to finish." },
];

const faqs = [
  { q: "What is asylum?", a: "Asylum is protection for those who fear persecution in their home country based on race, religion, nationality, political opinion, or membership in a particular social group." },
  { q: "Can DACA still be renewed?", a: "Yes, under current policy. Contact us for the latest updates and to file your renewal on time." },
  { q: "What happens if I get a deportation notice?", a: "Call us immediately. Time is critical and acting quickly can protect your rights." },
  { q: "How long does a green card take?", a: "It varies — typically 1 to 10+ years depending on the category and your country of origin." },
  { q: "Do you handle immigration court cases?", a: "Yes. We represent clients in all immigration court proceedings." },
];

function Immigration() {
  return (
    <>
      <PageHero
        eyebrow="Immigration"
        title="Immigration Attorneys in Anaheim, CA"
        subtitle="From asylum to green cards, we navigate complex immigration matters with compassion and aggressive advocacy."
      />

      <Section bg="bg-background">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">Our Services</h2>
        </Reveal>
        <div className="mt-10">
          <ServiceGrid items={services} />
        </div>
      </Section>

      <Section bg="bg-navy">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold" />
            ))}
          </div>
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Trusted by Families Across Southern California
          </h2>
          <p className="mt-5 text-lg text-white/75">
            "Mr. Abusharar helped my family when we were terrified of deportation. He never gave up on
            us and we are now safe. God bless this firm."
          </p>
          <p className="mt-3 font-semibold text-gold">— Ahmad K., Client</p>
          <p className="mt-8 inline-block rounded-[999px] border border-white/20 px-5 py-2 text-sm text-white/85">
            Se Habla Español — We proudly serve Spanish-speaking clients.
          </p>
        </Reveal>
      </Section>

      <Section bg="bg-background">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-10">
          <Faq items={faqs} />
        </div>
      </Section>

      <Section bg="bg-soft">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              Request a Confidential Consultation
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your information is safe with us. Tell us about your situation and we will respond
              within 24 hours.
            </p>
          </Reveal>
          <Reveal>
            <LeadForm />
          </Reveal>
        </div>
      </Section>

      <Section bg="bg-card">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Schedule a Consultation
          </h2>
        </Reveal>
        <div className="mt-10">
          <CalendarEmbed />
        </div>
      </Section>
    </>
  );
}
