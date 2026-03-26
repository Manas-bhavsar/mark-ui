"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Card, Button } from "@/packages/core";

export default function CardDocPage() {
  const [variant, setVariant] = useState<"default" | "bordered" | "elevated" | "ghost">("default");
  const [padding, setPadding] = useState<"none" | "sm" | "md" | "lg">("md");
  const [isHoverable, setIsHoverable] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  return (
    <ComponentDocTemplate
      name="Card"
      category="Display"
      description="The primary content container. Groups related information into a distinct visual unit. Accepts Header, Body, and Footer slots via compound component pattern."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Card
            variant={variant}
            padding={padding}
            isHoverable={isHoverable}
            isClickable={isClickable}
            onClick={isClickable ? () => alert("Card clicked!") : undefined}
          >
            <Card.Header>
              <h4 style={{ margin: 0, fontFamily: "var(--mark-font-display)", color: "var(--mark-fg)" }}>Project Update</h4>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Just now</p>
            </Card.Header>
            <Card.Body>
              <p style={{ margin: 0, color: "var(--mark-fg)", opacity: 0.8, fontSize: 14, lineHeight: 1.6 }}>
                The new deployment pipeline has successfully finished running. All 42 tests passed without warnings.
              </p>
            </Card.Body>
            <Card.Footer style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
              <Button variant="ghost" size="sm">Dismiss</Button>
              <Button variant="secondary" size="sm">View Logs</Button>
            </Card.Footer>
          </Card>
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
              <option value="bordered">bordered</option>
              <option value="elevated">elevated</option>
              <option value="ghost">ghost</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Padding</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={padding} onChange={(e) => setPadding(e.target.value as any)}>
              <option value="none">none</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Interaction</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isHoverable} onChange={(e) => setIsHoverable(e.target.checked)} /> isHoverable</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={isClickable} onChange={(e) => setIsClickable(e.target.checked)} /> isClickable</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}>
        <Card variant="default">
          <Card.Body>Default (Bg Elevated)</Card.Body>
        </Card>
        <Card variant="bordered">
          <Card.Body>Bordered (Bg Surface)</Card.Body>
        </Card>
        <Card variant="elevated">
          <Card.Body>Elevated (Heavy shadow)</Card.Body>
        </Card>
        <Card variant="ghost">
          <Card.Body>Ghost (Transparent)</Card.Body>
        </Card>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Card to group information that belongs together — a user profile, a product item, a stat block.</li>
            <li>Use isHoverable for cards in a grid that the user scans but does not always click.</li>
            <li>Use isClickable for cards that are the primary navigation target.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t nest Cards inside Cards.</li>
            <li>Don&apos;t put unrelated content in the same Card.</li>
            <li>Don&apos;t use Card.Footer for anything other than actions or metadata related to the Card&apos;s content.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Clickable cards:</strong> add <code>role="button"</code> and <code>tabIndex={"{"}0{"}"}</code> when isClickable is true.</li>
        <li><strong>Keyboard:</strong> clickable cards activate on Enter and Space.</li>
        <li><strong>Link cards:</strong> use an anchor tag wrapping the Card rather than onClick for navigation.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'default'|'bordered'|'elevated'|'ghost'</code></td><td><code>'default'</code></td><td>Visual style</td></tr>
            <tr><td><code>padding</code></td><td><code>'none'|'sm'|'md'|'lg'</code></td><td><code>'md'</code></td><td>Inner padding applied to Body</td></tr>
            <tr><td><code>isHoverable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds hover lift effect</td></tr>
            <tr><td><code>isClickable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds pointer cursor + click states</td></tr>
            <tr><td><code>onClick</code></td><td><code>function</code></td><td>—</td><td>Click handler</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Card {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
