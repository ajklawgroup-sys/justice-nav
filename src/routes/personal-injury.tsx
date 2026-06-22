import { createFileRoute } from "@tanstack/react-router";
import { Car, Truck, Bike, AlertTriangle, HeartCrack, HardHat, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Section } from "@/components/ui-kit";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/personal-injury")({
  head: () => ({
    meta: [
      { title: "Personal Injury Attorneys Anaheim CA | AJK Law Group | Free Consultation" },
      {
        name: "description",
        content:
          "Injured in an accident? AJK Law Group's Anaheim personal injury attorneys fight for maximum compensation. No fees unless we win. Free case review.",
      },
      { property: "og:title", content: "Personal Injury Attorneys in Anaheim | AJK Law Group" },
      { property: "og:url", content: "/personal-injury" },
    ],
    links: [{ rel: "canonical", href: "/personal-injury" }],
  }),
  component: PersonalInjury,
});

const services = [
  { icon: Car, title: "Car Accidents", desc: "Aggressive representation for drivers and passengers injured on the road." },
  { icon: Truck, title: "Truck Accidents", desc: "Taking on trucking companies and their insurers for serious injuries." },
  { icon: Bike, title: "Motorcycle Accidents", desc: "Protecting riders from biased insurance tactics and lowball offers." },
  { icon: AlertTriangle, title: "Slip & Fall", desc: "Holding property owners accountable for dangerous conditions." },
  { icon: HeartCrack, title: "Wrongful Death", desc: "Compassionate advocacy for families who have lost a loved one." },
  { icon: HardHat, title: "Workers Compensation", desc: "Securing the benefits you deserve after a workplace injury." },
];

const whyPoints = [
  "No fees unless we win",
  "Direct attorney access — not just paralegals",
  "We handle insurance so you don't have to",
  "Aggressive negotiators, experienced trial attorneys",
];

const faqs = [
  { q: "Do I have to pay if you don't win?", a: "No. We work on contingency — you pay nothing unless we recover for you." },
  { q: "How long does a personal injury case take?", a: "Typically 6–18 months, depending on the complexity of your case." },
  { q: "What is my case worth?", a: "It depends on your injuries, liability, and damages. We provide an honest assessment during your free review." },
  { q: "Should I talk to the other driver's insurance?", a: "No. Call us first — insurers often try to minimize your claim." },
  { q: "Can I file if the accident was partly my fault?", a: "Yes. California follows comparative fault rules, so you may still recover compensation." },
];

function PersonalInjury() {
  return (
    <>
      <PageHero
        eyebrow="Personal Injury"
        title="Personal Injury Attorneys in Anaheim, CA"
        subtitle="Hurt through no fault of your own? We handle everything while you focus on healing — and you pay nothing unless we win."
      />

      <Section bg="bg-background">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Areas We Handle
          </h2>
        </Reveal>
        <div className="mt-10">
          <ServiceGrid items={services} />
        </div>
      </Section>

      <Section bg="bg-soft">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Why Choose AJK for Your Injury Case
          </h2>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-2xl gap-3">
          {whyPoints.map((p) => (
            <Reveal key={p} className="flex items-center gap-3 rounded-[4px] border border-border bg-card px-5 py-4">
              <Check className="h-5 w-5 shrink-0 text-amber" />
              <span className="text-ink">{p}</span>
            </Reveal>
          ))}
        </div>
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

      <Section bg="bg-navy">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
              Start Your Free Case Review
            </h2>
            <p className="mt-4 text-white/70">
              Tell us what happened. There is no obligation and no fee unless we win.
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
