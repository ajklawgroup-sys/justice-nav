import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui-kit";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AJK Law Group" },
      {
        name: "description",
        content:
          "Privacy Policy for AJK Law Group — how we collect, use, and protect your information, including SMS communication consent and opt-out rights.",
      },
      { property: "og:title", content: "Privacy Policy | AJK Law Group" },
      {
        property: "og:description",
        content:
          "How AJK Law Group collects, uses, and protects your information, including SMS communication consent and opt-out rights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you contact AJK Law Group through our website, by phone, by email, or by text message, we may collect the following information: your name, phone number, email address, and any details you choose to share about your legal matter.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your inquiry, evaluate your potential case, schedule consultations, and communicate with you about our legal services.",
      "This may include communication by phone, email, and SMS text message.",
    ],
  },
  {
    heading: "3. SMS Communication and Consent",
    body: [
      "By checking the consent box on our web forms, you are expressly consenting to receive customer care SMS communication from AJK LAW GROUP. Message and data rates may apply. Message frequency varies. To opt-out, reply STOP. For help, reply HELP.",
      "You may withdraw your consent at any time by replying STOP to any text message you receive from us. Opting out of SMS communication does not affect the legal services we provide to you.",
    ],
  },
  {
    heading: "4. How We Protect Your Information",
    body: [
      "We take reasonable administrative, technical, and physical safeguards to protect your personal information. Because legal matters are confidential, communications with our firm regarding potential representation are treated as privileged and confidential.",
    ],
  },
  {
    heading: "5. Sharing of Information",
    body: [
      "We may share your information only as necessary to provide legal services, such as with co-counsel, experts, or service providers who assist our practice, or as required by law or court order. Any form submission service we use processes your inquiry solely on our behalf.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "You may request to review, correct, or delete the personal information we hold about you, and you may withdraw consent for any communication method at any time. Contact us at ajklawgroup@ajkattorneys.com or (714) 512-2122 to exercise these rights.",
    ],
  },
  {
    heading: "7. Contact Us",
    body: [
      "If you have questions about this Privacy Policy, contact AJK Law Group, 1601 E Orangewood Ave, Suite 175, Anaheim, CA 92805, call (714) 512-2122, or email ajklawgroup@ajkattorneys.com.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-x py-14 text-center md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
            Privacy Policy
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
