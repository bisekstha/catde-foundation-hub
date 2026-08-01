import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { about, brand, images, pipeline } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CATDE Foundation" },
      {
        name: "description",
        content:
          "Founded by Chris and Tanya Devonshire-Ellis in June 2026, the Foundation funds international artistic projects that also provide a societal benefit.",
      },
      { property: "og:title", content: "About Us | CATDE Foundation" },
      {
        property: "og:description",
        content:
          "Chris and Tanya Devonshire-Ellis personally oversee, approve and attend every project the Foundation supports.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Foundation"
          title={about.title}
          intro="Supporting initiatives in the arts world on an international basis."
        />

        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <Reveal>
            <figure className="sticky top-28">
              <div className="arch-frame overflow-hidden border border-border bg-secondary shadow-frame">
                <img
                  src={images.founders}
                  alt="Chris and Tanya Devonshire-Ellis, founders of the Foundation"
                  className="aspect-[3/5] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 text-center text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Chris &amp; Tanya Devonshire-Ellis
              </figcaption>
            </figure>
          </Reveal>

          <div>
            {about.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 120}>
                <p
                  className={
                    i === 0
                      ? "font-display text-2xl leading-[1.45] text-foreground sm:text-[1.7rem]"
                      : "mt-7 leading-relaxed text-muted-foreground"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <p className="mt-10 text-sm text-muted-foreground">
                {about.founderLink.prefix}{" "}
                <a
                  href={about.founderLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-primary/60 pb-0.5 text-foreground transition-colors hover:text-[oklch(0.62_0.155_52)]"
                >
                  click here
                  <ExternalLink className="size-3.5" />
                </a>
                .
              </p>
              <p className="mt-2 font-display text-2xl">{about.founderLink.label}</p>
            </Reveal>

            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
              {about.commitments.map((c, i) => (
                <Reveal key={c.title} delay={i * 120} className="bg-card p-7">
                  <img src={brand.mark} alt="" aria-hidden className="w-7 opacity-90" />
                  <h3 className="mt-5 font-display text-2xl leading-tight">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Approved &amp; in the pipeline</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Where we are working</h2>
            </Reveal>
            <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
              {pipeline.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 70}
                  className="group flex items-baseline gap-5 bg-background p-6 transition-colors hover:bg-secondary"
                >
                  <span className="font-display text-lg text-[oklch(0.62_0.155_52)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <Link
                to="/projects"
                className="group mt-12 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-background transition-colors hover:bg-[oklch(0.62_0.155_52)]"
              >
                Explore the projects
                <ArrowRight className="size-4 transition-transform duration-400 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
