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

export default function CustomThemesPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Themes</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Custom Themes</span>
      </div>

      <h1>Custom Themes</h1>

      <p className="docs-description-line">
        Because Mark UI is driven entirely by CSS variables, creating a new theme 
        is as simple as defining a new data attribute in your CSS. No complex JavaScript objects required.
      </p>

      <h2>Creating a Theme</h2>
      <p className="docs-body-text">
        To create a custom theme, simply define the necessary CSS variables inside a <code>[data-theme="your-name"]</code> block in your global stylesheet.
      </p>

      <CodeBlock code={`/* In your globals.css */

[data-theme="my-custom-theme"] {
  /* Core Colors */
  --mark-bg: #111111;
  --mark-bg-surface: #1a1a1a;
  --mark-bg-elevated: #242424;
  --mark-fg: #ffffff;
  
  /* Accent Colors */
  --mark-accent-primary: #FF6B6B;
  --mark-accent-secondary: #4ECDC4;
  --mark-accent-glow: rgba(255, 107, 107, 0.25);
  --mark-accent-subtle: rgba(255, 107, 107, 0.08);
  
  /* Status Colors */
  --mark-success: #22c55e;
  --mark-warning: #f59e0b;
  --mark-error: #ef4444;
  --mark-info: #3b82f6;
  
  /* Borders */
  --mark-border: rgba(255, 255, 255, 0.1);
  --mark-border-strong: rgba(255, 255, 255, 0.2);
}
`} />

      <h2>Using the custom theme</h2>
      <p className="docs-body-text">
        Once defined in CSS, you can pass your custom theme name to the <code>ThemeProvider</code> defaultTheme prop, or set it via the <code>useTheme()</code> hook like any other theme.
      </p>

      <CodeBlock code={`// Set as default
<ThemeProvider defaultTheme="my-custom-theme">
  {children}
</ThemeProvider>

// Or set dynamically
const { setTheme } = useTheme();
setTheme('my-custom-theme');
`} />

      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/themes/fun" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Fun Collection</div>
        </Link>
      </div>
    </>
  );
}
