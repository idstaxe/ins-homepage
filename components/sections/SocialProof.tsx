import { clientLogos } from "@/content/services";

export function SocialProof() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section
      id="proof"
      className="border-b border-border bg-white py-10"
      aria-label="Trusted by industry leaders"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-navy/50">
          Companies that have run trade media programmes with INS
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max gap-12">
            {logos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="flex h-12 min-w-[140px] items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-navy/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
