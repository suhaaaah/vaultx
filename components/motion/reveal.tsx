"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  amount?: number;
  once?: boolean;
};

function useRevealTransition(delay: number) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return {
    shouldReduceMotion,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  };
}

function revealState({
  shouldReduceMotion,
  x = 0,
  y = 30,
  scale,
}: {
  shouldReduceMotion: boolean;
  x?: number;
  y?: number;
  scale?: number;
}) {
  if (shouldReduceMotion) {
    return false;
  }

  return {
    opacity: 0,
    x,
    y,
    scale,
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 30,
  scale,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const { shouldReduceMotion, transition } = useRevealTransition(delay);

  return (
    <motion.div
      className={className}
      initial={revealState({ shouldReduceMotion, x, y, scale })}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({
  children,
  className,
  delay = 0,
  x = 0,
  y = 40,
  scale,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const { shouldReduceMotion, transition } = useRevealTransition(delay);

  return (
    <motion.section
      className={className}
      initial={revealState({ shouldReduceMotion, x, y, scale })}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}

export function RevealArticle({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
  scale,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const { shouldReduceMotion, transition } = useRevealTransition(delay);

  return (
    <motion.article
      className={className}
      initial={revealState({ shouldReduceMotion, x, y, scale })}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.article>
  );
}
