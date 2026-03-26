"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Divider } from "@/packages/core";

export default function DividerDocPage() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [variant, setVariant] = useState<"solid" | "dashed" | "dotted">("solid");
  const [color, setColor] = useState<"border" | "border-strong" | "accent">("border");

  return (
    <ComponentDocTemplate
      name="Divider"
      category="Layout"
      description="A visual separator separating content into logical blocks. Uses the HTML hr semantic role."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage" style={{ minHeight: 400 }}>
        {orientation === "horizontal" ? (
          <div style={{ width: "100%", maxWidth: 500 }}>
            <p style={{ margin: "0 0 16px", color: "var(--mark-fg)", opacity: 0.6 }}>Top Content</p>
            <Divider orientation="horizontal" variant={variant} color={color} />
            <p style={{ margin: "16px 0 0", color: "var(--mark-fg)", opacity: 0.6 }}>Bottom Content</p>
          </div>
        ) : (
          <div style={{ display: "flex", height: 200, alignItems: "center", gap: 32 }}>
            <p style={{ margin: 0, color: "var(--mark-fg)", opacity: 0.6 }}>Left Content</p>
            <Divider orientation="vertical" variant={variant} color={color} />
            <p style={{ margin: 0, color: "var(--mark-fg)", opacity: 0.6 }}>Right Content</p>
          </div>
        )}
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Orientation</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={orientation} onChange={(e) => setOrientation(e.target.value as any)}>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="solid">solid</option>
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Color Token</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={color} onChange={(e) => setColor(e.target.value as any)}>
              <option value="border">var(--mark-border)</option>
              <option value="border-strong">var(--mark-border-strong)</option>
              <option value="accent">var(--mark-accent)</option>
            </select>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">WITH CHILDREN (LABEL)</h3>
      <div style={{ padding: "32px 0", maxWidth: 500 }}>
        <Divider style={{ marginBottom: 48 }}>OR</Divider>
        <Divider variant="dashed" style={{ marginBottom: 48 }}>Section 2</Divider>
        <Divider style={{ marginBottom: 48 }} align="start">Start Aligned</Divider>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Divider to visually separate major sections of content.</li>
            <li>Use the label prop to provide context for the separation (e.g. "OR" in a login form).</li>
            <li>Rely on layout gap/margin before resorting to Dividers.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Dividers just for spacing — use CSS padding or gap instead.</li>
            <li>Don&apos;t overuse vertical Dividers in flex layouts — whitespace is often cleaner.</li>
            <li>Don&apos;t use Divider if the border-bottom of a container suffices.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Role:</strong> Uses <code>role="separator"</code> semantically.</li>
        <li><strong>Children:</strong> If children exist, sets <code>aria-orientation</code> to horizontal.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>orientation</code></td><td><code>'horizontal'|'vertical'</code></td><td><code>'horizontal'</code></td><td>Axis of the line</td></tr>
            <tr><td><code>variant</code></td><td><code>'solid'|'dashed'|'dotted'</code></td><td><code>'solid'</code></td><td>Stroke style</td></tr>
            <tr><td><code>color</code></td><td><code>string</code></td><td><code>'border'</code></td><td>CSS token (e.g. 'border', 'accent')</td></tr>
            <tr><td><code>align</code></td><td><code>'center'|'start'|'end'</code></td><td><code>'center'</code></td><td>Label alignment</td></tr>
            <tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Label within the divider</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Divider {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
