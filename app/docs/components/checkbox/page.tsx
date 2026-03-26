"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Checkbox } from "@/packages/core";

export default function CheckboxDocPage() {
  const [checked, setChecked] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <ComponentDocTemplate
      name="Checkbox"
      category="Inputs"
      description="A binary selection control for forms and settings. Supports indeterminate state for parent checkboxes in nested lists."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked as any} /* Type bypass for quick docs */
          size={size}
          isDisabled={isDisabled}
          isIndeterminate={isIndeterminate}
          label={showLabel ? "Accept terms and conditions" : undefined}
          description={showDescription && showLabel ? "You must accept our Terms of Service to continue." : undefined}
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
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isIndeterminate} onChange={(e) => setIsIndeterminate(e.target.checked)} /> isIndeterminate</label>
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
        <Checkbox label="Unchecked by default" />
        <Checkbox defaultChecked label="Checked by default" />
        <Checkbox isIndeterminate label="Indeterminate state" />
        <Checkbox isDisabled defaultChecked label="Disabled & checked" />
        <Checkbox label="With description attached" description="This provides more context to the user." />
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use for independent options that do not affect each other.</li>
            <li>Use indeterminate state when a parent checkbox controls a group of children that are partially selected.</li>
            <li>Stack checkboxes vertically for lists longer than 3 items.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use checkboxes for mutually exclusive options — use Radio buttons instead.</li>
            <li>Don&apos;t use a checkbox to trigger an immediate action — use a Toggle instead.</li>
            <li>Don&apos;t leave a checkbox without a label.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Keyboard:</strong> Space toggles checked state.</li>
        <li><strong>ARIA:</strong> <code>aria-checked</code> reflects true/false/mixed.</li>
        <li><strong>Group:</strong> use <code>role="group"</code> with <code>aria-labelledby</code> for checkbox groups.</li>
        <li><strong>Focus:</strong> visible focus ring on the box.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>checked</code></td><td><code>boolean</code></td><td>—</td><td>Controlled checked state</td></tr>
            <tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uncontrolled initial state</td></tr>
            <tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) =&gt; void</code></td><td>—</td><td>Change handler</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents interaction</td></tr>
            <tr><td><code>isIndeterminate</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows dash instead of check</td></tr>
            <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Visible label text</td></tr>
            <tr><td><code>description</code></td><td><code>string</code></td><td>—</td><td>Secondary description below label</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Checkbox size</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Checkbox {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
