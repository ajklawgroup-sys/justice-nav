import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Section } from "@/components/ui-kit";
import { FIRM } from "@/lib/firm";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AJK Law Group" },
      {
        name: "description",
        content:
          "Terms of Service for the AJK Law Group website — messaging terms of service, SMS consent and opt-out, acceptable use, and disclaimers.",
      },
      { property: "og:title", content: "Terms of Service | AJK Law Group" },
      {
        property: "og:description",
        content:
          "Terms of Service for the AJK Law Group website — messaging terms of service, SMS consent and opt-out, acceptable use, and disclaimers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

const sections: { heading: string; body: ReactNode[] }[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using the AJK Law Group website, you agree to these Terms of Service. If you do not agree, please do not use the website.",
    ],
  },
  {
    heading: "2. No Attorney-Client Relationship",
    body: [
      "The information on this website is for general informational purposes only and does not constitute legal advice. Submitting a form, sending an email, or calling us does not create an attorney-client relationship. An attorney-client relationship is formed only after a signed written agreement with our firm.",
      "Do not send confidential or time-sensitive information through this website.",
    ],
  },
  {
    heading: "3. No Guarantee of Results",
    body: [
      "Past results do not guarantee future outcomes. Any description of our practice areas or results is not a promise or guarantee regarding the outcome of your matter. This website may constitute attorney advertising in accordance with applicable rules.",
    ],
  },
];

const messaging: { sub: string; body: ReactNode }[] = [
  {
    sub: "Client Intake & Appointments",
    body:
      "Text messages include scheduling an initial call, appointment reminders, intake follow-ups, and secure links for e-signing documents.",
  },
  {
    sub: "Opt-Out",
    body:
      'You can cancel the SMS service at any time. Just text "STOP" to ' +
      FIRM.phone +
      '. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.',
  },
  {
    sub: "Support",
    body: (
      <>
        If you are experiencing issues with the messaging program you can reply with the keyword
        HELP for more assistance, or you can get help directly at{" "}
        <a href={FIRM.emailHref} className="underline hover:text-navy">
          {FIRM.email}
        </a>{" "}
        or{" "}
        <a href={FIRM.phoneHref} className="underline hover:text-navy">
          {FIRM.phone}
        </a>
        .
      </>
    ),
  },
  {
    sub: "Delivery",
    body: "Carriers are not liable for delayed or undelivered messages.",
  },
  {
    sub: "Rates & Frequency",
    body:
      "Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. The number and timing of messages depend on your inquiry and appointment schedule. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.",
  },
  {
    sub: "Privacy",
    body: (
      <>
        If you have any questions regarding privacy, please read our privacy policy:{" "}
        <Link to="/privacy-policy" className="underline hover:text-navy">
          AJK Law Group Privacy Policy
        </Link>
        .
      </>
    ),
  },
];

const closing: { heading: string; body: ReactNode[] }[] = [
  {
    heading: "5. Acceptable Use",
    body: [
      "You agree not to misuse this website, including attempting to gain unauthorized access, interfering with its operation, scraping content for commercial purposes, or submitting false or unlawful information through our forms.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, and design — is the property of AJK Law Group or its licensors and may not be reproduced without permission, except for personal, non-commercial reference.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, AJK Law Group is not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
    ],
  },
  {
    heading: "8. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Changes apply to your use of the website after they are posted. Check this page periodically for updates.",
    ],
  },
  {
    heading: "9. Contact Us",
    body: [
      "Questions about these Terms of Service? Contact AJK Law Group, 1601 E Orangewood Ave, Suite 175, Anaheim, CA 92805, call ",
      <a key="ph" href={FIRM.phoneHref} className="underline hover:text-navy">
        {FIRM.phone}
      </a>,
      ", or email ",
      <a key="em" href={FIRM.emailHref} className="underline hover:text-navy">
        {FIRM.email}
      </a>,
      ".",
    ],
  },
];

function TermsOfService() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-x py-14 text-center md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/75">Last updated: October 2026</p>
        </div>
      </section>

      <Section bg="bg-background">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-xl font-semibold text-navy md:text-2xl">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy md:text-2xl">
              4. AJK Law Group's Messaging Terms of Service
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              By checking the consent box on our web forms, you are expressly consenting to receive
              customer care SMS communication from AJK LAW GROUP. Message and data rates may apply.
              Message frequency varies. To opt-out, reply STOP. For help, reply HELP. Consent to
              receive SMS messages is not a condition of purchasing any goods or services or of
              receiving legal representation.
            </p>
            <div className="mt-6 space-y-5 rounded-lg border border-border bg-card p-6">
              {messaging.map((m) => (
                <div key={m.sub}>
                  <h3 className="text-sm font-semibold text-navy">{m.sub}</h3>
                  {m.body.map((p, i) => (
                    <p key={i} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {closing.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-xl font-semibold text-navy md:text-2xl">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
