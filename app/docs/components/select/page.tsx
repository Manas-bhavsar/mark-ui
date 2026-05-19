"use client";

import CodeBlock from "@/components/docs/blocks/CodeBlock";
import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Select } from "@markui/core";
import { ThemeSnippetViewer } from "@/components/docs";

const BASIC_OPTIONS = [
  { label: "New York", value: "ny" },
  { label: "London", value: "ldn" },
  { label: "Tokyo", value: "tyo" },
  { label: "Paris", value: "par" },
  { label: "Sydney (Unavailable)", value: "syd", isDisabled: true },
];

export default function SelectDocPage() {
  const [value, setValue] = useState("");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [showHelper, setShowHelper] = useState(true);

  return (
    <ComponentDocTemplate
      name="Select"
      category="Inputs"
      description="A fully custom dropdown for choosing one option from a list. Built from scratch — not a native select element."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ width: "100%", maxWidth: 300 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {showLabel && <label style={{ fontSize: 14, fontWeight: 500, color: "var(--mark-fg)" }}>Office Location</label>}
            <Select
              options={BASIC_OPTIONS}
              value={value}
              onChange={setValue}
              placeholder="Choose a city"
              size={size}
              isDisabled={isDisabled}
              isError={isError}
            />
            {showHelper && !isError && <span style={{ fontSize: 13, color: "var(--mark-fg-muted)" }}>Select your primary workplace.</span>}
            {isError && <span style={{ fontSize: 13, color: "var(--mark-error)" }}>Please select a valid location.</span>}
          </div>
        </div>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>States</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} /> isDisabled</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isError} onChange={(e) => setIsError(e.target.checked)} /> isError</label>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Content</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showLabel} onChange={(e) => setShowLabel(e.target.checked)} /> show label</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showHelper} onChange={(e) => setShowHelper(e.target.checked)} /> show helper</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginBottom: 48 }}>
        <Select options={[{label:"One", value:"1"}]} placeholder="Default closed" />
        <Select options={BASIC_OPTIONS} value="tyo" onChange={()=>{}} placeholder="With selected value" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "var(--mark-fg)" }}>With Label</label>
          <Select options={BASIC_OPTIONS} placeholder="Choose..." />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Select options={BASIC_OPTIONS} isError placeholder="Error state" />
          <span style={{ fontSize: 13, color: "var(--mark-error)" }}>Required field</span>
        </div>
        <Select options={BASIC_OPTIONS} isDisabled placeholder="Disabled" />
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use when there are 5 or more options to choose from.</li>
            <li>Use label to make it clear what is being selected.</li>
            <li>Use isDisabled on individual options to show unavailable choices without removing them.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Select for fewer than 4 options — use Radio buttons instead.</li>
            <li>Don&apos;t use Select for multi-selection — use a Checkbox group instead.</li>
            <li>Don&apos;t rely on placeholder alone to explain what is being selected.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Keyboard:</strong> Space/Enter opens, Arrow keys navigate, Enter selects, Escape closes.</li>
        <li><strong>ARIA:</strong> <code>role="listbox"</code> on dropdown, <code>role="option"</code> on each item, <code>aria-selected</code> on selected option, <code>aria-expanded</code> on trigger.</li>
        <li><strong>Focus:</strong> focus returns to trigger on close.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>options</code></td><td><code>SelectOption[]</code></td><td>—</td><td>Array of option objects</td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Controlled selected value</td></tr>
            <tr><td><code>defaultValue</code></td><td><code>string</code></td><td>—</td><td>Uncontrolled initial value</td></tr>
            <tr><td><code>onChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Change handler</td></tr>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>Shown when nothing selected</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Select size</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents interaction</td></tr>
            <tr><td><code>isError</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Error visual state</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <CodeBlock code={`import { Select } from '@markui/core'`} />


      {/* CODE SNIPPET — theme-aware, updates live with active theme */}
      <h3 id="snippet" className="doc-section-label">CODE SNIPPET</h3>
      <ThemeSnippetViewer componentId="select" hideComponentSelector />
    </ComponentDocTemplate>
  );
}
