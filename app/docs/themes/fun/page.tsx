"use client";

import Link from "next/link";
import { Alert } from "@/packages/core";

export default function FunThemesPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Themes</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Fun Collection</span>
      </div>

      <h1>Fun Collection</h1>

      <p className="docs-description-line">
        Vibrant colors, high energy, and built-in easter egg animations. 
        Designed to stand out and leave an impression.
      </p>

      <Alert variant="accent" title="Interactive Elements" isDismissible={false}>
        All fun themes include unique, theme-specific animations on interaction (like clicking a button or checking a checkbox). These are automatically disabled if the user has <code>prefers-reduced-motion</code> activated.
      </Alert>

      <h2 style={{ marginTop: 64 }}>Themes in this collection</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        
        {/* Cyberpunk */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Cyberpunk</h3>
            <code>data-theme="cyberpunk"</code>
          </div>
          <p className="docs-body-text">Neon yellow and hot pink on deep dark backgrounds. High contrast, highly aggressive, and extremely bold.</p>
        </div>

        {/* Matrixx */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Matrixx</h3>
            <code>data-theme="matrixx"</code>
          </div>
          <p className="docs-body-text">Pure hacker aesthetics. Terminal green text on pitch black backgrounds, reminiscent of old phosphor displays.</p>
        </div>

        {/* Gotham */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Gotham</h3>
            <code>data-theme="gotham"</code>
          </div>
          <p className="docs-body-text">Deep, dark, and brooding. A dark mode built entirely around a monochrome palette avoiding true blacks for a softer, but cinematic feel.</p>
        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/themes/professional" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Professional Collection</div>
        </Link>
        <Link href="/docs/themes/custom" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Custom Themes</div>
        </Link>
      </div>
    </>
  );
}
