"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Spinner, Button } from "@/packages/core";

export default function SpinnerDocPage() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [color, setColor] = useState<"accent" | "white" | "muted">("accent");
  const [showLabel, setShowLabel] = useState(true);

  return (
    <ComponentDocTemplate
      name="Spinner"
      category="Feedback"
      description="A loading indicator for async operations. Used standalone for section loading states and inside Button for loading states."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Spinner
          size={size}
          color={color}
          label={showLabel ? "Loading content..." : undefined}
        />
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Color</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={color} onChange={(e) => setColor(e.target.value as any)}>
              <option value="accent">accent</option>
              <option value="white">white</option>
              <option value="muted">muted</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Label</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} /> show label</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 64, marginBottom: 48, alignItems: "flex-end" }}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
        <Spinner color="muted" />
        <Button variant="primary" isLoading>Submitting</Button>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Spinner for operations that take between 1 and 10 seconds.</li>
            <li>Always pair with a label when used standalone so users know what is loading.</li>
            <li>Use color="accent" for Spinners that should match the active theme.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Spinner for operations under 300ms — the flash is more disruptive than showing nothing.</li>
            <li>Don&apos;t use Spinner for long operations over 10 seconds — use a progress bar instead.</li>
            <li>Don&apos;t use multiple Spinners in the same view — consolidate loading states.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>role="status"</code> on Spinner wrapper, <code>aria-label="Loading"</code> by default.</li>
        <li><strong>Label prop:</strong> overrides the <code>aria-label</code> value automatically.</li>
        <li><strong>Reduced motion:</strong> rotation replaced with opacity pulse animation automatically.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>size</code></td><td><code>'sm'|'md'|'lg'|'xl'</code></td><td><code>'md'</code></td><td>Spinner dimensions</td></tr>
            <tr><td><code>color</code></td><td><code>'accent'|'white'|'muted'</code></td><td><code>'accent'</code></td><td>Spinner color</td></tr>
            <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Visible + aria label text</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Spinner {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
