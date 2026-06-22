import { CALENDAR_SRC } from "@/lib/firm";

export function CalendarEmbed() {
  return (
    <iframe
      title="Schedule a consultation with AJK Law Group"
      src={CALENDAR_SRC}
      className="mx-auto block h-[450px] w-full max-w-[900px] overflow-hidden rounded-[4px] border border-border md:h-[600px]"
      style={{ border: "solid 1px #777" }}
      scrolling="no"
    />
  );
}
