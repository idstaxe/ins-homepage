import { metrics } from "@/content/services";

export function Metrics() {
  return (
    <section
      className="bg-navy py-16 text-white"
      aria-label="Key results and metrics"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-4xl font-bold text-accent sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
