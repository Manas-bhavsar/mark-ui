"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { themeDetails } from "@/components/themes/themeDetails";
import type { ThemeId } from "@/components/theme/themes";
import type { ThemePaletteSwatch } from "@/components/themes/themeDetails";
import "@/styles/themes-page.css";

// ─── Animation Constants ───────────────────────────
const panelTransition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

const bgTransition = { duration: 0.5, ease: "easeInOut" as const };

// ─── Swatch Component (static, no hover animation) ─
function PaletteSwatch({ swatch }: { swatch: ThemePaletteSwatch }) {
  const textColor = swatch.light ? "#111111" : "#F5F5F5";

  return (
    <div
      className="themes-swatch"
      style={{ backgroundColor: swatch.hex, color: textColor }}
    >
      <span className="themes-swatch-name" style={{ color: textColor }}>
        {swatch.name}
      </span>
      <div className="themes-swatch-bottom">
        <span className="themes-swatch-hex" style={{ color: textColor }}>
          {swatch.hex}
        </span>
        <span className="themes-swatch-role" style={{ color: textColor }}>
          {swatch.role}
        </span>
      </div>
    </div>
  );
}

// ─── Section Label ─────────────────────────────────
function SectionLabel({
  children,
  accent,
  borderColor,
}: {
  children: string;
  accent: string;
  borderColor: string;
}) {
  return (
    <div className="themes-section-label" style={{ color: accent }}>
      <span>{children}</span>
      <span
        className="themes-section-label-line"
        style={{ backgroundColor: borderColor }}
      />
    </div>
  );
}

// ─── Main ThemesPage ───────────────────────────────
export default function ThemesPage() {
  const { theme: activeTheme, setTheme } = useTheme();

  const detail = themeDetails[activeTheme as ThemeId];

  if (!detail) {
    return (
      <div
        className="themes-panel"
        style={{ padding: 64, textAlign: "center", opacity: 0.5 }}
      >
        No theme data for &quot;{activeTheme}&quot;
      </div>
    );
  }

  const isC1 = detail.collection === 1;
  const borderColor = `${detail.accent}25`;
  const mutedAccent = `${detail.accent}55`;
  const collectionLabel = isC1 ? "Collection 1 · Professional" : "Collection 2 · Fun";

  return (
    <motion.div
      className="themes-panel"
      animate={{ backgroundColor: detail.bg }}
      transition={bgTransition}
      style={{ color: "#F5F5F5" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={panelTransition}
        >
          {/* ═══ HERO ═══ */}
          <section className="themes-hero">
            <div
              className="themes-ghost-text"
              style={{
                fontFamily: isC1
                  ? '"Syne", sans-serif'
                  : '"Bebas Neue", sans-serif',
              }}
            >
              {activeTheme.toUpperCase()}
            </div>

            <div className="themes-hero-row">
              <div className="themes-hero-left">
                <div
                  className="themes-badge"
                  style={{
                    color: detail.accent,
                    borderColor: mutedAccent,
                    backgroundColor: `${detail.accent}08`,
                  }}
                >
                  <span style={{ opacity: 0.5 }}>#{detail.num}</span>
                  <span style={{ opacity: 0.3 }}>·</span>
                  <span>{detail.badge}</span>
                </div>

                <h1
                  className={`themes-title ${isC1 ? "themes-title--c1" : "themes-title--c2"}`}
                  style={{ color: "#F5F5F5" }}
                >
                  {activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
                </h1>

                <p className="themes-tagline" style={{ color: detail.accent }}>
                  {detail.tagline}
                </p>
              </div>

              {/* Mini stats in hero right */}
              <div className="themes-hero-right">
                {Object.entries(detail.stats).map(([label, value]) => (
                  <div key={label} className="themes-hero-stat-mini">
                    <div
                      className="themes-hero-stat-mini-value"
                      style={{ color: detail.accent }}
                    >
                      {value}
                    </div>
                    <div className="themes-hero-stat-mini-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ PALETTE — Full width centerpiece ═══ */}
          <section className="themes-palette-section">
            <div
              className="themes-palette-label"
              style={{ color: detail.accent }}
            >
              Color Palette · {collectionLabel}
            </div>
            <div className="themes-palette-stack">
              {detail.palette.map((swatch) => (
                <PaletteSwatch
                  key={`${activeTheme}-${swatch.name}`}
                  swatch={swatch}
                />
              ))}
            </div>
          </section>

          {/* ═══ BODY — 3-column grid ═══ */}
          <div className="themes-body">
            {/* Column 1: Origin */}
            <div className="themes-body-col">
              <SectionLabel accent={detail.accent} borderColor={borderColor}>
                Origin Story
              </SectionLabel>
              <p className="themes-prose">{detail.origin}</p>
            </div>

            {/* Column 2: Purpose */}
            <div className="themes-body-col">
              <SectionLabel accent={detail.accent} borderColor={borderColor}>
                Purpose
              </SectionLabel>
              <p className="themes-prose">{detail.purpose}</p>
            </div>

            {/* Column 3: Use Cases + Philosophy */}
            <div className="themes-body-col">
              <SectionLabel accent={detail.accent} borderColor={borderColor}>
                Use Cases
              </SectionLabel>
              <div className="themes-tags">
                {detail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="themes-tag"
                    style={{
                      color: detail.accent,
                      borderColor: mutedAccent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ height: 20 }} />

              <SectionLabel accent={detail.accent} borderColor={borderColor}>
                Design Philosophy
              </SectionLabel>
              <blockquote
                className={`themes-quote ${isC1 ? "themes-quote--c1" : "themes-quote--c2"}`}
                style={{ borderLeftColor: mutedAccent }}
              >
                &ldquo;{detail.quote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* ═══ FOOTER ═══ */}
          <div
            className="themes-footer"
            style={{ borderTopColor: borderColor }}
          >
            <span className="themes-npm-cmd">
              npm install @markui/core — theme: {activeTheme}
            </span>
            <button
              className="themes-cta-btn"
              style={{
                color: detail.accent,
                borderColor: detail.accent,
              }}
              onClick={() => setTheme(activeTheme as ThemeId)}
            >
              Use this theme →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
