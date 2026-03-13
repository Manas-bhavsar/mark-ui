"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Motion first",
    body: "Every component ships with a defined animation story. What moves, when it moves, and exactly how it feels. Powered by shared motion tokens.",
  },
  {
    icon: "🎨",
    title: "Live theme switching",
    body: "Two collections. Fifteen themes. Switch the entire personality of your product in one click — no reload, no flash, no configuration.",
  },
  {
    icon: "🔷",
    title: "TypeScript native",
    body: "Every component is fully typed. Consistent prop APIs across the board. Your editor knows exactly what to suggest before you finish typing.",
  },
  {
    icon: "♿",
    title: "Accessible by default",
    body: "Keyboard navigation, ARIA attributes, visible focus management, and prefers-reduced-motion support. Built in. Not bolted on.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section
      className="home-section"
      style={{ background: "var(--mark-bg-surface)" }}
    >
      <div className="home-section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          WHY MARK UI
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </motion.h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
