import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
    />
  );
}
