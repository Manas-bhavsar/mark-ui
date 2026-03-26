"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Toggle } from "@/packages/core";

export default function ToggleDocPage() {
  const [checked, setChecked] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <ComponentDocTemplate
      name="Toggle"
      category="Inputs"
      description="An on/off switch for settings and preferences. Use when the change takes effect immediately without a submit action."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Toggle
          checked={checked}
          onCheckedChange={setChecked as any} /* Type bypass */
          size={size}
          isDisabled={isDisabled}
          label={showLabel ? "Enable dark mode" : undefined}
          description={showDescription && showLabel ? "Switch the entire application to a high-contrast dark theme instantly." : undefined}
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
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>States</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> checked</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} /> isDisabled</label>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Content</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} /> show label</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showDescription} onChange={(e) => setShowDescription(e.target.checked)} /> show description</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}>
        <Toggle label="Off state" />
        <Toggle defaultChecked label="On state" />
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Toggle size="sm" defaultChecked />
          <Toggle size="md" defaultChecked />
          <Toggle size="lg" defaultChecked />
        </div>
        <Toggle isDisabled defaultChecked label="Disabled & checked" />
        <Toggle label="Notifications" description="Receive push alerts." />
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use for settings that take effect immediately when switched — like dark mode, notifications.</li>
            <li>Always pair with a label that describes what is being toggled.</li>
            <li>Use the description prop to explain the consequence of toggling.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use a Toggle for form inputs that require a submit — use Checkbox instead.</li>
            <li>Don&apos;t use Toggle for selecting between more than two options — use Select.</li>
            <li>Don&apos;t place Toggles inside forms that need explicit submission.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Keyboard:</strong> Space and Enter toggle the switch.</li>
        <li><strong>ARIA:</strong> <code>role="switch"</code>, <code>aria-checked</code> reflects state.</li>
        <li><strong>Label:</strong> <code>aria-label</code> required if no visible label.</li>
        <li><strong>Focus:</strong> visible focus ring around the track.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>checked</code></td><td><code>boolean</code></td><td>—</td><td>Controlled state</td></tr>
            <tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uncontrolled initial state</td></tr>
            <tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) =&gt; void</code></td><td>—</td><td>Change handler</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents interaction</td></tr>
            <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Visible label text</td></tr>
            <tr><td><code>description</code></td><td><code>string</code></td><td>—</td><td>Secondary text below label</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Toggle size</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Toggle {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
