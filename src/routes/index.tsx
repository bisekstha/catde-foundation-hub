import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Petals } from "@/components/Petals";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand, home, images, projects } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CATDE Foundation | Art That Gives Back" },
      {
        name: "description",
        content:
          "The Chris & Tanya Devonshire-Ellis Foundation supports international arts initiatives that also deliver a societal benefit. Founded June 2026.",
      },
      { property: "og:title", content: "CATDE Foundation | Art That Gives Back" },
      {
        property: "og:description",
        content:
          "International arts funding with societal benefit — retreats, literary houses, opera, liturgy and education.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader overlay />
      <main>
        <Hero />
        <Mission />
        <Marquee />
        <ProjectTeasers />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setPointer({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    const onLeave = () => setPointer({ x: 0, y: 0 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={stageRef}
      className="paper-texture relative flex min-h-screen items-center overflow-hidden"
    >
      {/* rotating rays behind the portrait */}
      <div
        aria-hidden
        className="rays absolute left-1/2 top-1/2 size-[150vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.5] mix-blend-multiply"
        style={{
          maskImage: "radial-gradient(circle at center, black 8%, transparent 62%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 8%, transparent 62%)",
        }}
      />
      <Petals count={10} />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-0">
        {/* copy */}
        <div className="order-2 lg:order-1">
          <p
            className="eyebrow animate-rise"
            style={{ animationDelay: "200ms" }}
          >
            {home.eyebrow} · {brand.domain}
          </p>

          <h1 className="mt-5 font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.88] tracking-[-0.02em]">
            {home.titleLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="animate-rise block"
                  style={{ animationDelay: `${320 + i * 140}ms` }}
                >
                  {i === 1 ? (
                    <span className="italic text-[oklch(0.62_0.155_52)]">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="animate-line mt-9 h-px w-40 bg-primary"
            style={{ animationDelay: "700ms" }}
          />

          <p
            className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "760ms" }}
          >
            {home.standfirst}
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "900ms" }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-background transition-colors hover:bg-[oklch(0.62_0.155_52)]"
            >
              View the projects
              <ArrowRight className="size-4 transition-transform duration-400 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 border-b border-foreground/30 pb-1 text-[0.72rem] uppercase tracking-[0.24em] transition-colors hover:border-primary hover:text-[oklch(0.62_0.155_52)]"
            >
              About the Foundation
            </Link>
          </div>
        </div>

        {/* portrait — arched frame with pointer parallax */}
        <div className="order-1 lg:order-2">
          <div
            className="animate-bloom relative mx-auto w-[min(80vw,26rem)]"
            style={{
              transform: `perspective(1200px) rotateY(${pointer.x * 7}deg) rotateX(${-pointer.y * 6}deg) translate3d(${pointer.x * 14}px, ${pointer.y * 12}px, 0)`,
              transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
              animationDelay: "160ms",
            }}
          >
            <div
              aria-hidden
              className="arch-frame absolute -inset-4 border border-primary/50"
              style={{
                transform: `translate3d(${pointer.x * -18}px, ${pointer.y * -14}px, 0)`,
                transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <div className="arch-frame relative overflow-hidden bg-secondary shadow-frame">
              <img
                src={images.founders}
                alt={home.founderCaption}
                className="aspect-[3/5] w-full object-cover object-top"
                style={{
                  transform: `scale(1.08) translate3d(${pointer.x * -22}px, ${pointer.y * -18}px, 0)`,
                  transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.19 0.012 60 / 0.55) 0%, transparent 45%)",
                }}
              />
              <p className="absolute inset-x-0 bottom-0 p-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[oklch(0.97_0.011_85)]">
                {home.founderCaption}
              </p>
            </div>
            <img
              src={brand.mark}
              alt=""
              aria-hidden
              className={`absolute -bottom-8 -left-8 w-24 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
              style={{
                transform: `translate3d(${pointer.x * 30}px, ${pointer.y * 24}px, 0) rotate(${pointer.x * 20}deg)`,
                transition: "transform 800ms cubic-bezier(0.16,1,0.3,1), opacity 1s",
              }}
            />
          </div>
        </div>
      </div>

      <a
        href="#mission"
        className="animate-rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
        style={{ animationDelay: "1100ms" }}
      >
        Scroll
        <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Mission() {
  return (
    <section id="mission" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <Reveal>
          <p className="eyebrow">Our purpose</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Funding art that returns
            <span className="italic text-[oklch(0.62_0.155_52)]"> something lasting</span>
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-foreground/85">
              Founded by Chris and Tanya Devonshire-Ellis in June 2026, the Foundation provides
              funding to worthwhile artistic projects across continents — from a literary house in
              Sri Lanka to an artists' retreat deep in the Russian countryside.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="leading-relaxed text-muted-foreground">
              Chris and Tanya personally oversee projects, approve them and attend the end results.
              Nothing is delegated to a committee — every commitment is made in person, and every
              outcome is seen through.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 border-b border-foreground/30 pb-1 text-[0.72rem] uppercase tracking-[0.24em] transition-colors hover:border-primary hover:text-[oklch(0.62_0.155_52)]"
            >
              Read about us
              <ArrowRight className="size-4 transition-transform duration-400 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...home.marquee, ...home.marquee];
  return (
    <div className="overflow-hidden border-b border-border bg-background py-7">
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl text-foreground/70 sm:text-3xl">{item}</span>
            <img src={brand.mark} alt="" aria-hidden className="w-4 opacity-80" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function ProjectTeasers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Currently underway</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Selected projects</h2>
        </div>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRight className="size-4 transition-transform duration-400 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 140}>
            <Link
              to="/projects"
              hash={project.slug}
              className="group block overflow-hidden border border-border bg-card transition-shadow duration-500 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em]">
                  {project.status}
                </span>
              </div>
              <div className="p-7">
                <p className="eyebrow">{project.location}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight">{project.title}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[oklch(0.19_0.012_60)] py-24 text-[oklch(0.97_0.011_85)] lg:py-32">
      <Petals count={6} />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <img src={brand.mark} alt="" aria-hidden className="mx-auto w-16" />
          <h2 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
            Have a project with artistic ambition and a public good?
          </h2>
          <a
            href={`mailto:${brand.email}`}
            className="mt-9 inline-flex items-center gap-3 border border-[oklch(0.97_0.011_85_/_0.35)] px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] transition-colors hover:border-primary hover:text-primary"
          >
            {brand.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
