"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function HeroSection() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 20) setShowScroll(false);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="hero">
      {/* Animated gradient mesh */}
      <div className="hero-gradient-mesh" />
      <div className="hero-gradient-orb" />

      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Pill */}
        <motion.div variants={fadeUp}>
          <span className="hero-pill">
            Motion-first · Fully themeable · TypeScript ready
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 className="hero-heading" variants={fadeUp}>
          Build interfaces
          <br />
          that leave a mark.
        </motion.h1>

        {/* Subheading */}
        <motion.p className="hero-sub" variants={fadeUp}>
          A React component library with motion at its core. Swap entire themes
          in one click. Ship products people actually remember.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-cta-row" variants={fadeUp}>
          <Link href="/docs" className="btn-primary">
            Get Started →
          </Link>
          <Link href="/components" className="btn-secondary">
            View Components
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          ↓
        </motion.div>
      )}
    </section>
  );
}
