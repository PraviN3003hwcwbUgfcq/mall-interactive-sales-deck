import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Range in px the element travels across its visibility window. */
  offset?: number;
  className?: string;
}

/**
 * Drop-in vertical parallax. Spring-smoothed so it always feels native to Lenis.
 */
export function Parallax({ children, offset = 80, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 25, mass: 0.4 });
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
