"use client";

import Link from "next/link";
import { Badge } from "@/packages/core";
import { DOCS_NAV } from "@/components/docs/DocsNavData";

interface ComponentDocProps {
  name: string;
  description: string;
  category: string;
  version?: string;
  children: React.ReactNode;
}

export default function ComponentDocTemplate({
  name,
  description,
  category,
  version = "v1.0",
  children,
}: ComponentDocProps) {
  
  // Find prev/next links based on sidebar order
  const flatLinks: { name: string; href: string }[] = [];
  DOCS_NAV.forEach(section => {
    section.items.forEach((item: any) => {
      if (item.label && item.items) {
        item.items.forEach((sub: any) => flatLinks.push(sub));
      } else {
        flatLinks.push(item);
      }
    });
  });

  const currentIndex = flatLinks.findIndex(l => l.name.toLowerCase() === name.toLowerCase());
  const prevLink = currentIndex > 0 ? flatLinks[currentIndex - 1] : null;
  const nextLink = currentIndex < flatLinks.length - 1 ? flatLinks[currentIndex + 1] : null;

  return (
    <div className="component-doc-page">
      {/* Breadcrumb */}
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Components</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>{name}</span>
      </div>

      {/* Header Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" }}>
        <h1 style={{ margin: 0 }}>{name}</h1>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingBottom: "8px" }}>
          <Badge variant="accent">{category}</Badge>
          <span style={{ fontFamily: "var(--mark-font-code)", fontSize: "14px", opacity: 0.5 }}>{version}</span>
        </div>
      </div>

      {/* Description */}
      <p className="docs-description-line">{description}</p>

      {/* PAGE CONTENT (Sections injected here) */}
      <div className="doc-sections-wrapper">
        {children}
      </div>

      {/* Prev / Next Bottom Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        {prevLink ? (
          <Link href={prevLink.href} style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
            <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
            <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>{prevLink.name}</div>
          </Link>
        ) : <div />}
        
        {nextLink ? (
          <Link href={nextLink.href} style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
            <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
            <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>{nextLink.name}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
