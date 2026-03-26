"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Avatar } from "@/packages/core";

export default function AvatarDocPage() {
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("md");
  const [shape, setShape] = useState<"circle" | "square">("circle");
  const [status, setStatus] = useState<"none" | "online" | "offline" | "busy" | "away">("none");
  const [mode, setMode] = useState<"image" | "initials" | "fallback">("image");

  return (
    <ComponentDocTemplate
      name="Avatar"
      category="Display"
      description="Represents a user or entity with an image, initials fallback, or icon fallback. Supports status indicators and grouped display."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Avatar
          src={mode === "image" ? "https://i.pravatar.cc/150?u=a042581f4e29026024d" : undefined}
          name={mode === "initials" ? "Jane Doe" : undefined}
          size={size}
          shape={shape}
          status={status !== "none" ? status as any : undefined}
        />
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Render Mode</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={mode} onChange={(e) => setMode(e.target.value as any)}>
              <option value="image">Image Source</option>
              <option value="initials">Initials</option>
              <option value="fallback">Anonymous/Fallback</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Size</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Shape</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={shape} onChange={(e) => setShape(e.target.value as any)}>
              <option value="circle">circle</option>
              <option value="square">square</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Status Dot</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={status} onChange={(e) => setStatus(e.target.value as any)}>
              <option value="none">none</option>
              <option value="online">online</option>
              <option value="offline">offline</option>
              <option value="busy">busy</option>
              <option value="away">away</option>
            </select>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48, alignItems: "flex-end" }}>
        <div style={{ textAlign: "center" }}>
          <Avatar src="https://i.pravatar.cc/150?u=1" size="lg" />
          <div style={{ marginTop: 8, fontSize: 12 }}>Image</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Avatar name="Avery Li" size="lg" />
          <div style={{ marginTop: 8, fontSize: 12 }}>Initials</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Avatar size="lg" />
          <div style={{ marginTop: 8, fontSize: 12 }}>Icon</div>
        </div>
        <div style={{ textAlign: "center", display: "flex", gap: 8, borderLeft: "1px solid var(--mark-border)", paddingLeft: 32 }}>
          <Avatar name="C C" size="xs" />
          <Avatar name="C C" size="sm" />
          <Avatar name="C C" size="md" />
          <Avatar name="C C" size="lg" />
          <Avatar name="C C" size="xl" />
        </div>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Always provide name prop even when using an image — it serves as the alt text and initials fallback.</li>
            <li>Use status dot only when presence information is meaningful to the user.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Avatar for non-person entities without customizing the fallback icon.</li>
            <li>Don&apos;t show status dots in contexts where real-time presence is not actually tracked.</li>
            <li>Don&apos;t use very small avatars (xs) with status dots — they overlap.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>Image:</strong> <code>alt</code> text pulled from name prop.</li>
        <li><strong>Initials:</strong> <code>aria-label</code> provides full name to screen readers.</li>
        <li><strong>Status dot:</strong> <code>aria-label</code> describes status — "Online", "Busy" etc.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>src</code></td><td><code>string</code></td><td>—</td><td>Image URL</td></tr>
            <tr><td><code>alt</code></td><td><code>string</code></td><td>—</td><td>Image alt text (defaults to name)</td></tr>
            <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Used for initials + alt text</td></tr>
            <tr><td><code>size</code></td><td><code>'xs'|'sm'|'md'|'lg'|'xl'</code></td><td><code>'md'</code></td><td>Avatar size</td></tr>
            <tr><td><code>shape</code></td><td><code>'circle'|'square'</code></td><td><code>'circle'</code></td><td>Border radius shape</td></tr>
            <tr><td><code>status</code></td><td><code>'online'|'offline'|'busy'|'away'</code></td><td>—</td><td>Status indicator</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Avatar {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}