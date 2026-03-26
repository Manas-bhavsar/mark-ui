"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Modal, Button, Input } from "@/packages/core";

export default function ModalDocPage() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [size, setSize] = useState<"sm" | "md" | "lg" | "full">("md");
  const [placement, setPlacement] = useState<"center" | "top" | "bottom">("center");
  const [isDismissible, setIsDismissible] = useState(true);
  const [hideCloseButton, setHideCloseButton] = useState(false);

  return (
    <ComponentDocTemplate
      name="Modal"
      category="Overlay"
      description="A high-priority dialog that demands user attention. Dims the background, traps focus, and prevents interaction with the rest of the application until resolved."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Button variant="primary" onClick={() => setIsOpen(true)}>Open Modal</Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size={size}
          placement={placement}
          isDismissible={isDismissible}
          hideCloseButton={hideCloseButton}
        >
          <Modal.Header>
            <h4 style={{ margin: 0, fontFamily: "var(--mark-font-display)", color: "var(--mark-fg)" }}>Edit Profile</h4>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--mark-fg)", opacity: 0.6 }}>Make changes to your public profile.</p>
          </Modal.Header>
          <Modal.Body style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Input label="Name" defaultValue="Jane Doe" />
            <Input label="Email" defaultValue="jane@example.com" />
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
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
              <option value="full">full</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Placement</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={placement} onChange={(e) => setPlacement(e.target.value as any)}>
              <option value="center">center</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Options</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDismissible} onChange={(e) => setIsDismissible(e.target.checked)} /> isDismissible (click outside / escape)</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={hideCloseButton} onChange={(e) => setHideCloseButton(e.target.checked)} /> hide close button</label>
            </div>
          </div>

        </div>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Modals for critical information that requires an immediate decision.</li>
            <li>Use Modals for complex data creation that would clutter the main view.</li>
            <li>Set isDismissible to false for forced actionable alerts (e.g., Session Expired).</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t nest Modals inside other Modals — use a multi-step flow within one Modal instead.</li>
            <li>Don&apos;t use full-screen Modals on desktop without good reason — consider a dedicated page.</li>
            <li>Don&apos;t use Modals for simple confirmation of non-destructive actions.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Focus trap:</strong> Focus is trapped within the Modal while open. Cannot tab out.</li>
        <li><strong>Keyboard:</strong> Esc key closes the modal (unless isDismissible=false).</li>
        <li><strong>ARIA:</strong> <code>role="dialog"</code>, <code>aria-modal="true"</code>. Focus immediately moves to first focusable element.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>isOpen*</code></td><td><code>boolean</code></td><td>—</td><td>Open state</td></tr>
            <tr><td><code>onClose*</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Called when closed</td></tr>
            <tr><td><code>size</code></td><td><code>'sm'|'md'|'lg'|'full'</code></td><td><code>'md'</code></td><td>Modal width</td></tr>
            <tr><td><code>placement</code></td><td><code>'center'|'top'|'bottom'</code></td><td><code>'center'</code></td><td>Vertical position</td></tr>
            <tr><td><code>isDismissible</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Close on outside click / Esc</td></tr>
            <tr><td><code>hideCloseButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hides top-right X button</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>{`import { Modal } from '@markui/core'

// Contains compound components:
// <Modal.Header>
// <Modal.Body>
// <Modal.Footer>`}</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}