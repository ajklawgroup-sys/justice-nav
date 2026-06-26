import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { WEB3FORMS_KEY } from "@/lib/firm";

export function LeadForm({
  title = "Get Your FREE Case Review",
  submitLabel = "GET MY FREE CASE REVIEW",
  showBadge = true,
  subject = "New Case Review — AJK Law Group",
  hideInjured = false,
  helpOptions = ["Personal Injury", "Immigration", "Both", "Other"],
}: {
  title?: string;
  submitLabel?: string;
  showBadge?: boolean;
  subject?: string;
  hideInjured?: boolean;
  helpOptions?: string[];
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[4px] border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-serif text-xl font-semibold text-navy">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We will contact you within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-[4px] border border-input bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-navy focus:ring-1 focus:ring-navy";

  return (
    <form onSubmit={handleSubmit} className="rounded-[4px] border border-border bg-card p-6 shadow-sm">
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value={subject} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex items-center justify-between gap-2">
        <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
        {showBadge && (
          <span className="inline-flex items-center gap-1.5 rounded-[999px] bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            AVAILABLE NOW
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <input name="first_name" required placeholder="First Name" className={inputCls} />
        <input name="last_name" required placeholder="Last Name" className={inputCls} />
      </div>
      <div className="mt-3 grid gap-3">
        <input name="phone" type="tel" required placeholder="Phone *" className={inputCls} />
        <input name="email" type="email" placeholder="Email" className={inputCls} />
        <select name="how_can_we_help" required className={inputCls} defaultValue="">
          <option value="" disabled>
            How can we help?
          </option>
          <option>Personal Injury</option>
          <option>Immigration</option>
          <option>Both</option>
          <option>Other</option>
        </select>
        {!hideInjured && (
          <select name="were_you_injured" className={inputCls} defaultValue="">
            <option value="" disabled>
              Were you injured?
            </option>
            <option>Yes</option>
            <option>No</option>
            <option>N/A</option>
          </select>
        )}
        <textarea
          name="message"
          rows={3}
          placeholder="Briefly describe your situation..."
          className={inputCls}
        />
      </div>

      <label className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
        <input type="checkbox" name="consent" defaultChecked className="mt-0.5" />
        <span>I consent to be contacted by AJK Law Group regarding my inquiry.</span>
      </label>

      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">Something went wrong. Please call us instead.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-[999px] bg-navy py-3 font-bold text-white transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
