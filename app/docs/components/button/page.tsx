"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Button } from "@/packages/core";

export default function ButtonDocPage() {
  const [variant, setVariant] = useState<"primary" | "secondary" | "ghost" | "destructive">("primary");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

  return (
    <ComponentDocTemplate
      name="Button"
      category="Inputs"
      description="The primary action element. Triggers events, submits forms, and initiates navigation. Available in four variants and three sizes with a built-in loading state."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Button
          variant={variant}
          size={size}
          isLoading={isLoading}
          isDisabled={isDisabled}
          fullWidth={fullWidth}
        >
          Leave a mark
        </Button>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="ghost">ghost</option>
              <option value="destructive">destructive</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Boolean Props</label>
            <div style={{ display: "flex", gap: 16 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}>
                <input type="checkbox" checked={isLoading} onChange={(e) => setIsLoading(e.target.checked)} />
                isLoading
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}>
                <input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
                isDisabled
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}>
                <input type="checkbox" checked={fullWidth} onChange={(e) => setFullWidth(e.target.checked)} />
                fullWidth
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48 }}>
        {["primary", "secondary", "ghost", "destructive"].map((v) => (
          <div key={v} style={{ textAlign: "center" }}>
            <Button variant={v as any}>Button</Button>
            <div style={{ marginTop: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use primary for the single most important action on a page or section.</li>
            <li>Use ghost for low-priority or repetitive actions.</li>
            <li>Use destructive only for irreversible actions like delete or remove.</li>
            <li>Keep button labels short — 1 to 3 words.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use more than one primary button in the same visual section.</li>
            <li>Don&apos;t use buttons for navigation — use a link instead.</li>
            <li>Don&apos;t disable buttons without explaining why elsewhere on the page.</li>
            <li>Don&apos;t use destructive variant for anything that can be undone.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Keyboard:</strong> Space and Enter activate the button.</li>
        <li><strong>Focus:</strong> Visible focus ring using accent color.</li>
        <li><strong>Loading state:</strong> <code>aria-busy="true"</code> when loading, screen readers announce "loading".</li>
        <li><strong>Disabled:</strong> <code>aria-disabled="true"</code>, not focusable when disabled.</li>
        <li><strong>Icon-only buttons:</strong> must have <code>aria-label</code>.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'primary' | 'secondary' | 'ghost' | 'destructive'</code></td><td><code>'primary'</code></td><td>Visual style of the button</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Size of the button</td></tr>
            <tr><td><code>isLoading</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows spinner, locks dimensions</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents interaction</td></tr>
            <tr><td><code>fullWidth</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Stretches to container width</td></tr>
            <tr><td><code>leftIcon</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Icon before label</td></tr>
            <tr><td><code>rightIcon</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Icon after label</td></tr>
            <tr><td><code>onClick</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Click handler</td></tr>
            <tr><td><code>children*</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Button label content</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Button {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
