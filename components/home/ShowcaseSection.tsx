"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function MiniToggle() {
  const [on, setOn] = useState(true);
  return (
    <button
      className="mk-toggle"
      data-on={String(on)}
      onClick={() => setOn(!on)}
      aria-label="Toggle"
      type="button"
    >
      <span className="mk-toggle-knob" />
    </button>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="home-section" style={{ background: "var(--mark-bg)" }}>
      <div className="home-section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          COMPONENTS
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          See it in action.
        </motion.h2>

        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Every component below is live. Open the theme panel and watch them
          shift.
        </motion.p>

        <p className="showcase-hint">
          ↗ Try switching themes using the panel →
        </p>

        <motion.div
          className="showcase-stage"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Row 1 — Buttons */}
          <div className="showcase-row">
            <button className="mk-btn mk-btn-primary" type="button">
              Primary
            </button>
            <button className="mk-btn mk-btn-secondary" type="button">
              Secondary
            </button>
            <button className="mk-btn mk-btn-ghost" type="button">
              Ghost
            </button>
            <button className="mk-btn mk-btn-destructive" type="button">
              Destructive
            </button>
          </div>

          {/* Row 2 — Badge + Tag */}
          <div className="showcase-row">
            <span className="mk-badge">New</span>
            <span className="mk-badge">v2.0</span>
            <span className="mk-tag">React</span>
            <span className="mk-tag">TypeScript</span>
            <span className="mk-tag">Framer Motion</span>
          </div>

          {/* Row 3 — Input + Toggle */}
          <div className="showcase-row">
            <input
              className="mk-input"
              placeholder="Type something…"
              type="text"
              aria-label="Demo input"
            />
            <MiniToggle />
          </div>

          {/* Row 4 — Card */}
          <div className="showcase-row">
            <div className="mk-card">
              <h4 className="mk-card-title">Card Title</h4>
              <p className="mk-card-body">
                This is a live component. Switch themes and watch every color
                update instantly.
              </p>
              <button className="mk-btn mk-btn-primary" type="button">
                Action
              </button>
            </div>
          </div>

          {/* Row 5 — Spinner + Skeleton */}
          <div className="showcase-row" style={{ alignItems: "flex-start" }}>
            <div className="mk-spinner" />
            <div style={{ flex: 1, maxWidth: 260, display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="mk-skeleton" style={{ width: "100%" }} />
              <div className="mk-skeleton" style={{ width: "70%" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
