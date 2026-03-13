"use client";

import "@/styles/home.css";
import "@/styles/themes.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  professionalThemes,
  funThemes,
  type ThemeDefinition,
} from "@/components/theme/themes";

/* ─── Personality lines per theme ─── */
const personality: Record<string, string> = {
  monochrome: "Sharp. Professional. Default.",
  arctic: "Cool, corporate, precise.",
  obsidian: "Premium dark. Quietly powerful.",
  ivory: "Warm, minimal, refined.",
  slate: "Serious, structured, reliable.",
  sage: "Calm productivity. Clear focus.",
  carbon: "Industrial bold. High contrast.",
  cyberpunk: "Electric. Wild. Unforgettable.",
  shinigami: "Dark gold. Deadly elegant.",
  titan: "Military grit. Earned strength.",
  nebula: "Cosmic scale. Infinite depth.",
  matrixx: "Terminal green. Digital reality.",
  gotham: "Dark knight energy. Zero compromise.",
  akira: "Neo Tokyo. Speed and chaos.",
  hobbit: "Earthy warmth. An unexpected journey.",
};

/* ─── Mini-preview rendered in each card's colours ─── */
function CardPreview({ theme }: { theme: ThemeDefinition }) {
  const bg = theme.secondary;
  const fg = "#FAFAFA";
  const primary = theme.primary;
  const border = "rgba(255,255,255,0.1)";

  return (
    <div className="theme-card-preview" style={{ background: bg }}>
      {/* Button */}
      <span
        className="tp-btn"
        style={{ background: primary, color: bg }}
      >
        Button
      </span>
      {/* Badge */}
      <span
        className="tp-badge"
        style={{
          background: `${primary}22`,
          color: primary,
          border: `1px solid ${primary}44`,
        }}
      >
        Badge
      </span>
      {/* Toggle */}
      <span className="tp-toggle" style={{ background: primary }}>
        <span className="tp-toggle-knob" style={{ background: bg }} />
      </span>
      {/* Input */}
      <span
        className="tp-input"
        style={{
          background: `${bg}`,
          borderColor: border,
          color: fg,
          opacity: 0.4,
        }}
      >
        Placeholder…
      </span>
    </div>
  );
}

/* ─── Single theme card ─── */
function ThemeCard({
  theme,
  isActive,
  onSelect,
}: {
  theme: ThemeDefinition;
  isActive: boolean;
  onSelect: () => void;
}) {
  const live = theme.live;
  const infoBg = `color-mix(in srgb, ${theme.secondary} 85%, #ffffff)`;

  return (
    <motion.div
      className={`theme-card ${live ? "is-live" : "is-planned"}`}
      onClick={live ? onSelect : undefined}
      whileHover={
        live
          ? {
              scale: 1.03,
              borderColor: theme.primary,
              boxShadow: `0 0 24px ${theme.primary}30`,
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        borderColor: isActive ? theme.primary : undefined,
        boxShadow: isActive ? `0 0 20px ${theme.primary}30` : undefined,
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: live ? 1 : 0.7, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <CardPreview theme={theme} />

      <div className="theme-card-info" style={{ background: infoBg }}>
        <div className="theme-card-header">
          <h3 className="theme-card-name" style={{ color: "#FAFAFA" }}>
            {theme.name}
          </h3>
        </div>
        <p className="theme-card-personality" style={{ color: "#FAFAFA" }}>
          {personality[theme.id] ?? ""}
        </p>
        <div className="theme-card-footer">
          <div className="theme-card-dots">
            <span
              className="theme-card-dot"
              style={{ background: theme.primary }}
            />
            <span
              className="theme-card-dot"
              style={{ background: theme.secondary }}
            />
          </div>
          {live ? (
            <button
              className="theme-card-preview-btn"
              type="button"
              style={{ background: theme.primary, color: theme.secondary }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
            >
              {isActive ? "Active ✓" : "Preview"}
            </button>
          ) : (
            <span className="theme-card-soon-pill">Coming Soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Themes Page
   ═══════════════════════════════════════════ */

export default function ThemesPage() {
  const { theme: activeTheme, setTheme } = useTheme();

  const liveCount = [...professionalThemes, ...funThemes].filter(
    (t) => t.live
  ).length;
  const plannedCount = [...professionalThemes, ...funThemes].filter(
    (t) => !t.live
  ).length;

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="home-section" style={{ background: "var(--mark-bg)" }}>
        <div className="home-section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-pill">
              {liveCount} live · {plannedCount} coming soon
            </span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            style={{ textAlign: "left", fontSize: "clamp(40px, 6vw, 72px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Every theme.
            <br />
            One library.
          </motion.h1>

          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mark UI ships with two theme collections — Professional for products
            that mean business, Fun for products that refuse to be boring. Every
            theme switches live, no reload required.
          </motion.p>
        </div>
      </section>

      {/* ── Section 2: Professional Collection ── */}
      <section className="home-section" style={{ background: "var(--mark-bg)" }}>
        <div className="home-section-inner">
          <motion.p
            className="collection-section-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            💼 PROFESSIONAL COLLECTION
          </motion.p>

          <motion.p
            className="collection-description"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Clean, refined, and built for serious products. Dashboards, SaaS
            tools, internal apps — these themes mean business.
          </motion.p>

          <div className="themes-grid">
            {professionalThemes.map((t) => (
              <ThemeCard
                key={t.id}
                theme={t}
                isActive={activeTheme === t.id}
                onSelect={() => setTheme(t.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Fun Collection ── */}
      <section className="home-section" style={{ background: "var(--mark-bg)" }}>
        <div className="home-section-inner">
          <motion.p
            className="collection-section-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            🎮 FUN COLLECTION
          </motion.p>

          <motion.p
            className="collection-description"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Inspired by movies, anime, and games. For products that want to be
            remembered — not just used.
          </motion.p>

          <div className="themes-grid">
            {funThemes.map((t) => (
              <ThemeCard
                key={t.id}
                theme={t}
                isActive={activeTheme === t.id}
                onSelect={() => setTheme(t.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How Theming Works ── */}
      <section
        className="home-section"
        style={{ background: "var(--mark-bg-surface)" }}
      >
        <div className="home-section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How it works
          </motion.h2>

          <motion.div
            className="steps-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Step 1 */}
            <div className="step-card">
              <p className="step-number">01</p>
              <h3 className="step-title">Install Mark UI</h3>
              <p className="step-body">
                One package. Everything included.
              </p>
              <code className="step-code">npm install @markui/core</code>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 2 */}
            <div className="step-card">
              <p className="step-number">02</p>
              <h3 className="step-title">Wrap with ThemeProvider</h3>
              <p className="step-body">Set your default theme. Done.</p>
              <code className="step-code">
{`<ThemeProvider defaultTheme="monochrome">
  <App />
</ThemeProvider>`}
              </code>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 3 */}
            <div className="step-card">
              <p className="step-number">03</p>
              <h3 className="step-title">Switch anytime</h3>
              <p className="step-body">One hook. Instant switch.</p>
              <code className="step-code">
{`const { setTheme } = useTheme()
setTheme('cyberpunk')`}
              </code>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="home-section" style={{ background: "var(--mark-bg)" }}>
        <div
          className="home-section-inner"
          style={{ textAlign: "center" }}
        >
          <motion.h2
            className="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pick your personality.
          </motion.h2>

          <motion.p
            className="cta-sub"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start with Monochrome. Switch to Cyberpunk.
            <br />
            Build something unforgettable.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/docs" className="btn-primary">
              Get Started →
            </Link>
            <Link href="/components" className="btn-ghost">
              View Components
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
