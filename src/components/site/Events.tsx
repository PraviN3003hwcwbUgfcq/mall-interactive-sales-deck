import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import eventsImg from "@/assets/events.jpg";

const formats = [
  { title: "Brand Activations", copy: "Atrium takeovers, pop-ups and product reveals across 12M ft² of premium footfall." },
  { title: "Sponsorship", copy: "Naming rights and category exclusivity across attractions, concourses and signature moments." },
  { title: "Cultural Events", copy: "Fashion weeks, art biennales, concerts and global premieres staged in Downtown Dubai." },
  { title: "Private Galas", copy: "Bespoke evenings closed to the public — VIP, royalty and ultra-high-net-worth audiences." },
];

export function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const y = useSpring(yRaw, { stiffness: 60, damping: 25, mass: 0.5 });
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 25, mass: 0.5 });

  return (
    <section id="events" ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img src={eventsImg} alt="Premium brand activation at The Dubai Mall" loading="lazy" width={1600} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </motion.div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-32 lg:px-16 lg:py-48">
        <SectionLabel index="07" label="Events & Sponsorship" />
        <Reveal as="h2" y={80} duration={1.2} className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.98]">
          Your brand. Centre stage of the world's most-watched city.
        </Reveal>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-sm p-8 transition-all hover:border-gold/40"
            >
              <div className="absolute -right-10 -top-10 font-display text-[9rem] leading-none text-white/[0.04] transition-colors group-hover:text-gold/10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="relative font-display text-2xl text-foreground">{f.title}</h3>
              <p className="relative mt-4 text-sm font-light leading-relaxed text-muted-foreground">{f.copy}</p>
              <div className="relative mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                Enquire <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}