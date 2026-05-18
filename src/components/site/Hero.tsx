import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 30, mass: 0.6 });
  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 30, mass: 0.6 });
  const opacity = useSpring(opacityRaw, { stiffness: 80, damping: 30 });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const onPointerMove = (e: React.PointerEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPointer({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    });
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Cinematic loader curtain */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="curtain"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 z-40 bg-ink"
          />
        )}
      </AnimatePresence>

      {/* Background with scroll parallax + slow ken-burns zoom */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.16, 1.08] }}
          transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{
              opacity: loaded ? 1 : 0,
              filter: loaded ? "blur(0px)" : "blur(20px)",
            }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src={heroImg}
            alt="The Dubai Mall at night with the Burj Khalifa"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      {/* Floating ambient gold glows (cursor parallax) */}
      <motion.div
        aria-hidden
        animate={{ x: pointer.x * -30, y: pointer.y * -30 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.13 85 / 0.18), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{
          x: pointer.x * 40,
          y: pointer.y * 40,
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          x: { type: "spring", stiffness: 40, damping: 20 },
          y: { type: "spring", stiffness: 40, damping: 20 },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute -right-40 bottom-0 z-0 h-[48rem] w-[48rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.13 85 / 0.12), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.04 0 0 / 0.6) 100%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-between px-6 pb-16 pt-32 lg:px-16 lg:pb-24 lg:pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={loaded ? { scaleX: 1 } : {}}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px w-16 origin-left bg-gold"
          />
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">
            The Global Destination Platform
          </p>
        </motion.div>

        <div className="max-w-5xl">
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] tracking-tight">
            {"Where the world".split(" ").map((w, i) => (
              <span key={i} className="mr-4 inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={loaded ? { y: "0%" } : {}}
                  transition={{
                    delay: 1.1 + i * 0.14,
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden align-bottom">
              <motion.em
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : {}}
                transition={{ delay: 1.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block gradient-gold"
                style={{ fontStyle: "italic" }}
              >
                comes to meet.
              </motion.em>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-base font-light leading-relaxed text-muted-foreground"
          >
            105 million visitors a year. 1,200 stores. One stage. The Dubai Mall is more
            than a destination — it is the live theatre of global luxury, culture and commerce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ delay: 2.4, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#why"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink shadow-[0_0_0_0_oklch(0.78_0.13_85_/_0)] transition-shadow duration-500 hover:shadow-[0_10px_60px_-10px_oklch(0.78_0.13_85_/_0.7)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative">Begin the Tour</span>
              <span className="relative transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-gold/5 transition-transform duration-700 ease-out group-hover:scale-x-100"
              />
              <span className="relative">Request the Deck</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2.7, duration: 1 }}
          className="flex items-end justify-between gap-8"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="block h-px w-12 bg-gold" /> Scroll
          </motion.div>
          <div className="hidden gap-12 md:flex">
            {([
              ["105M+", "Annual visitors"],
              ["1,200", "Retail brands"],
              ["12M ft²", "Total area"],
            ] as const).map(([k, v], i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.9 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-display text-3xl text-gold">{k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
