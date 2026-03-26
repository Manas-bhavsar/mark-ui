"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Tag } from "@/packages/core";

export default function TagDocPage() {
  const [variant, setVariant] = useState<"default" | "accent" | "success" | "warning" | "error">("default");
  const [size, setSize] = useState<"sm" | "md">("md");
  const [isDismissible, setIsDismissible] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ComponentDocTemplate
      name="Tag"
      category="Display"
      description="Dismissible label chips for filters, selections, and categories. Animates out cleanly when dismissed and neighboring tags reflow automatically."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isVisible ? (
            <Tag
              variant={variant}
              size={size}
              isDismissible={isDismissible}
              onDismiss={() => setIsVisible(false)}
              leftIcon={hasLeftIcon ? <span style={{ fontSize: 12 }}>🔥</span> : undefined}
            >
              Mark UI Framework
            </Tag>
          ) : (
            <button 
              onClick={() => setIsVisible(true)}
              style={{ padding: "8px 16px", background: "var(--mark-border)", color: "var(--mark-fg)", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 14 }}
            >
              Reset Tag
            </button>
          )}
        </div>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="default">default</option>
              <option value="accent">accent</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
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
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Options</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDismissible} onChange={(e) => setIsDismissible(e.target.checked)} /> isDismissible</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={hasLeftIcon} onChange={(e) => setHasLeftIcon(e.target.checked)} /> leftIcon</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
        <Tag variant="default">Default Filter</Tag>
        <Tag variant="accent" isDismissible>Accent Active</Tag>
        <Tag variant="success" leftIcon={<span style={{fontSize: 10}}>●</span>}>Success Tag</Tag>
        <Tag variant="error" isDismissible size="sm">Small Error</Tag>
        <Tag variant="warning">Warning Status</Tag>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Tags for user-applied filters that can be removed.</li>
            <li>Use Tags for selected items in a multi-select pattern.</li>
            <li>Use leftIcon to add visual context to category tags.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Tags as navigation links.</li>
            <li>Don&apos;t mix dismissible and non-dismissible Tags in the same group without visual distinction.</li>
            <li>Don&apos;t use Tags for permanent labels — use Badge instead.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Dismiss button:</strong> <code>aria-label="Remove [tag text]"</code></li>
        <li><strong>Keyboard:</strong> dismiss button focusable, activates on Enter and Space.</li>
        <li><strong>Removal announcement:</strong> use <code>aria-live="polite"</code> on the tag container so removal is announced.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'default'|'accent'|'success'|'warning'|'error'</code></td><td><code>'default'</code></td><td>Visual style</td></tr>
            <tr><td><code>size</code></td><td><code>'sm'|'md'</code></td><td><code>'md'</code></td><td>Tag size</td></tr>
            <tr><td><code>isDismissible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows dismiss button</td></tr>
            <tr><td><code>onDismiss</code></td><td><code>function</code></td><td>—</td><td>Called when dismissed</td></tr>
            <tr><td><code>leftIcon</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Icon before label</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents dismissal</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Tag {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}