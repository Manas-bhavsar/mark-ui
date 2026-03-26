"use client";

import { Alert } from "@/packages/core";
import Link from "next/link";
import { useState } from "react";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="doc-code-block" style={{ marginBottom: 32 }}>
      <button className="doc-code-copy" onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>{code}</pre>
    </div>
  );
}

export default function MotionPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Getting Started</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Motion Guide</span>
      </div>

      <h1>Motion Guide</h1>

      <p className="docs-description-line">
        Motion is not decoration in Mark UI. Every animation traces back to a shared
        set of motion tokens — so the entire library moves with one consistent personality.
      </p>

      <h2>Motion tokens</h2>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Used for</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>--mark-duration-fast</code></td><td>120ms</td><td>Hover states, color shifts</td></tr>
            <tr><td><code>--mark-duration-normal</code></td><td>240ms</td><td>Appear, disappear</td></tr>
            <tr><td><code>--mark-duration-slow</code></td><td>400ms</td><td>Drawers, page transitions</td></tr>
            <tr><td><code>--mark-ease-bounce</code></td><td>cubic-bezier(0.34,1.56,0.64,1)</td><td>Buttons, badges popping in</td></tr>
            <tr><td><code>--mark-ease-smooth</code></td><td>cubic-bezier(0.4,0,0.2,1)</td><td>General movement</td></tr>
            <tr><td><code>--mark-ease-snappy</code></td><td>cubic-bezier(0.25,0,0,1)</td><td>Panels, drawers</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Fun theme animations</h2>
      <p className="docs-body-text">
        When a Fun theme is active, components fire theme-specific easter egg animations
        alongside their standard animations. Each theme has a unique animation per interaction — click, toggle, check, mount, and dismiss.
      </p>

      <Alert variant="info" title="Cosmetic only" isDismissible={false}>
        Fun theme animations are purely cosmetic. They never block interaction, never shift
        layout, and are always disabled when <code>prefers-reduced-motion</code> is enabled.
      </Alert>

      <h2 style={{ marginTop: 64 }}>Reduced motion</h2>
      <p className="docs-body-text">
        All animations in Mark UI respect the <code>prefers-reduced-motion</code> media query.
        When enabled, all transitions and animations are disabled globally. You never need to handle this manually.
      </p>

      <CodeBlock code={`/* This is handled automatically */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`} />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/theming" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Theming Guide</div>
        </Link>
        <Link href="/docs/components/button" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Button</div>
        </Link>
      </div>
    </>
  );
}
