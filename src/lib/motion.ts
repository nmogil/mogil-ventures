// src/lib/motion.ts
import type { Variants, Transition } from "framer-motion";

// Basic fade-up for content blocks
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 } as Transition,
  },
};

// Parent container that staggers children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // In framer-motion 12.x you can stagger children with staggerChildren
      // and control orchestration. :contentReference[oaicite:6]{index=6}
      staggerChildren: 0.12,
    },
  },
};

// Hover / press interaction for cards
export const hoverCard = {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 18 } as Transition,
  },
  whileTap: { scale: 0.99 },
};
