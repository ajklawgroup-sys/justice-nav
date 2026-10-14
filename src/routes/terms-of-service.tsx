import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui-kit";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AJK Law Group" },
      {
        name: "description",
        content:
          "Terms of Service for the AJK Law Group website — acceptable use, SMS communication terms, no attorney-client relationship, and disclaimers.",
      },
      { property: "og:title", content: "Terms of Service | AJK Law Group" },
      {
        property: "og:description",
        content:
          "Terms of Service for the AJK Law Group website — acceptable use, SMS communication terms, no attorney-client relationship, and disclaimers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

const sections: { heading: string; body: string[] }[] = [
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
  {
    heading: "4. SMS Communication Terms",
    body: [
      "By checking the consent box on our web forms, you are expressly consenting to receive customer care SMS communication from AJK LAW GROUP. Message and data rates may apply. Message frequency varies. To opt-out, reply STOP. For help, reply HELP.",
      "Consent to receive SMS messages is not a condition of purchasing any goods or services or of receiving legal representation.",
    ],
  },
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
      "Questions about these Terms of Service? Contact AJK Law Group, 1601 E Orangewood Ave, Suite 175, Anaheim, CA 92805, call (714) 512-2122, or email ajklawgroup@ajkattorneys.com.",
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
        </div>
      </Section>
    </>
  );
}
