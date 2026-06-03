import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-navy/70">
          {description}
        </p>
      )}
    </div>
  );
}
