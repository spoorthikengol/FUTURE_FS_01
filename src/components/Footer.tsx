import { ArrowUp, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 dark:border-border-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-tag text-xs text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <Mail size={17} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <LinkedinIcon className="h-[17px] w-[17px]" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <GithubIcon className="h-[17px] w-[17px]" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 rounded-full border border-border p-2 text-muted transition-colors hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
