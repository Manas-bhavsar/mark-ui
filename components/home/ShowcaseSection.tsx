"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Button, Badge, Tag, Input, Toggle, 
  Card, Spinner, Skeleton 
} from "@/packages/core";

export default function ShowcaseSection() {
  const [toggleOn, setToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="home-section">
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
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          {/* Row 2 — Badge + Tag */}
          <div className="showcase-row">
            <Badge variant="accent">New</Badge>
            <Badge variant="info">v2.0</Badge>
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Framer Motion</Tag>
          </div>

          {/* Row 3 — Input + Toggle */}
          <div className="showcase-row">
            <div style={{ width: "240px" }}>
              <Input
                placeholder="Type something…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div style={{ transform: "scale(1.2) translateY(2px)" }}>
              <Toggle checked={toggleOn} onChange={setToggleOn} />
            </div>
          </div>

          {/* Row 4 — Card */}
          <div className="showcase-row" style={{ width: "100%", maxWidth: "400px" }}>
            <div style={{ width: "100%" }}>
              <Card>
                <div style={{ padding: "20px" }}>
                  <h4 style={{ fontFamily: "var(--mark-font-display)", fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "var(--mark-fg)" }}>Card Title</h4>
                  <p style={{ fontFamily: "var(--mark-font-body)", fontSize: "15px", color: "var(--mark-fg)", opacity: 0.8, marginBottom: "16px", lineHeight: 1.5 }}>
                    This is a live component. Switch themes and watch every color
                    update instantly.
                  </p>
                  <Button variant="primary" size="sm">
                    Action
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 5 — Spinner + Skeleton */}
          <div className="showcase-row">
            <Spinner size="md" />
            <div style={{ width: 200, display: "flex", flexDirection: "column", gap: 8 }}>
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-2/3 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
