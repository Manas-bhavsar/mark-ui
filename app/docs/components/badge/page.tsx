"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Badge } from "@/packages/core";

export default function BadgeDocPage() {
  const [variant, setVariant] = useState<"default" | "success" | "warning" | "error" | "info" | "accent">("default");
  const [size, setSize] = useState<"sm" | "md">("md");
  const [dot, setDot] = useState(false);

  return (
    <ComponentDocTemplate
      name="Badge"
      category="Display"
      description="Small status and label indicators. Used to communicate state, category, or count at a glance. Supports a pulsing dot for live status communication."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Badge
          variant={variant}
          size={size}
          dot={dot}
        >
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Badge>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="default">default</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
              <option value="info">info</option>
              <option value="accent">accent</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Flags</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}>
                <input type="checkbox" checked={dot} onChange={(e) => setDot(e.target.checked)} /> 
                show pulsing dot
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 48, alignItems: "center" }}>
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success" dot>Online</Badge>
        <div style={{ display: "flex", gap: 12, alignItems: "center", borderLeft: "1px solid var(--mark-border)", paddingLeft: 24, marginLeft: 12 }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </div>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use accent variant for theme-aware badges that should match the active palette.</li>
            <li>Use dot for live statuses like online, recording, or syncing.</li>
            <li>Keep badge text under 3 words.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use badges as buttons.</li>
            <li>Don&apos;t overload a single view with more than 3 or 4 different badge variants — it loses meaning.</li>
            <li>Don&apos;t use badges to replace proper status communication in forms.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Screen readers:</strong> add <code>aria-label</code> to provide context — "Status: Active" not just "Active".</li>
        <li><strong>Color:</strong> never rely on color alone to convey status — the label text must also communicate it.</li>
        <li><strong>Live regions:</strong> for dynamically changing badges use <code>aria-live="polite"</code>.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'default'|'success'|'warning'|'error'|'info'|'accent'</code></td><td><code>'default'</code></td><td>Visual style</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md'</code></td><td><code>'md'</code></td><td>Badge size</td></tr>
            <tr><td><code>dot</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows pulsing status dot</td></tr>
            <tr><td><code>children*</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Badge label content</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Badge {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
