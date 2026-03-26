"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Drawer, Button, Input } from "@/packages/core";

export default function DrawerDocPage() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">("right");
  const [size, setSize] = useState<"sm" | "md" | "lg" | "full">("md");
  const [isDismissible, setIsDismissible] = useState(true);

  return (
    <ComponentDocTemplate
      name="Drawer"
      category="Overlay"
      description="A panel that slides in from the edge of the screen. Ideal for detailed content formatting, multi-step forms, and navigation menus."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Button variant="secondary" onClick={() => setIsOpen(true)}>Open Drawer</Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement={placement}
          size={size}
          isDismissible={isDismissible}
        >
          <Drawer.Header>
            <h4 style={{ margin: 0, fontFamily: "var(--mark-font-display)", color: "var(--mark-fg)", fontSize: 20 }}>Account Settings</h4>
          </Drawer.Header>
          <Drawer.Body style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h5 style={{ margin: "0 0 16px", color: "var(--mark-fg)", fontSize: 14 }}>Personal Info</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Input label="Full Name" defaultValue="Jane Doe" />
                <Input label="Title" defaultValue="Senior Developer" />
              </div>
            </div>
            <div>
              <h5 style={{ margin: "0 0 16px", color: "var(--mark-fg)", fontSize: 14 }}>Security</h5>
              <Button variant="ghost" style={{ width: "100%", justifyContent: "flex-start" }}>Change Password</Button>
              <Button variant="ghost" style={{ width: "100%", justifyContent: "flex-start", color: "var(--mark-error)" }}>Delete Account</Button>
            </div>
          </Drawer.Body>
          <Drawer.Footer style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Close</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>
          </Drawer.Footer>
        </Drawer>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Placement</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={placement} onChange={(e) => setPlacement(e.target.value as any)}>
              <option value="right">right (default)</option>
              <option value="left">left</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
            </select>
          </div>

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
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Options</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDismissible} onChange={(e) => setIsDismissible(e.target.checked)} /> isDismissible</label>
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
            <li>Use Drawers (instead of Modals) for complex forms that require scrolling.</li>
            <li>Use left Drawers for root navigation menus (e.g., Hamburger menus on mobile).</li>
            <li>Use right Drawers for detail views, filters, and configuration panels.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use top/bottom Drawers for complex forms — vertical space is limited.</li>
            <li>Don&apos;t nest Drawers.</li>
            <li>Don&apos;t use Drawers for simple confirmation dialogues — use a Dialog/Modal instead.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Focus trap:</strong> Focus is trapped within the Drawer while open. Cannot tab to background.</li>
        <li><strong>Keyboard:</strong> Esc key closes the drawer (unless isDismissible=false).</li>
        <li><strong>ARIA:</strong> <code>role="dialog"</code>, <code>aria-modal="true"</code>.</li>
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
            <tr><td><code>placement</code></td><td><code>'left'|'right'|'top'|'bottom'</code></td><td><code>'right'</code></td><td>Slide-in edge</td></tr>
            <tr><td><code>size</code></td><td><code>'sm'|'md'|'lg'|'full'</code></td><td><code>'md'</code></td><td>Panel size</td></tr>
            <tr><td><code>isDismissible</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Close on outside click / Esc</td></tr>
            <tr><td><code>hideCloseButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hides top-right X button</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>{`import { Drawer } from '@markui/core'

// Contains compound components:
// <Drawer.Header>
// <Drawer.Body>
// <Drawer.Footer>`}</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}