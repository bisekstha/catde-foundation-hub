import { Petals } from "@/components/Petals";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="paper-texture relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Petals count={5} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1
          className="animate-rise mt-4 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        <div className="animate-line mt-8 h-px w-full max-w-xl bg-primary/70" style={{ animationDelay: "300ms" }} />
        {intro ? (
          <p
            className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
