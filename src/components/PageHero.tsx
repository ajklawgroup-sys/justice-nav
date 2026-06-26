import type { ReactNode } from "react";
import { LeadForm } from "./LeadForm";
import { Eyebrow } from "./ui-kit";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  formProps,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  badge?: string;
  formProps?: React.ComponentProps<typeof LeadForm>;
}) {
  return (
    <section className="bg-navy">
      <div className="container-x grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2">
        <Reveal>
          {eyebrow && <Eyebrow gold>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          {badge && (
            <span className="mt-4 inline-block rounded-[999px] border border-white bg-white px-4 py-2 text-sm font-semibold text-navy">
              {badge}
            </span>
          )}
          <p className="mt-5 max-w-xl text-lg text-white/75">{subtitle}</p>
        </Reveal>
        <Reveal>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
