import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 lg:py-48">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.13 85 / 0.25), transparent 60%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.13 85 / 0.2), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          08 — Begin the conversation
        </motion.p>
        <Reveal as="h2" y={80} duration={1.3} className="mx-auto mt-8 max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92]">
          Let's design the next <em className="gradient-gold not-italic italic" style={{ fontStyle: "italic" }}>iconic moment</em> together.
        </Reveal>
        <Reveal as="p" delay={0.2} y={30} className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted-foreground">
          Whether you're opening a flagship, sponsoring a season or staging a world premiere —
          our partnerships team is ready to build the brief with you.
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="mailto:partnerships@thedubaimall.com"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-5 text-xs uppercase tracking-[0.3em] text-ink transition-shadow duration-500 hover:shadow-[0_10px_60px_-10px_oklch(0.78_0.13_85_/_0.8)]"
          >
            <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Request the Full Deck</span>
            <span className="relative transition-transform duration-500 group-hover:translate-x-1.5">→</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="tel:+97180038224"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-10 py-5 text-xs uppercase tracking-[0.3em] text-foreground transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-gold/5 transition-transform duration-700 ease-out group-hover:scale-x-100" />
            <span className="relative">Book a Site Visit</span>
          </motion.a>
        </motion.div>

        <div className="mt-24 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {[
            ["Retail Leasing", "leasing@thedubaimall.com"],
            ["Sponsorship", "sponsorship@thedubaimall.com"],
            ["Events & Activations", "events@thedubaimall.com"],
          ].map(([k, v], i) => (
            <motion.a
              key={k}
              href={`mailto:${v}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block bg-ink p-8 text-left transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
              <div className="mt-3 font-display text-xl text-gold transition-transform duration-500 group-hover:-translate-y-0.5">{v}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}