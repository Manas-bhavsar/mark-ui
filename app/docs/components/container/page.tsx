"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Container } from "@/packages/core";

export default function ContainerDocPage() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md");

  return (
    <ComponentDocTemplate
      name="Container"
      category="Layout"
      description="Wraps page content to constrain maximum width and globally center it. Responsive padding is built-in."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage" style={{ background: "var(--mark-bg-canvas)", padding: 0 }}>
        <Container size={size}>
          <div style={{ width: "100%", height: 300, background: "var(--mark-bg)", border: "1px dashed var(--mark-border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mark-fg)", fontWeight: 500 }}>
            {size.toUpperCase()} Container
          </div>
        </Container>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Maximum Width Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="sm">sm (640px)</option>
              <option value="md">md (768px - default)</option>
              <option value="lg">lg (1024px)</option>
              <option value="xl">xl (1280px)</option>
              <option value="full">full (100%)</option>
            </select>
          </div>

        </div>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Container as the top-level wrapper for page content.</li>
            <li>Use <code>sm</code> or <code>md</code> for text-heavy focus views (like articles or settings forms).</li>
            <li>Use <code>xl</code> for complex dashboards or grid layouts.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t nest multiple Containers inside each other — it messes up the responsive padding.</li>
            <li>Don&apos;t attempt to override the max-width with CSS classes on the Container — use the size prop.</li>
            <li>Don&apos;t put full-bleed elements (like a top navbar) inside a Container. Wrap the content *below* the navbar instead.</li>
          </ul>
        </div>
      </div>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>size</code></td><td><code>'sm'|'md'|'lg'|'xl'|'full'</code></td><td><code>'md'</code></td><td>Max-width constraint</td></tr>
            <tr><td><code>as</code></td><td><code>string</code></td><td><code>'div'</code></td><td>HTML element to render as (e.g. 'main', 'section')</td></tr>
            <tr><td><code>children*</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Constrained content</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>{`import { Container } from '@markui/core'

export default function Layout() {
  return (
    <main>
      <Navbar /> {/* Full bleed */}
      <Container size="lg">
        {/* Constrained layout */}
      </Container>
    </main>
  )
}`}</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
