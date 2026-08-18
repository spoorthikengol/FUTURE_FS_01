import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="font-tag text-xs uppercase tracking-[0.2em] text-accent-ink">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted dark:text-muted-dark">
          {description}
        </p>
      )}
    </Reveal>
  );
}
