import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "h2" | "h3" | "p" | "li";
  once?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Masked, scroll-triggered reveal. Use for section-level entries.
 * The wrapper clips the child as it translates up — cinematic, GPU-friendly.
 */
export function Reveal({
  children,
  delay = 0,
  y = 60,
  duration = 1.1,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <div className="overflow-hidden">
      <Tag
        initial={{ y, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
        transition={{ duration, delay, ease }}
        className={className}
      >
        {children}
      </Tag>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
