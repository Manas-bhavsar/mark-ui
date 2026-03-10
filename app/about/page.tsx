"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const values = [
  {
    icon: "🎯",
    title: "Precision",
    description:
      "Every pixel matters. We obsess over spacing, alignment, and visual rhythm so you don't have to.",
  },
  {
    icon: "🧩",
    title: "Composability",
    description:
      "Mix and match components freely. Built as primitives first, composed into patterns second.",
  },
  {
    icon: "🚀",
    title: "Performance",
    description:
      "Zero runtime overhead. CSS variables for theming, tree-shakable exports, and optimized motion.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    description:
      "ARIA-first approach. Keyboard navigable, screen reader friendly, and respects user motion preferences.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Hero */}
        <motion.div variants={itemVariants} className="mb-16">
          <span
            className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "var(--mark-accent-glow)",
              color: "var(--mark-accent-primary)",
              borderRadius: "var(--mark-radius-pill)",
              fontFamily: "var(--mark-font-display)",
            }}
          >
            About
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6"
            style={{ color: "var(--mark-fg)" }}
          >
            Interfaces that
            <br />
            <span style={{ color: "var(--mark-accent-primary)" }}>
              leave a mark.
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--mark-fg)", opacity: 0.55 }}
          >
            Mark UI is a modern React component library designed for developers
            who care about craft. We believe in expressive design, smooth motion,
            and interfaces that delight both builders and users.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={itemVariants}
          className="mb-16 p-8 rounded-2xl"
          style={{
            backgroundColor: "var(--mark-bg-surface)",
            border: "1px solid var(--mark-border)",
            borderRadius: "var(--mark-radius-xl)",
          }}
        >
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: "var(--mark-fg)", opacity: 0.4 }}
          >
            Our Mission
          </h2>
          <p
            className="text-xl font-semibold leading-relaxed"
            style={{ color: "var(--mark-fg)", opacity: 0.8 }}
          >
            &ldquo;To give every developer the tools to build interfaces that
            feel intentional, polished, and alive — without sacrificing speed or
            accessibility.&rdquo;
          </p>
        </motion.div>

        {/* Values */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-6"
            style={{ color: "var(--mark-fg)", opacity: 0.4, fontFamily: "var(--mark-font-display)" }}
          >
            What drives us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -2 }}
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: "var(--mark-bg-surface)",
                  border: "1px solid var(--mark-border)",
                  borderRadius: "var(--mark-radius-lg)",
                  transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
              >
                <span className="text-2xl mb-3 block">{value.icon}</span>
                <h3
                  className="text-base font-bold mb-1.5"
                  style={{ color: "var(--mark-fg)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--mark-fg)", opacity: 0.5 }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-6"
            style={{ color: "var(--mark-fg)", opacity: 0.4, fontFamily: "var(--mark-font-display)" }}
          >
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React 19",
              "Next.js 15",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "CSS Variables",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full"
                style={{
                  fontFamily: "var(--mark-font-display)",
                  backgroundColor: "var(--mark-bg-surface)",
                  border: "1px solid var(--mark-border)",
                  color: "var(--mark-fg)",
                  opacity: 0.7,
                  borderRadius: "var(--mark-radius-pill)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center py-8"
          style={{ borderTop: "1px solid var(--mark-border)" }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "var(--mark-fg)", opacity: 0.5 }}
          >
            Ready to start building?
          </p>
          <Link href="/docs">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-3 text-sm font-semibold rounded-lg"
              style={{
                fontFamily: "var(--mark-font-display)",
                backgroundColor: "var(--mark-accent-primary)",
                color: "var(--mark-accent-secondary)",
                borderRadius: "var(--mark-radius-md)",
              }}
            >
              Read the Docs →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
