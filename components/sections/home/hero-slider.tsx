"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentSlide((value) => (value + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused) return;
    const timeout = window.setTimeout(() => setIsPaused(false), 10000);
    return () => window.clearTimeout(timeout);
  }, [isPaused, currentSlide]);

  const moveToSlide = (nextSlide: number) => {
    setIsPaused(true);
    const normalizedSlide = (nextSlide + heroSlides.length) % heroSlides.length;
    setDirection(normalizedSlide > currentSlide || (currentSlide === heroSlides.length - 1 && normalizedSlide === 0) ? 1 : -1);
    setCurrentSlide(normalizedSlide);
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden" aria-label="VaultX highlights">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.title}
          className="absolute inset-0"
          custom={direction}
          variants={slideVariants}
          initial={shouldReduceMotion ? false : "enter"}
          animate="center"
          exit={shouldReduceMotion ? undefined : "exit"}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={shouldReduceMotion ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 6, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={currentSlide === 0}
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-36 pt-32 text-center sm:px-6 md:px-8">
            <motion.p
              className="mb-6 text-xs font-light uppercase text-white md:text-sm"
              variants={contentVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              custom={0.1}
            >
              {slide.subtitle}
            </motion.p>
            <motion.h1
              className="mb-6 max-w-5xl text-4xl font-extralight leading-tight text-white sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl"
              variants={contentVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              custom={0.2}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="max-w-3xl text-base font-light leading-relaxed text-gray-300 md:text-lg"
              variants={contentVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              custom={0.3}
            >
              {slide.description}
            </motion.p>
            <motion.div
              className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
              variants={contentVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              custom={0.4}
            >
              <Link href={slide.href} className="site-button site-button-primary group">
                LEARN MORE
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/contact/" className="site-button site-button-secondary">
                GET FREE QUOTE
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-0 right-0 z-10 flex items-center justify-center gap-8">
        <motion.button
          type="button"
          onClick={() => moveToSlide(currentSlide - 1)}
          className="hero-control"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </motion.button>
        <div className="flex gap-3">
          {heroSlides.map((item, index) => (
            <motion.button
              type="button"
              key={item.title}
              onClick={() => moveToSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-12 bg-yellow-500" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Show ${item.title}`}
              aria-current={index === currentSlide}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        <motion.button
          type="button"
          onClick={() => moveToSlide(currentSlide + 1)}
          className="hero-control"
          aria-label="Next slide"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </motion.button>
      </div>

      <div className="absolute bottom-4 right-4 z-10 text-sm font-light text-white/50 md:bottom-12 md:right-8">
        <span className="text-yellow-500">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
