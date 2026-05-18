import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="The Dubai Mall at night with the Burj Khalifa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-between px-6 pb-16 pt-32 lg:px-16 lg:pb-24 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          The Global Destination Platform
        </motion.p>

        <div className="max-w-5xl">
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] tracking-tight">
            {"Where the world".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.em
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block not-italic italic gradient-gold"
              style={{ fontStyle: "italic" }}
            >
              comes to meet.
            </motion.em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 max-w-xl text-base font-light leading-relaxed text-muted-foreground"
          >
            105 million visitors a year. 1,200 stores. One stage. The Dubai Mall is more
            than a destination — it is the live theatre of global luxury, culture and commerce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#why"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-all hover:shadow-[0_0_40px_-5px_oklch(0.78_0.13_85)]"
            >
              <span>Begin the Tour</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Request the Deck
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex items-end justify-between gap-8"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="block h-px w-12 bg-gold" /> Scroll
          </div>
          <div className="hidden gap-12 md:flex">
            {[
              ["105M+", "Annual visitors"],
              ["1,200", "Retail brands"],
              ["12M ft²", "Total area"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl text-gold">{k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}