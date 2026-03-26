"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Input } from "@/packages/core";

export default function InputDocPage() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [showHelper, setShowHelper] = useState(true);

  return (
    <ComponentDocTemplate
      name="Input"
      category="Inputs"
      description="A text entry field with label, helper text, and validation states. Supports icons on either side and animates on focus."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ width: "100%", maxWidth: 320 }}>
          <Input
            placeholder="Enter your username"
            size={size}
            isDisabled={isDisabled}
            isError={isError}
            isSuccess={isSuccess}
            label={showLabel ? "Username" : undefined}
            helperText={showHelper ? "This is how others will see you." : undefined}
            errorMessage={isError ? "Username is already taken" : undefined}
          />
        </div>
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
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Boolean Props</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} /> isDisabled</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isError} onChange={(e) => setIsError(e.target.checked)} /> isError</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isSuccess} onChange={(e) => setIsSuccess(e.target.checked)} /> isSuccess</label>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Content Toggles</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} /> show label</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showHelper} onChange={(e) => setShowHelper(e.target.checked)} /> show helper/error text</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginBottom: 48 }}>
        <Input placeholder="Default input" />
        <Input label="With label" placeholder="Value..." />
        <Input isError errorMessage="Invalid input format" placeholder="Error state" />
        <Input isSuccess placeholder="Success state" />
        <Input isDisabled placeholder="Disabled state" />
        <Input leftIcon={<span style={{ paddingLeft: 12 }}>🔍</span>} placeholder="With left icon" />
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Always pair an Input with a visible label — never rely on placeholder as the label.</li>
            <li>Use helperText to provide formatting hints before the user types.</li>
            <li>Use errorMessage to explain what went wrong, not just that something went wrong.</li>
            <li>Group related inputs together visually.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use placeholder text as a substitute for a label — it disappears on focus.</li>
            <li>Don&apos;t show an error state before the user has had a chance to interact.</li>
            <li>Don&apos;t stack more than 6-8 inputs without breaking them into sections.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Keyboard:</strong> Tab to focus, type to enter text.</li>
        <li><strong>Label:</strong> htmlFor links label to input correctly.</li>
        <li><strong>Error:</strong> <code>aria-describedby</code> links input to errorMessage, announced by screen readers.</li>
        <li><strong>Required:</strong> <code>aria-required="true"</code> on required fields.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Visible label above input</td></tr>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>Hint text inside input</td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Controlled value</td></tr>
            <tr><td><code>onChange</code></td><td><code>function</code></td><td>—</td><td>Change handler</td></tr>
            <tr><td><code>type</code></td><td><code>string</code></td><td><code>'text'</code></td><td>Input type</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Input size</td></tr>
            <tr><td><code>isError</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Error visual state</td></tr>
            <tr><td><code>errorMessage</code></td><td><code>string</code></td><td>—</td><td>Error text below input</td></tr>
            <tr><td><code>helperText</code></td><td><code>string</code></td><td>—</td><td>Helper text below input</td></tr>
            <tr><td><code>leftIcon</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Icon inside left side</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Input {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
