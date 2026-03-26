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
    <div className="doc-code-block">
      <button className="doc-code-copy" onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>{code}</pre>
    </div>
  );
}

export default function ThemingPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Getting Started</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Theming Guide</span>
      </div>

      <h1>Theming Guide</h1>

      <p className="docs-description-line">
        Mark UI&apos;s theme system is built entirely on CSS variables. Switching
        themes means swapping one data attribute on the root element. Everything
        else updates automatically.
      </p>

      <h2>How it works</h2>

      <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px", fontFamily: "var(--mark-font-code)", fontSize: "14px", color: "var(--mark-fg)", textAlign: "center", lineHeight: "2" }}>
        <div style={{ background: "var(--mark-accent-primary)", color: "var(--mark-bg)", display: "inline-block", padding: "8px 24px", borderRadius: "8px", fontWeight: "bold" }}>[ ThemeProvider ]</div>
        <div style={{ opacity: 0.5, margin: "8px 0" }}>↓ sets</div>
        <div style={{ background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border-strong)", display: "inline-block", padding: "8px 24px", borderRadius: "8px" }}>[ data-theme="cyberpunk" on &lt;html&gt; ]</div>
        <div style={{ opacity: 0.5, margin: "8px 0" }}>↓ updates</div>
        <div style={{ background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border-strong)", display: "inline-block", padding: "8px 24px", borderRadius: "8px" }}>[ CSS variables for that theme ]</div>
        <div style={{ opacity: 0.5, margin: "8px 0" }}>↓ flows into</div>
        <div style={{ background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border-strong)", display: "inline-block", padding: "8px 24px", borderRadius: "8px" }}>[ every component on the page ]</div>
      </div>

      <h2>Switching themes programmatically</h2>
      <CodeBlock code={`import { useTheme } from '@markui/core'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme('cyberpunk')}>
      Switch to Cyberpunk
    </button>
  )
}`} />

      <h2>Available themes</h2>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Collection</th>
              <th>Theme</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Professional</td><td><code>monochrome</code></td><td>✅ Live</td></tr>
            <tr><td>Professional</td><td><code>arctic</code></td><td>✅ Live</td></tr>
            <tr><td>Professional</td><td><code>obsidian</code></td><td>✅ Live</td></tr>
            <tr><td>Fun</td><td><code>cyberpunk</code></td><td>✅ Live</td></tr>
            <tr><td>Fun</td><td><code>matrixx</code></td><td>✅ Live</td></tr>
            <tr><td>Fun</td><td><code>gotham</code></td><td>✅ Live</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Default theme</h2>
      <CodeBlock code={`<ThemeProvider defaultTheme="cyberpunk">`} />
      <p className="docs-body-text">
        The <code>defaultTheme</code> prop accepts any theme id string. Defaults to <code>monochrome</code> if not provided. The last selected theme is automatically persisted to <code>localStorage</code>.
      </p>

      <h2>Theme persistence</h2>
      <p className="docs-body-text">
        Mark UI automatically saves the user&apos;s last selected theme to <code>localStorage</code> under the key <code>markui-theme</code>. On next page load, the saved theme is restored before the first render — no flash of wrong theme.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/installation" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Installation</div>
        </Link>
        <Link href="/docs/motion" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Motion Guide</div>
        </Link>
      </div>
    </>
  );
}
