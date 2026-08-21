import { ArrowUp, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 dark:border-border-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-8">
        
        {/* Copyright */}
        <p className="font-tag text-xs text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} {site.name}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Spoorthi"
            title="Email"
            className="group flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <Mail
              size={15}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline">Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="group flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <LinkedinIcon
              className="h-[15px] w-[15px] transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="group flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <GithubIcon
              className="h-[15px] w-[15px] transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Back to Top */}
          <a
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="ml-1 rounded-full border border-border p-2 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <ArrowUp size={15} />
          </a>

        </div>
      </div>
    </footer>
  );
}