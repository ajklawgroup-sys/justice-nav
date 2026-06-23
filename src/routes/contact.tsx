import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui-kit";
import { LeadForm } from "@/components/LeadForm";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/Reveal";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AJK Law Group | Free Case Review | California" },
      {
        name: "description",
        content:
          "Contact AJK Law Group in California for a free case review. Call (714) 512-2122 or submit your case online. Available 24/7.",
      },
      { property: "og:title", content: "Contact AJK Law Group | California" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-x py-14 text-center md:py-20">
          <Reveal>
            <Eyebrow gold>Get In Touch</Eyebrow>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
              Contact {FIRM.name}
            </h1>
            <p className="mt-4 text-lg text-white/75">{FIRM.tagline}</p>
          </Reveal>
        </div>
      </section>

      <Section bg="bg-background">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <LeadForm title="Send Us a Message" />
          </Reveal>

          <Reveal className="space-y-5">
            <div className="rounded-[4px] border border-border bg-card p-6 shadow-sm">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-navy" />
                  <span className="text-ink">{FIRM.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-navy" />
                  <a href={FIRM.phoneHref} className="text-ink hover:text-navy">
                    {FIRM.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-navy" />
                  <a href={FIRM.emailHref} className="text-ink hover:text-navy">
                    {FIRM.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-navy" />
                  <span className="text-ink">
                    Mon–Fri 9am–6pm
                    <br />
                    Sat by appointment
                    <br />
                    24/7 Emergency Line
                  </span>
                </li>
              </ul>
            </div>

            <iframe
              title="AJK Law Group service area — California"
              src="https://www.google.com/maps?q=California&output=embed"
              className="h-64 w-full rounded-[4px] border border-border"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

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
    </>
  );
}
