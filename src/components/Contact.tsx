import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Simple honeypot field — bots tend to fill every input, real users never see this one.
  const [honeypot, setHoneypot] = useState("");

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // silently drop likely bot submissions

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Name, email and message are required.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Have an idea worth building?"
            description="Let's start a conversation."
          />

          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Honeypot — hidden from real users, left blank by them */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClass}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className={inputClass}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="subject">
                <input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className={inputClass}
                />
              </Field>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={cn(inputClass, "resize-none")}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-ink-dark dark:text-bg-dark"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Start a Conversation
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <XCircle size={16} /> {errorMessage}
                </p>
              )}

              <p className="text-xs text-muted dark:text-muted-dark">
                Prefer email? Reach me directly at{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                  {site.email}
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:border-accent-ink dark:border-border-dark dark:bg-bg-dark dark:text-ink-dark";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium text-muted dark:text-muted-dark"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
