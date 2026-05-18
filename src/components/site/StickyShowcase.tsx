import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";

interface Item { title: string; copy: string; tag: string; }

interface Props {
  id: string;
  index: string;
  label: string;
  heading: string;
  intro: string;
  image: string;
  items: Item[];
  align?: "left" | "right";
}

export function StickyShowcase({ id, index, label, heading, intro, image, items, align = "left" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section id={id} ref={ref} className="relative bg-background">
      <div className={`grid lg:grid-cols-2 ${align === "right" ? "lg:[direction:rtl]" : ""}`}>
        <div className="relative h-[60vh] lg:sticky lg:top-0 lg:h-screen lg:[direction:ltr]">
          <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
            <img
              src={image}
              alt={heading}
              loading="lazy"
              width={1600}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30" />
          </motion.div>
          <div className="pointer-events-none absolute bottom-8 left-8 right-8 flex items-end justify-between text-xs uppercase tracking-[0.3em] text-foreground/60 lg:[direction:ltr]">
            <span>{label}</span>
            <span className="font-display text-2xl italic text-gold">{index}</span>
          </div>
        </div>

        <div className="px-6 py-20 lg:px-16 lg:py-32 lg:[direction:ltr]">
          <SectionLabel index={index} label={label} />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-8 font-display text-[clamp(2.25rem,4vw,4.5rem)] leading-[1.02]"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-foreground"
          >
            {intro}
          </motion.p>

          <div className="mt-16 space-y-px border-t border-border">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group grid grid-cols-12 items-baseline gap-6 border-b border-border py-8 transition-colors hover:bg-white/[0.02]"
              >
                <span className="col-span-1 text-xs text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <div className="col-span-11 lg:col-span-4">
                  <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {item.tag}
                  </span>
                </div>
                <p className="col-span-12 text-sm font-light leading-relaxed text-muted-foreground lg:col-span-7">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}