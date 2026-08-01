import { Link } from "@tanstack/react-router";
import { brand, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={brand.logo} alt={brand.name} className="h-10 w-auto max-w-[320px] object-contain" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Supporting initiatives in the arts world on an international basis, with a societal
            benefit at the heart of every project.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-foreground/80 transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/80 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Enquiries</p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-4 inline-block border-b border-primary/60 pb-0.5 text-sm text-foreground transition-colors hover:text-primary"
          >
            {brand.email}
          </a>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {brand.domain}
          </p>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
