"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Tooltip, Button } from "@/packages/core";

export default function TooltipDocPage() {
  const [placement, setPlacement] = useState<"top" | "bottom" | "left" | "right">("bottom");
  const [delay, setDelay] = useState(400);

  return (
    <ComponentDocTemplate
      name="Tooltip"
      category="Display"
      description="Contextual information that appears on hover or focus. Automatically repositions to avoid viewport clipping."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage" style={{ minHeight: 400 }}>
        <Tooltip
          content="This action requires admin privileges."
          placement={placement}
          delay={delay}
        >
          <Button variant="secondary">Hover me</Button>
        </Tooltip>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Placement</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={placement} onChange={(e) => setPlacement(e.target.value as any)}>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Delay (ms)</label>
            <input 
              type="number" 
              value={delay} 
              onChange={(e) => setDelay(Number(e.target.value))}
              style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }}
            />
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 48, placeItems: "center", padding: 64 }}>
        <Tooltip content="Tooltip on top" placement="top"><Button variant="ghost">Top</Button></Tooltip>
        <Tooltip content="Tooltip on right" placement="right"><Button variant="ghost">Right</Button></Tooltip>
        <Tooltip content="Tooltip on bottom" placement="bottom"><Button variant="ghost">Bottom</Button></Tooltip>
        <Tooltip content="Tooltip on left" placement="left"><Button variant="ghost">Left</Button></Tooltip>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Tooltip to explain icon-only buttons — they are the most important use case.</li>
            <li>Use for additional context that does not fit in the main UI.</li>
            <li>Keep tooltip content short — under 10 words ideally.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t put interactive content inside a Tooltip — use a Popover instead.</li>
            <li>Don&apos;t use Tooltip on mobile — hover does not exist on touch devices.</li>
            <li>Don&apos;t use Tooltip to hide essential information — it must also be available another way.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>role="tooltip"</code> on bubble, <code>aria-describedby</code> links trigger to tooltip.</li>
        <li><strong>Keyboard:</strong> shows on focus, hides on blur — fully keyboard accessible.</li>
        <li><strong>Touch devices:</strong> hover is unavailable. Ensure critical info is visible without tooltips.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>content*</code></td><td><code>React.ReactNode</code></td><td>—</td><td>Tooltip content</td></tr>
            <tr><td><code>placement</code></td><td><code>'top'|'bottom'|'left'|'right'</code></td><td><code>'bottom'</code></td><td>Preferred position</td></tr>
            <tr><td><code>delay</code></td><td><code>number</code></td><td><code>400</code></td><td>Hover delay in ms</td></tr>
            <tr><td><code>isDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents tooltip showing</td></tr>
            <tr><td><code>children*</code></td><td><code>React.ReactElement</code></td><td>—</td><td>The trigger element</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Tooltip {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}