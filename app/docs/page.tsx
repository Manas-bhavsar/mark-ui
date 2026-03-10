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

const features = [
  {
    icon: "🎨",
    title: "Expressive Theming",
    description:
      "Switch between curated themes instantly. CSS variables power every color — no rebuilds required.",
  },
  {
    icon: "⚡",
    title: "Motion-First",
    description:
      "Every interaction is animated with Framer Motion. Smooth, snappy, and respects reduced-motion preferences.",
  },
  {
    icon: "📦",
    title: "Component Library",
    description:
      "Production-ready React components built with TypeScript, fully typed and tree-shakable.",
  },
  {
    icon: "🌙",
    title: "Dark by Default",
    description:
      "Designed for dark interfaces first — with beautiful surface layers and subtle borders.",
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <span
            className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "var(--mark-accent-glow)",
              color: "var(--mark-accent-primary)",
              borderRadius: "var(--mark-radius-pill)",
              fontFamily: "var(--mark-font-display)",
            }}
          >
            Documentation
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--mark-fg)" }}
          >
            Getting Started
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--mark-fg)", opacity: 0.55 }}
          >
            Mark UI is a React component library with an expressive theming
            engine. Build interfaces that leave a mark — fast, beautiful, and
            themeable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-6"
            style={{ color: "var(--mark-fg)", opacity: 0.4, fontFamily: "var(--mark-font-display)" }}
          >
            What you get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -2 }}
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: "var(--mark-bg-surface)",
                  border: "1px solid var(--mark-border)",
                  borderRadius: "var(--mark-radius-lg)",
                  transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
              >
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3
                  className="text-base font-bold mb-1.5"
                  style={{ color: "var(--mark-fg)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--mark-fg)", opacity: 0.5 }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-6"
            style={{ color: "var(--mark-fg)", opacity: 0.4, fontFamily: "var(--mark-font-display)" }}
          >
            Quick Start
          </h2>
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "var(--mark-bg-surface)",
              border: "1px solid var(--mark-border)",
              borderRadius: "var(--mark-radius-lg)",
            }}
          >
            <p
              className="text-sm font-medium mb-3"
              style={{ color: "var(--mark-fg)", opacity: 0.6 }}
            >
              1. Install the package
            </p>
            <pre
              className="text-sm p-4 rounded-lg mb-4 overflow-x-auto"
              style={{
                backgroundColor: "var(--mark-bg)",
                borderRadius: "var(--mark-radius-md)",
                color: "var(--mark-accent-primary)",
                border: "1px solid var(--mark-border)",
              }}
            >
              <code>npm install mark-ui</code>
            </pre>

            <p
              className="text-sm font-medium mb-3"
              style={{ color: "var(--mark-fg)", opacity: 0.6 }}
            >
              2. Wrap your app with the ThemeProvider
            </p>
            <pre
              className="text-sm p-4 rounded-lg mb-4 overflow-x-auto"
              style={{
                backgroundColor: "var(--mark-bg)",
                borderRadius: "var(--mark-radius-md)",
                color: "var(--mark-fg)",
                border: "1px solid var(--mark-border)",
              }}
            >
              <code>{`import { ThemeProvider } from 'mark-ui'

export default function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}`}</code>
            </pre>

            <p
              className="text-sm font-medium mb-3"
              style={{ color: "var(--mark-fg)", opacity: 0.6 }}
            >
              3. Use components
            </p>
            <pre
              className="text-sm p-4 rounded-lg overflow-x-auto"
              style={{
                backgroundColor: "var(--mark-bg)",
                borderRadius: "var(--mark-radius-md)",
                color: "var(--mark-fg)",
                border: "1px solid var(--mark-border)",
              }}
            >
              <code>{`import { Button, Card } from 'mark-ui'

export default function Page() {
  return (
    <Card>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}`}</code>
            </pre>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center py-8"
          style={{
            borderTop: "1px solid var(--mark-border)",
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "var(--mark-fg)", opacity: 0.5 }}
          >
            Ready to explore?
          </p>
          <Link href="/components">
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
              Browse Components →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
