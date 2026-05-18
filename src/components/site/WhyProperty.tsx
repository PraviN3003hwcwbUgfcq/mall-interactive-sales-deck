import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";

const stats = [
  { value: "105M", label: "Annual visitors", note: "More than Times Square or the Eiffel Tower" },
  { value: "200+", label: "Nationalities", note: "Every continent passes through" },
  { value: "#1", label: "Most-visited destination", note: "Globally, three years running" },
  { value: "$25B", label: "Annual sales generated", note: "Across categories and partners" },
];

export function WhyProperty() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="why" ref={ref} className="relative overflow-hidden bg-background py-32 lg:py-48">
      <motion.div
        style={{ x }}
        className="pointer-events-none absolute -top-32 left-0 whitespace-nowrap font-display text-[18rem] leading-none text-white/[0.03]"
      >
        Destination · Destination ·
      </motion.div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
        <SectionLabel index="01" label="Why This Property" />

        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1] lg:col-span-7"
          >
            A stage built for the world's most ambitious brands.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg font-light leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9 lg:pt-6"
          >
            Anchored beside the Burj Khalifa, The Dubai Mall is the cultural and commercial
            centre of gravity for the Middle East. A footprint without rival. An audience
            without ceiling.
          </motion.p>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden border-y border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-background p-8 lg:p-12"
            >
              <div className="font-display text-6xl text-gold lg:text-7xl">{s.value}</div>
              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground">{s.label}</div>
              <div className="mt-2 text-sm font-light text-muted-foreground">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}