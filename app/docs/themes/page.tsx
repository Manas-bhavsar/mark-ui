"use client";

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

export default function ThemesOverviewPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Themes</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Overview</span>
      </div>

      <h1>Themes Overview</h1>

      <p className="docs-description-line">
        Mark UI ships with two distinct theme collections out of the box. 
        Everything relies on CSS variables for a seamless, instant transition between looks.
      </p>

      <div className="usage-columns">
        <div className="usage-col">
          <h4 style={{ color: "var(--mark-fg)" }}>Professional Collection</h4>
          <p className="docs-body-text">Clean, utilitarian, accessible. Built for dashboards, SaaS platforms, and tools where content takes priority over aesthetics.</p>
          <Link href="/docs/themes/professional" style={{ color: "var(--mark-accent-primary)", textDecoration: "none", fontWeight: 600 }}>Explore Professional Themes →</Link>
        </div>
        <div className="usage-col">
          <h4 style={{ color: "var(--mark-accent-primary)" }}>Fun Collection</h4>
          <p className="docs-body-text">Bold, expressive, motion-heavy. Built for portfolios, marketing sites, and apps that want to leave a lasting impression.</p>
          <Link href="/docs/themes/fun" style={{ color: "var(--mark-accent-primary)", textDecoration: "none", fontWeight: 600 }}>Explore Fun Themes →</Link>
        </div>
      </div>

      <h2>Switching Themes</h2>
      <p className="docs-body-text">
        Use the <code>useTheme</code> hook provided by <code>ThemeProvider</code>.
      </p>
      <CodeBlock code={`import { useTheme } from '@markui/core'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'monochrome' ? 'cyberpunk' : 'monochrome')}>
      Toggle Theme
    </button>
  )
}`} />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/components/container" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Container</div>
        </Link>
        <Link href="/docs/themes/professional" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Professional Collection</div>
        </Link>
      </div>
    </>
  );
}
