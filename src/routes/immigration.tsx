import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, GraduationCap, Scale, Briefcase, IdCard } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Section } from "@/components/ui-kit";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";

import { Reveal } from "@/components/Reveal";
import { ImmigrationConsultation } from "@/components/ImmigrationConsultation";

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
        formProps={{
          title: "Request a Consultation",
          submitLabel: "SUBMIT INQUIRY",
          hideInjured: true,
          subject: "Immigration Consultation Inquiry — AJK Law Group",
        }}
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
        <ImmigrationConsultation />
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          Consultation fees are non-refundable. Payment is processed securely through Filevine.
        </p>
      </Section>
    </>
  );
}
