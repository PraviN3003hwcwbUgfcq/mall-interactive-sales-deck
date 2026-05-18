import { motion } from "framer-motion";

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-gold"
    >
      <span className="font-display text-base italic">{index}</span>
      <span className="block h-px w-12 bg-gold/60" />
      <span>{label}</span>
    </motion.div>
  );
}