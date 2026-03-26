"use client";

import { useState } from "react";
import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Button, useToast } from "@/packages/core";

export default function ToastDocPage() {
  const { toast } = useToast();
  
  // ...
  const [variant, setVariant] = useState<"success" | "warning" | "error" | "info">("info");
  const [duration, setDuration] = useState(4000);
  const [showDescription, setShowDescription] = useState(true);
  const [showAction, setShowAction] = useState(true);

  const handleTrigger = () => {
    toast({
      title: "Settings updated",
      description: showDescription ? "Your profile changes have been saved." : undefined,
      variant,
      duration,
      action: showAction ? { label: "Undo", onClick: () => alert("Undo clicked!") } : undefined
    });
  };

  return (
    <ComponentDocTemplate
      name="Toast"
      category="Feedback"
      description="Temporary notification messages that stack in the bottom-right corner. Auto-dismiss with a progress indicator. Triggered via the useToast hook from anywhere in the app."
    >
      {/* PREVIEW */}
      <h3 id="preview" className="doc-section-label">PREVIEW</h3>
      <div className="doc-preview-stage">
        <Button variant="primary" onClick={handleTrigger}>
          Trigger Toast Notification
        </Button>
      </div>

      {/* PLAYGROUND */}
      <h3 id="playground" className="doc-section-label">PLAYGROUND</h3>
      <div className="doc-playground-panel">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Variant</label>
            <select style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }} value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Duration (ms, 0=infinite)</label>
            <input 
              type="number" 
              value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))}
              style={{ width: "100%", padding: 8, background: "var(--mark-bg)", color: "var(--mark-fg)", border: "1px solid var(--mark-border-strong)", borderRadius: 4 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--mark-fg)", opacity: 0.6 }}>Options</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showDescription} onChange={(e) => setShowDescription(e.target.checked)} /> show description</label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--mark-fg)", fontSize: 14 }}><input type="checkbox" checked={showAction} onChange={(e) => setShowAction(e.target.checked)} /> show action</label>
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyItems: "flex-start", marginBottom: 48 }}>
        <Button variant="ghost" onClick={() => toast({ title: "Info variant", variant: "info" })}>Info</Button>
        <Button variant="ghost" onClick={() => toast({ title: "Success variant", variant: "success" })}>Success</Button>
        <Button variant="ghost" onClick={() => toast({ title: "Error variant", variant: "error" })}>Error</Button>
        <Button variant="ghost" onClick={() => toast({ title: "Action", action: { label: "Undo", onClick: ()=>{} } })}>With Action</Button>
        <Button variant="ghost" onClick={() => toast({ title: "Persistent", duration: 0 })}>Persistent (0s)</Button>
        <Button variant="secondary" onClick={() => {
          toast({ title: "Toast 1", variant: "info" });
          setTimeout(() => toast({ title: "Toast 2", variant: "success" }), 200);
          setTimeout(() => toast({ title: "Toast 3", variant: "warning" }), 400);
        }}>Stack Multiple</Button>
      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Use Toast for feedback on actions the user just performed — save, delete, copy.</li>
            <li>Use the action prop for undoable actions — "Undo" is the most common action.</li>
            <li>Set duration to 0 for important messages that require manual dismissal.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Toast for errors that need immediate attention — use Alert instead.</li>
            <li>Don&apos;t trigger multiple Toasts in rapid succession for the same action.</li>
            <li>Don&apos;t put long content in a Toast — keep title under 6 words.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>role="alert"</code> with <code>aria-live="polite"</code> for success/info, <code>aria-live="assertive"</code> for error.</li>
        <li><strong>Dismiss:</strong> <code>aria-label="Close notification"</code>.</li>
        <li><strong>Focus:</strong> Toast does not steal focus from the current interaction.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">HOOK API & PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Method / Option</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>toast(options)</code></td><td><code>Returns id string</code></td><td>—</td><td>Triggers a toast message</td></tr>
            <tr><td><code>dismiss(id)</code></td><td><code>void</code></td><td>—</td><td>Dismisses toast by id</td></tr>
            <tr><td><code>dismissAll()</code></td><td><code>void</code></td><td>—</td><td>Dismisses all toasts</td></tr>
            <tr><td colSpan={4} style={{ background: "var(--mark-bg-elevated)", fontWeight: "bold" }}>Options Object</td></tr>
            <tr><td><code>title*</code></td><td><code>string</code></td><td>—</td><td>Toast heading</td></tr>
            <tr><td><code>description</code></td><td><code>string</code></td><td>—</td><td>Body text below title</td></tr>
            <tr><td><code>variant</code></td><td><code>string</code></td><td><code>'info'</code></td><td>Visual style</td></tr>
            <tr><td><code>duration</code></td><td><code>number</code></td><td><code>4000</code></td><td>Auto-dismiss in ms (0 = never)</td></tr>
            <tr><td><code>action</code></td><td><code>{`{ label: string, onClick: () => void }`}</code></td><td>—</td><td>Optional action button</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>{`import { useToast, ToastProvider } from '@markui/core'

export default function App() {
  return (
    <ToastProvider> {/* Mount once near root */}
      <MyComponent />
    </ToastProvider>
  )
}`}</code></pre>
      </div>
    </ComponentDocTemplate>
  );
}