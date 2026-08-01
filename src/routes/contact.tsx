import { createFileRoute } from "@tanstack/react-router";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand, contact } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | CATDE Foundation" },
      {
        name: "description",
        content:
          "Contact the Chris & Tanya Devonshire-Ellis Foundation by email at info@catdefoundation.com to discuss an artistic project.",
      },
      { property: "og:title", content: "Contact | CATDE Foundation" },
      {
        property: "og:description",
        content: "Email info@catdefoundation.com to reach the Foundation.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Get in touch" title={contact.title} />

        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="border border-border bg-card p-9 shadow-lift sm:p-14">
            <img src={brand.mark} alt="" aria-hidden className="w-12" />
            <p className="mt-8 text-lg text-muted-foreground">{contact.intro}</p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 font-display text-3xl text-foreground transition-colors hover:text-[oklch(0.62_0.155_52)] sm:text-5xl"
              >
                <Mail className="size-6 shrink-0 text-[oklch(0.62_0.155_52)] sm:size-8" />
                <span className="border-b border-primary/50 pb-1 break-all">{contact.email}</span>
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {copied ? <Check className="size-3.5 text-[oklch(0.62_0.155_52)]" /> : <Copy className="size-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <p className="mt-10 max-w-xl leading-relaxed text-muted-foreground">{contact.note}</p>
          </Reveal>

          <Reveal delay={160} className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-card p-7">
              <p className="eyebrow">Foundation</p>
              <p className="mt-3 font-display text-2xl leading-snug">{brand.name}</p>
            </div>
            <div className="bg-card p-7">
              <p className="eyebrow">Online</p>
              <p className="mt-3 font-display text-2xl">{brand.domain}</p>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
