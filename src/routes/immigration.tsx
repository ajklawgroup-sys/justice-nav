import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, GraduationCap, Scale, Briefcase, IdCard, Building2, Video } from "lucide-react";
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
      { title: "Federal Immigration Attorneys | All 50 States | AJK Law Group" },
      {
        name: "description",
        content:
          "Federal immigration attorneys representing clients before USCIS and in immigration courts and proceedings in all 50 states. Asylum, DACA, deportation defense, family petitions. Free consultation.",
      },
      { property: "og:title", content: "Federal Immigration Attorneys | All 50 States | AJK Law Group" },
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
  { q: "Do you handle immigration court cases?", a: "Yes. Because immigration law is federal, we represent clients before USCIS and in immigration courts and proceedings across all 50 states." },
];

function Immigration() {
  return (
    <>
      <PageHero
        eyebrow="Immigration"
        title="Federal Immigration Attorneys Serving All 50 States"
        badge="🇺🇸 Federal Practice — We Accept Cases from All 50 States"
        subtitle="Immigration law is federal — no matter where you are in the United States, AJK Law Group can represent you. We handle cases before USCIS and in immigration courts and proceedings nationwide for clients in all 50 states."
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
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Serving Families Nationwide
          </h2>
          <p className="mt-8 inline-block rounded-[999px] border border-white/20 px-5 py-2 text-sm text-white/85">
            Se Habla Español | نتحدث العربية — We proudly serve Spanish and Arabic-speaking clients.
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
            <LeadForm title="Request a Consultation" submitLabel="SUBMIT INQUIRY" />
          </Reveal>
        </div>
      </Section>

      <Section bg="bg-soft" className="!bg-[#f2efe6]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Schedule Your Immigration Consultation
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Immigration consultations are paid. Personal injury case reviews are always free.
          </p>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              icon: Building2,
              title: "In-Person Consultation",
              price: "$200",
              desc: "Meet with our immigration attorneys at our office in Anaheim, CA. Bring your documents and get personalized legal guidance face to face.",
              note: "📍 1601 E Orangewood Ave, Suite 175, Anaheim, CA 92805",
              cta: "BOOK & PAY $200",
            },
            {
              icon: Video,
              title: "Virtual Consultation (Zoom)",
              price: "$250",
              desc: "Connect with our attorneys from anywhere in the United States via Zoom. Ideal for clients outside of California.",
              note: "🌐 Available in all 50 states",
              cta: "BOOK & PAY $250",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title}>
                <div className="flex h-full flex-col rounded-[12px] border border-navy bg-white p-8 shadow-md">
                  <Icon className="h-10 w-10 text-navy" />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{card.title}</h3>
                  <p className="mt-2 text-4xl font-bold text-navy">{card.price}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{card.desc}</p>
                  <p className="mt-4 text-sm font-medium text-navy">{card.note}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href="https://payments.filevine.com/pay?id=ODZmNTI1ZmEtMTIxMy00MzUwLWIyMTYtNjU3MTRlMWVhYzQ0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[999px] bg-navy px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                    >
                      {card.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          Consultation fees are non-refundable. Payment is processed securely through Filevine.
        </p>
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
