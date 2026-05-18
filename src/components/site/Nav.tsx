import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Property", href: "#why" },
  { label: "Retail", href: "#retail" },
  { label: "Luxury", href: "#luxury" },
  { label: "Dining", href: "#dining" },
  { label: "Attractions", href: "#attractions" },
  { label: "Events", href: "#events" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(0,0,0,0)", "rgba(0,0,0,0.55)"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(18px)"]);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-tight text-foreground">
            <span className="gradient-gold">Dubai</span> Mall
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-ink"
        >
          Partner With Us
        </a>
      </div>
    </motion.header>
  );
}