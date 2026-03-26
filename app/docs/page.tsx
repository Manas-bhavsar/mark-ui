import { Alert } from "@/packages/core";
import Link from "next/link";

export const metadata = { title: "Introduction - MARK UI Docs" };

export default function IntroPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Getting Started</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Introduction</span>
      </div>

      <h1>Welcome to Mark UI</h1>

      <p className="docs-description-line" style={{ maxWidth: 700, fontSize: 20 }}>
        Mark UI is a motion-first React component library for developers who
        refuse to blend in. Every component ships with animations baked in,
        every theme is swappable in one click, and every prop is fully typed
        with TypeScript.
        <br /><br />
        This isn&apos;t just a component library.<br />
        It is a design language.
      </p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "64px", flexWrap: "wrap" }}>
        {["Motion-first", "TypeScript ready", "Fully themeable", "Accessible by default"].map(tag => (
          <span key={tag} style={{
            padding: "6px 16px",
            background: "var(--mark-bg-surface)",
            border: "1px solid var(--mark-border-strong)",
            borderRadius: "var(--mark-radius-pill)",
            fontSize: "13px",
            fontFamily: "var(--mark-font-display)",
            fontWeight: 600
          }}>
            {tag}
          </span>
        ))}
      </div>

      <h2>What makes Mark UI different</h2>

      <div style={{ display: "grid", gap: "32px", marginBottom: "64px" }}>
        <div style={{ padding: "32px", background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <h3 style={{ margin: "0 0 16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: 24 }}>⚡</span> Motion as a feature
          </h3>
          <p className="docs-body-text" style={{ margin: 0 }}>
            Every component has a defined animation story. What moves, when it moves,
            and how it feels. Built on a shared motion token system so the whole
            library moves with one consistent personality.
          </p>
        </div>

        <div style={{ padding: "32px", background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <h3 style={{ margin: "0 0 16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: 24 }}>🎨</span> Themes that actually work
          </h3>
          <p className="docs-body-text" style={{ margin: 0 }}>
            Two collections. Six themes at launch. Switch the entire personality
            of your product in one click — no reload, no flash, no config.
          </p>
        </div>

        <div style={{ padding: "32px", background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <h3 style={{ margin: "0 0 16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: 24 }}>🔷</span> Built for developers
          </h3>
          <p className="docs-body-text" style={{ margin: 0 }}>
            Full TypeScript coverage, consistent prop APIs across every
            component, and docs that respect your time.
          </p>
        </div>
      </div>

      <h2>Prerequisites</h2>
      <Alert variant="info" title="Requirements" isDismissible={false}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>Node.js v18 or higher</li>
          <li>React 18 or higher</li>
          <li>TypeScript recommended but not required</li>
        </ul>
      </Alert>

      {/* Prev / Next Bottom Navigation */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/installation" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Installation</div>
        </Link>
      </div>
    </>
  );
}
