"use client";

import CodeBlock from "@/components/docs/blocks/CodeBlock";
import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Button } from "@markui/core";
import PropsTable from "@/components/docs/blocks/PropsTable";
import UsageGuidelines from "@/components/docs/blocks/UsageGuidelines";
import AccessibilitySection from "@/components/docs/blocks/AccessibilitySection";
import { ThemeSnippetViewer } from "@/components/docs";

const BUTTON_PROPS = [
  { prop: "variant", type: "'primary' | 'secondary' | 'ghost' | 'destructive'", default: "'primary'", description: "Visual style of the button" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the button" },
  { prop: "isLoading", type: "boolean", default: "false", description: "Shows spinner, locks dimensions" },
  { prop: "isDisabled", type: "boolean", default: "false", description: "Prevents interaction" },
  { prop: "isFullWidth", type: "boolean", default: "false", description: "Stretches to container width" },
  { prop: "leftIcon", type: "React.ReactNode", default: "—", description: "Icon before label" },
  { prop: "rightIcon", type: "React.ReactNode", default: "—", description: "Icon after label" },
  { prop: "onClick", type: "() => void", default: "—", description: "Click handler" },
  { prop: "children*", type: "React.ReactNode", default: "—", description: "Button label content" },
  { prop: "className", type: "string", default: "—", description: "Additional CSS classes" },
];

const BUTTON_GUIDELINES = {
  do: [
    "Use primary for the single most important action on a page or section.",
    "Use ghost for low-priority or repetitive actions.",
    "Use destructive only for irreversible actions like delete or remove.",
    "Keep button labels short — 1 to 3 words.",
  ],
  dont: [
    "Don't use more than one primary button in the same visual section.",
    "Don't use buttons for navigation — use a link instead.",
    "Don't disable buttons without explaining why elsewhere on the page.",
    "Don't use destructive variant for anything that can be undone.",
  ],
};

const BUTTON_A11Y = [
  { title: "Keyboard", description: "Space and Enter activate the button." },
  { title: "Focus", description: "Visible focus ring using accent color." },
  { title: "Loading state", description: "aria-busy='true' when loading, screen readers announce 'loading'." },
  { title: "Disabled", description: "aria-disabled='true', not focusable when disabled." },
  { title: "Icon-only buttons", description: "Must have aria-label." },
];

export default function ButtonDocPage() {
  const [variant, setVariant] = useState<"primary" | "secondary" | "ghost" | "destructive">("primary");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

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
          isFullWidth={isFullWidth}
        >
          Leave a mark
        </Button>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="ghost">ghost</option>
              <option value="destructive">destructive</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 12, color: "var(--mark-fg)", opacity: 0.6 }}>Boolean Props</label>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14, cursor: "pointer" }}>
                <input type="checkbox" checked={isLoading} onChange={(e) => setIsLoading(e.target.checked)} />
                isLoading
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14, cursor: "pointer" }}>
                <input type="checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
                isDisabled
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14, cursor: "pointer" }}>
                <input type="checkbox" checked={isFullWidth} onChange={(e) => setIsFullWidth(e.target.checked)} />
                isFullWidth
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48 }}>
        {(["primary", "secondary", "ghost", "destructive"] as const).map((v) => (
          <div key={v} style={{ textAlign: "center" }}>
            <Button variant={v}>Button</Button>
            <div style={{ marginTop: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <UsageGuidelines do={BUTTON_GUIDELINES.do} dont={BUTTON_GUIDELINES.dont} />

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <AccessibilitySection features={BUTTON_A11Y} />

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <PropsTable props={BUTTON_PROPS} />

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <CodeBlock code={`import { Button } from '@markui/core'`} />

      {/* CODE SNIPPET — theme-aware, updates live with active theme */}
      <h3 id="snippet" className="doc-section-label">CODE SNIPPET</h3>
      <ThemeSnippetViewer componentId="button" hideComponentSelector />

    </ComponentDocTemplate>
  );
}
