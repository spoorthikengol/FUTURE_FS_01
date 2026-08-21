import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  XCircle,
} from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const shouldReduceMotion = useReducedMotion();

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const revealInitial = shouldReduceMotion
    ? {}
    : {
        opacity: 0,
        y: 35,
      };

  const revealAnimate = shouldReduceMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
      };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1fr]">

          {/* Heading */}
          <motion.div
            initial={revealInitial}
            whileInView={revealAnimate}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Have an idea worth building?"
              description="Let's start a conversation."
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: 45,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Honeypot */}
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
                <AnimatedField
                  label="Name"
                  htmlFor="name"
                  delay={0.2}
                >
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClass}
                    autoComplete="name"
                  />
                </AnimatedField>

                <AnimatedField
                  label="Email"
                  htmlFor="email"
                  delay={0.25}
                >
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className={inputClass}
                    autoComplete="email"
                  />
                </AnimatedField>
              </div>

              <AnimatedField
                label="Subject"
                htmlFor="subject"
                delay={0.3}
              >
                <input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className={inputClass}
                />
              </AnimatedField>

              <AnimatedField
                label="Message"
                htmlFor="message"
                delay={0.35}
              >
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={cn(inputClass, "resize-none")}
                />
              </AnimatedField>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                        scale: 1.01,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                transition={{
                  duration: 0.2,
                }}
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg shadow-sm transition-shadow duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-ink-dark dark:text-bg-dark"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Start a Conversation

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </motion.button>

              {/* Success message */}
              {status === "success" && (
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 size={16} />
                  Message sent — I'll get back to you soon.
                </motion.p>
              )}

              {/* Error message */}
              {status === "error" && (
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          x: -10,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  className="flex items-center gap-2 text-sm text-red-500"
                >
                  <XCircle size={16} />
                  {errorMessage}
                </motion.p>
              )}

              {/* Direct contact */}
<motion.div
  initial={
    shouldReduceMotion
      ? {}
      : {
          opacity: 0,
          y: 12,
        }
  }
  whileInView={
    shouldReduceMotion
      ? {}
      : {
          opacity: 1,
          y: 0,
        }
  }
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.6,
    delay: 0.45,
  }}
  className="space-y-4"
>
  <p className="text-xs text-muted dark:text-muted-dark">
    Prefer email? Reach me directly at{" "}
    <a
      href={`mailto:${site.email}`}
      className="font-medium text-ink underline underline-offset-2 transition-colors hover:text-accent-ink dark:text-ink-dark"
    >
      {site.email}
    </a>
    .
  </p>

  <div className="flex flex-wrap gap-3">
    <a
      href={site.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink dark:border-border-dark dark:text-ink-dark"
    >
      LinkedIn
      <ArrowUpRight size={13} />
    </a>

    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink dark:border-border-dark dark:text-ink-dark"
    >
      GitHub
      <ArrowUpRight size={13} />
    </a>
  </div>
</motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedField({
  label,
  htmlFor,
  children,
  delay,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium text-muted dark:text-muted-dark"
      >
        {label}
      </label>

      {children}
    </motion.div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted focus-visible:-translate-y-0.5 focus-visible:border-accent-ink focus-visible:shadow-[0_0_0_3px_rgba(255,176,32,0.08)] dark:border-border-dark dark:bg-bg-dark dark:text-ink-dark";