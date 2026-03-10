"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ComingSoonProps {
  pageName: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function ComingSoon({ pageName }: ComingSoonProps) {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center px-6"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <motion.div
        className="text-center max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Pulse pill */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "var(--mark-accent-glow)",
              color: "var(--mark-accent-primary)",
              borderRadius: "var(--mark-radius-pill)",
              fontFamily: "var(--mark-font-display)",
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--mark-accent-primary)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            In progress
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4"
          style={{ color: "var(--mark-fg)" }}
        >
          {pageName}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed mb-8"
          style={{ color: "var(--mark-fg)", opacity: 0.5 }}
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        >
          This page is currently being built.
          <br />
          Check back soon — it&apos;ll be worth it.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8"
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "var(--mark-border)",
          }}
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.button
            onClick={() => router.back()}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 text-sm font-medium rounded-lg cursor-pointer"
            style={{
              fontFamily: "var(--mark-font-display)",
              background: "transparent",
              border: "1px solid var(--mark-border)",
              color: "var(--mark-fg)",
              borderRadius: "var(--mark-radius-md)",
              transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
            }}
          >
            ← Back
          </motion.button>

          <Link href="/docs">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-5 py-2.5 text-sm font-medium rounded-lg"
              style={{
                fontFamily: "var(--mark-font-display)",
                backgroundColor: "var(--mark-accent-primary)",
                color: "var(--mark-accent-secondary)",
                borderRadius: "var(--mark-radius-md)",
                transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
              }}
            >
              View Docs →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
