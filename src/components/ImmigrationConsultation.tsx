import { useState } from "react";
import { Building2, Video } from "lucide-react";

type FlowState = "idle" | "paid" | "booking";

const PAY_URL =
  "https://payments.filevine.com/pay?id=ODZmNTI1ZmEtMTIxMy00MzUwLWIyMTYtNjU3MTRlMWVhYzQ0";

const panels = {
  virtual: {
    icon: Video,
    title: "Virtual Consultation (Zoom)",
    price: "$250",
    payLabel: "PAY $250",
    desc: "Connect with our attorneys from anywhere in the United States via Zoom. Ideal for clients outside of California.",
    badge: "🌐 Available in all 50 states",
    calendarSrc:
      "https://calendar.google.com/calendar/embed?src=c_c766867c88cb38e08f808210c86a35a82089278a8ca7c3c7cd5440a6cd228a0c%40group.calendar.google.com&ctz=America%2FLos_Angeles",
  },
  inperson: {
    icon: Building2,
    title: "In-Person Consultation",
    price: "$200",
    payLabel: "PAY $200",
    desc: "Meet with our immigration attorneys at our office. Bring your documents and get personalized legal guidance face to face.",
    badge: "📍 1601 E Orangewood Ave, Suite 175, Anaheim CA 92805",
    calendarSrc:
      "https://calendar.google.com/calendar/embed?src=c_8b19d74bda069b17b1f53e97c863d1425785c155ac05e6c7bcde0dd1fac0b4fb%40group.calendar.google.com&ctz=America%2FLos_Angeles",
  },
} as const;

type PanelKey = keyof typeof panels;

function ConsultationPanel({ data }: { data: (typeof panels)[PanelKey] }) {
  const [state, setState] = useState<FlowState>("idle");
  const Icon = data.icon;

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-[12px] border border-navy bg-white p-8 shadow-md">
      <Icon className="h-10 w-10 text-navy" />
      <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{data.title}</h3>
      <p className="mt-2 text-4xl font-bold text-navy">{data.price}</p>
      <p className="mt-4 text-sm text-muted-foreground">{data.desc}</p>
      <p className="mt-4 text-sm font-medium text-navy">{data.badge}</p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-navy">Step 1 — Complete Payment</p>
        <a
          href={PAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setState((s) => (s === "idle" ? "paid" : s))}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[999px] bg-navy px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
        >
          {data.payLabel}
        </a>

        {state === "paid" && (
          <div className="mt-4 animate-in fade-in duration-200">
            <button
              type="button"
              onClick={() => setState("booking")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[999px] border border-green-600 bg-white px-6 py-3 text-sm font-bold text-green-700 transition-opacity hover:opacity-85"
            >
              ✓ I have completed my payment — Book my appointment
            </button>
            <p className="mt-2 text-xs text-muted-foreground">
              Complete payment first — your appointment is only confirmed after payment is
              received.
            </p>
          </div>
        )}

        {state === "booking" && (
          <div className="mt-6 animate-in fade-in duration-200">
            <p className="text-sm font-semibold text-navy">Step 2 — Book Your Time Slot</p>
            <iframe
              title={`Book ${data.title}`}
              src={data.calendarSrc}
              className="mt-3 w-full"
              style={{ border: 0, height: 500, borderRadius: 8 }}
              scrolling="no"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Your appointment is confirmed once you receive a confirmation email from our office.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ImmigrationConsultation() {
  const [active, setActive] = useState<PanelKey>("virtual");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-[999px] border border-navy p-1">
          <button
            type="button"
            onClick={() => setActive("virtual")}
            className={`rounded-[999px] border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              active === "virtual"
                ? "border-navy bg-navy text-white"
                : "border-gray-300 bg-white text-gray-500 opacity-50"
            }`}
          >
            💻 Virtual
          </button>
          <button
            type="button"
            onClick={() => setActive("inperson")}
            className={`rounded-[999px] border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              active === "inperson"
                ? "border-navy bg-navy text-white"
                : "border-gray-300 bg-white text-gray-500 opacity-50"
            }`}
          >
            📍 In-Person
          </button>
        </div>
      </div>

      <div className="mt-8 animate-in fade-in duration-200">
        <ConsultationPanel key={active} data={panels[active]} />
      </div>
    </>
  );
}
