import { brand } from "@/content/site";

/** Slow drifting flower marks — decorative motion layer. */
export function Petals({ count = 9 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => {
    const seed = (i * 37) % 100;
    return {
      left: `${(seed * 1.03) % 96}%`,
      size: 14 + ((seed * 7) % 30),
      duration: 26 + ((seed * 3) % 26),
      delay: -((seed * 0.9) % 30),
      drift: `${((seed % 2 === 0 ? 1 : -1) * (3 + (seed % 9)))}vw`,
    };
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <img
          key={i}
          src={brand.mark}
          alt=""
          className="animate-petal absolute top-0 opacity-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
