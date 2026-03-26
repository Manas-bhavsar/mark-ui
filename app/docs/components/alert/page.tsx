"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Alert } from "@/packages/core";

export default function AlertDocPage() {
  const [variant, setVariant] = useState<"info" | "success" | "warning" | "error" | "accent">("info");
  const [isDismissible, setIsDismissible] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ComponentDocTemplate
      name="Alert"
      category="Feedback"
      description="Inline feedback messages for communicating status, warnings, or important information in context. Dismisses with a smooth height-collapse animation."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ width: "100%", maxWidth: 500, minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isVisible ? (
            <Alert
              variant={variant}
              isDismissible={isDismissible}
              onDismiss={() => setIsVisible(false)}
              showIcon={showIcon}
              title={showTitle ? "System Update Available" : undefined}
            >
              Please refresh the page to apply the latest security patches.
            </Alert>
          ) : (
            <button 
              onClick={() => setIsVisible(true)}
              style={{ padding: "8px 16px", background: "var(--mark-border)", color: "var(--mark-fg)", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 14 }}
            >
              Reset Alert
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
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
              <option value="accent">accent</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Options</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDismissible} onChange={(e) => setIsDismissible(e.target.checked)} /> isDismissible</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} /> showIcon</label>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Content</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showTitle} onChange={(e) => setShowTitle(e.target.checked)} /> show title</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48, maxWidth: 600 }}>
        <Alert variant="info" title="Information">This is an informational alert.</Alert>
        <Alert variant="success" title="Success">Your changes have been saved.</Alert>
        <Alert variant="warning" title="Warning">Your password expires in 3 days.</Alert>
        <Alert variant="error" title="Error">Failed to connect to the database.</Alert>
        <Alert variant="accent" title="New Feature">Check out our new dark mode.</Alert>
        <Alert variant="info" isDismissible title="Dismissible">This alert can be closed.</Alert>
        <Alert variant="info" icon={<span style={{fontSize: 20}}>🚀</span>}>Alert with custom icon override.</Alert>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Alert directly after the action that caused it — placement in context matters.</li>
            <li>Use title when the alert needs a headline and body copy.</li>
            <li>Use accent variant for theme-specific callouts that should feel part of the brand.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Alert for errors that belong in a form field — use Input errorMessage.</li>
            <li>Don&apos;t stack multiple Alerts of the same type — consolidate into one.</li>
            <li>Don&apos;t use Alert for transient feedback — use Toast instead.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>role="alert"</code> announces to screen readers immediately on mount.</li>
        <li><strong>Dismiss:</strong> <code>aria-label="Close alert"</code> on button.</li>
        <li><strong>Live region:</strong> content changes within the Alert are announced automatically.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'info'|'success'|'warning'|'error'|'accent'</code></td><td><code>'info'</code></td><td>Visual style</td></tr>
            <tr><td><code>title</code></td><td><code>string</code></td><td>—</td><td>Bold heading above body</td></tr>
            <tr><td><code>isDismissible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows close button</td></tr>
            <tr><td><code>onDismiss</code></td><td><code>function</code></td><td>—</td><td>Called on close</td></tr>
            <tr><td><code>showIcon</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows variant icon</td></tr>
            <tr><td><code>icon</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Custom icon override</td></tr>
            <tr><td><code>children*</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Alert body content</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Alert {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
