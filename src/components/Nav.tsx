import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Command Center", href: "#command-center" },
  { label: "Build Log", href: "#build-log" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Nav({
  theme,
  toggleTheme,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-md dark:border-border-dark dark:bg-bg-dark/90"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">

        {/* Logo */}
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink dark:text-ink-dark"
        >
          SPOORTHI K P
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-ink dark:text-muted-dark dark:hover:bg-surface-dark dark:hover:text-ink-dark"
          >
            {theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          {/* Resume */}
          <a
            href="/resume/Spoorthi_K_P_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-ink transition-opacity hover:opacity-70 dark:text-ink-dark"
          >
            Resume

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-ink dark:text-muted-dark dark:hover:bg-surface-dark dark:hover:text-ink-dark"
          >
            {theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full p-2 text-ink transition-colors hover:bg-surface dark:text-ink-dark dark:hover:bg-surface-dark"
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
              ease: "easeOut",
            }}
            className="overflow-hidden border-b border-border bg-bg dark:border-border-dark dark:bg-bg-dark md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">

              {/* Navigation Links */}
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg text-ink transition-colors hover:bg-surface dark:text-ink-dark dark:hover:bg-surface-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile Resume */}
              <li>
                <a
                  href="/resume/Spoorthi_K_P_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-1 px-3 py-3 text-sm text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                >
                  Resume

                  <ArrowUpRight
                    size={14}
                  />
                </a>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}