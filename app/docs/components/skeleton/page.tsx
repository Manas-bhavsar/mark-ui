"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Skeleton } from "@/packages/core";

export default function SkeletonDocPage() {
  const [variant, setVariant] = useState<"text" | "circle" | "rectangle" | "card">("text");
  const [animate, setAnimate] = useState(true);
  const [lines, setLines] = useState(3);
  const [width, setWidth] = useState<string>("100%");
  const [height, setHeight] = useState<string>("auto");

  return (
    <ComponentDocTemplate
      name="Skeleton"
      category="Feedback"
      description="Loading placeholder that mimics the shape of incoming content. Reduces perceived load time by showing structure before data."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Skeleton
            variant={variant}
            animate={animate}
            lines={lines}
            width={width !== "auto" && width !== "100%" ? width : undefined}
            height={height !== "auto" ? height : undefined}
            style={{ width, height: height !== "auto" ? height : undefined }}
          />
        </div>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="text">text</option>
              <option value="circle">circle</option>
              <option value="rectangle">rectangle</option>
              <option value="card">card</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Lines (Text only)</label>
            <input 
              type="number" 
              value={lines} 
              onChange={(e) => setLines(Number(e.target.value))}
              disabled={variant !== "text"}
              style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4, opacity: variant === "text" ? 1 : 0.5 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Dimensions</label>
            <div style={{ display: "flex", gap: 8 }}>
              <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="W" style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} />
              <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="H" style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Animation</label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}>
              <input type="checkbox" checked={animate} onChange={(e) => setAnimate(e.target.checked)} />
              animate
            </label>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48, alignItems: "flex-start" }}>
        
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Text (1/3/5 lines)</div>
          <Skeleton variant="text" lines={1} style={{ marginBottom: 12 }} />
          <Skeleton variant="text" lines={3} style={{ marginBottom: 12 }} />
        </div>

        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Circle & Rectangle</div>
          <div style={{ display: "flex", gap: 16 }}>
            <Skeleton variant="circle" width={60} height={60} />
            <Skeleton variant="rectangle" width={100} height={60} />
            <Skeleton variant="rectangle" width={100} height={60} animate={false} />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Card Layout Variant</div>
          <Skeleton variant="card" />
        </div>

      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Match the Skeleton shape to the content it is replacing as closely as possible.</li>
            <li>Use the card variant to replace entire Card components while loading.</li>
            <li>Show Skeletons for a maximum of 3 seconds before showing an error state.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Skeleton for content that loads in under 300ms — it flashes unnecessarily.</li>
            <li>Don&apos;t animate Skeletons indefinitely when loading has actually failed.</li>
            <li>Don&apos;t mix Skeleton placeholders with real loaded content in the same list.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>aria-hidden="true"</code> on Skeleton — it is purely decorative.</li>
        <li><strong>Live region:</strong> announce content loaded on the parent container, not the Skeleton.</li>
        <li><strong>Reduced motion:</strong> shimmer animation disabled, static placeholder shown.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'text'|'circle'|'rectangle'|'card'</code></td><td><code>'text'</code></td><td>Shape variant</td></tr>
            <tr><td><code>width</code></td><td><code>string|number</code></td><td>—</td><td>Custom width</td></tr>
            <tr><td><code>height</code></td><td><code>string|number</code></td><td>—</td><td>Custom height</td></tr>
            <tr><td><code>lines</code></td><td><code>number</code></td><td><code>3</code></td><td>Number of text lines</td></tr>
            <tr><td><code>animate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enables shimmer animation</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Skeleton {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}