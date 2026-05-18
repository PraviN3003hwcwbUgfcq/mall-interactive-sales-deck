import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
 import luxuryImg from "../../assets/luxury.jpg";

const brands = [
  "Louis Vuitton", "Chanel", "Cartier", "Hermès", "Dior", "Bvlgari",
  "Gucci", "Prada", "Tiffany & Co.", "Saint Laurent", "Balenciaga", "Fendi",
  "Burberry", "Versace", "Bottega Veneta", "Loewe", "Valentino", "Givenchy",
];

export function LuxuryMarquee() {
  return (
    <section id="luxury" className="relative overflow-hidden bg-ink py-32 lg:py-48">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${luxuryImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.7) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16">
        <SectionLabel index="04" label="Luxury Brands" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.95] lg:col-span-8"
          >
            The house of houses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-md text-lg font-light text-muted-foreground lg:col-span-4"
          >
            Every maison in one address. Fashion Avenue is the most concentrated
            collection of luxury flagships on the planet — and the highest-grossing
            luxury floor in retail history.
          </motion.p>
        </div>
      </div>

      <div className="relative mt-24 space-y-6">
        <Marquee items={brands} />
        <Marquee items={[...brands].reverse()} reverse />
      </div>

      <div className="relative mx-auto mt-24 grid max-w-[1600px] gap-6 px-6 sm:grid-cols-3 lg:px-16">
        {[
          ["$1.2B+", "Annual luxury sales"],
          ["#1", "Luxury sales/sq ft globally"],
          ["80+", "Flagship boutiques"],
        ].map(([k, v], i) => (
          <motion.div
            key={v}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="glass-gold group relative overflow-hidden rounded-sm px-8 py-10 text-center transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.13_85_/_0.4)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
            />
            <div className="relative font-display text-5xl text-gold">{k}</div>
            <div className="relative mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-16 whitespace-nowrap pr-16"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((b, i) => (
          <span
            key={i}
            className="font-display text-5xl text-foreground/50 transition-colors duration-300 hover:text-gold lg:text-7xl"
          >
            {b} <span className="text-gold">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}


