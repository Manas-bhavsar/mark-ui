"use client";

import Link from "next/link";
import { Badge } from "@/packages/core";

export default function ProfessionalThemesPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Themes</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Professional Collection</span>
      </div>

      <h1>Professional Collection</h1>

      <p className="docs-description-line">
        High contrast, rigorous accessibility, and minimal distraction. 
        Designed for data-heavy applications and professional software.
      </p>

      <h2>Themes in this collection</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        
        {/* Monochrome */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Monochrome <Badge variant="default">Default</Badge></h3>
            <code>data-theme="monochrome"</code>
          </div>
          <p className="docs-body-text">The default theme. Stark black and white with a sharp, high-contrast aesthetic. It gets out of the way of your content.</p>
        </div>

        {/* Arctic */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Arctic</h3>
            <code>data-theme="arctic"</code>
          </div>
          <p className="docs-body-text">A clean, bright theme focused on deep blues and cool greys. Perfect for finance, medical, or analytical dashboards.</p>
        </div>

        {/* Obsidian */}
        <div style={{ background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)", padding: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0 }}>Obsidian</h3>
            <code>data-theme="obsidian"</code>
          </div>
          <p className="docs-body-text">A professional, highly legible dark mode with subtle muted gold accents to reduce eye strain over long periods.</p>
        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/themes" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Overview</div>
        </Link>
        <Link href="/docs/themes/fun" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Fun Collection</div>
        </Link>
      </div>
    </>
  );
}
