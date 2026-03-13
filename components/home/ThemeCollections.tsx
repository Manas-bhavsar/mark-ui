"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  professionalThemes,
  funThemes,
  type ThemeDefinition,
} from "@/components/theme/themes";

function ThemePreviewCard({
  theme,
  isActive,
  onSelect,
}: {
  theme: ThemeDefinition;
  isActive: boolean;
  onSelect: () => void;
}) {
  const disabled = !theme.live;

  return (
    <motion.div
      className={`theme-preview-card ${isActive ? "is-active" : ""} ${
        disabled ? "is-disabled" : ""
      }`}
      onClick={disabled ? undefined : onSelect}
      whileHover={disabled ? {} : { scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        borderColor: isActive ? theme.primary : undefined,
        boxShadow: isActive ? `0 0 16px ${theme.primary}40` : undefined,
      }}
    >
      <div className="theme-preview-bg" style={{ background: theme.secondary }}>
        <span className="theme-preview-name">{theme.name}</span>
        {disabled && <span className="theme-preview-soon">Soon</span>}
      </div>
      <div className="theme-preview-strip">
        <div
          className="theme-preview-strip-half"
          style={{ background: theme.primary }}
        />
        <div
          className="theme-preview-strip-half"
          style={{ background: theme.secondary }}
        />
      </div>
    </motion.div>
  );
}

export default function ThemeCollections() {
  const { theme: activeTheme, setTheme } = useTheme();

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
          THEMES
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          One library.
          <br />
          Every personality.
        </motion.h2>

        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From sharp and corporate to electric and wild. Mark UI has a theme for
          every product, every brand, every mood.
        </motion.p>

        {/* Professional Row */}
        <p className="collection-label">💼 Professional</p>
        <motion.div
          className="theme-collection-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {professionalThemes.map((t) => (
            <ThemePreviewCard
              key={t.id}
              theme={t}
              isActive={activeTheme === t.id}
              onSelect={() => setTheme(t.id)}
            />
          ))}
        </motion.div>

        {/* Fun Row */}
        <p className="collection-label">🎮 Fun</p>
        <motion.div
          className="theme-collection-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {funThemes.map((t) => (
            <ThemePreviewCard
              key={t.id}
              theme={t}
              isActive={activeTheme === t.id}
              onSelect={() => setTheme(t.id)}
            />
          ))}
        </motion.div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Link href="/themes" className="btn-secondary">
            Explore all themes →
          </Link>
        </div>
      </div>
    </section>
  );
}
