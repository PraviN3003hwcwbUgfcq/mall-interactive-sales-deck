import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 lg:py-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.13 85 / 0.25), transparent 60%)",
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="mx-auto mt-8 max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92]"
        >
          Let's design the next <em className="gradient-gold not-italic italic" style={{ fontStyle: "italic" }}>iconic moment</em> together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted-foreground"
        >
          Whether you're opening a flagship, sponsoring a season or staging a world premiere —
          our partnerships team is ready to build the brief with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:partnerships@thedubaimall.com"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:shadow-[0_0_60px_-5px_oklch(0.78_0.13_85)]"
          >
            Request the Full Deck
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+97180038224"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-10 py-5 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Book a Site Visit
          </a>
        </motion.div>

        <div className="mt-24 grid gap-12 border-t border-border pt-16 sm:grid-cols-3">
          {[
            ["Retail Leasing", "leasing@thedubaimall.com"],
            ["Sponsorship", "sponsorship@thedubaimall.com"],
            ["Events & Activations", "events@thedubaimall.com"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
              <div className="mt-3 font-display text-xl text-gold">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}