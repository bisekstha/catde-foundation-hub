import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand, projects, pipeline, type Project } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | CATDE Foundation" },
      {
        name: "description",
        content:
          "The Gory Artistic Retreat in Nizhny Novgorod and The Jam Fruit Tree Literary House in Nugegoda — projects funded by the CATDE Foundation.",
      },
      { property: "og:title", content: "Projects | CATDE Foundation" },
      {
        property: "og:description",
        content:
          "An artists' retreat in rural Russia and a literary house in Sri Lanka, with more in the pipeline.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Funded initiatives"
          title="Projects"
          intro="Each project is approved personally by Chris and Tanya Devonshire-Ellis, and followed through to its opening."
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {projects.map((project, i) => (
            <ProjectBlock key={project.slug} project={project} index={i} />
          ))}
        </div>

        <section className="border-t border-border bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Also approved</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Further commitments
              </h2>
            </Reveal>
            <ul className="mt-12 columns-1 gap-10 sm:columns-2">
              {pipeline.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                  className="mb-4 flex items-start gap-3 break-inside-avoid border-b border-border pb-4 text-sm text-foreground/85"
                >
                  <img src={brand.mark} alt="" aria-hidden className="mt-0.5 w-4 shrink-0" />
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article
      id={project.slug}
      className="scroll-mt-28 border-b border-border py-20 last:border-0 lg:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flipped ? "lg:order-2" : ""}>
          <div className="group relative overflow-hidden border border-border bg-secondary shadow-lift">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute left-5 top-5 bg-background/90 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em]">
              {project.status}
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className={flipped ? "lg:order-1" : ""}>
          <p className="eyebrow flex items-center gap-2">
            <MapPin className="size-3.5 text-[oklch(0.62_0.155_52)]" />
            {project.location}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            {project.title}
          </h2>
          <div className="mt-7 h-px w-24 bg-primary" />
          <p className="mt-7 leading-relaxed text-muted-foreground">{project.body}</p>
          <p className="mt-8 font-display text-xl text-[oklch(0.62_0.155_52)]">{project.status}</p>
        </Reveal>
      </div>
    </article>
  );
}
