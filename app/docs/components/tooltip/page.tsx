'use client'

import { motion } from 'framer-motion'
import { Tooltip, Button } from '@/packages/core'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>
      {children}
    </motion.div>
  )
}

function ShowcaseRow({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>{children}</div>
}

function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--mark-fg-muted)', fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, type, def, desc]) => (
            <tr key={prop} style={{ borderBottom: '1px solid var(--mark-border)' }}>
              <td style={{ padding: '8px 12px', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-code)' }}>{prop}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg-muted)', fontFamily: 'var(--mark-font-code)' }}>{type}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg-subtle)', fontFamily: 'var(--mark-font-code)' }}>{def}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg)' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TooltipDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Tooltip</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>
            Contextual help and information on hover or focus. Smart positioning with viewport collision detection.
          </p>
        </motion.div>

        {/* Basic usage */}
        <Section label="Basic Usage">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Hover over or focus the button to see the tooltip
            </p>
            <Tooltip content="This is a helpful tooltip message">
              <Button variant="primary">Hover me</Button>
            </Tooltip>
          </div>
        </Section>

        {/* All placements */}
        <Section label="All Placements">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Tooltips can be positioned on all four sides
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', alignItems: 'center', justifyItems: 'center', maxWidth: '400px', margin: '0 auto' }}>
              <div></div>
              <Tooltip content="Top tooltip" placement="top">
                <Button variant="secondary" size="sm">Top</Button>
              </Tooltip>
              <div></div>
              
              <Tooltip content="Left tooltip" placement="left">
                <Button variant="secondary" size="sm">Left</Button>
              </Tooltip>
              <div></div>
              <Tooltip content="Right tooltip" placement="right">
                <Button variant="secondary" size="sm">Right</Button>
              </Tooltip>
              
              <div></div>
              <Tooltip content="Bottom tooltip" placement="bottom">
                <Button variant="secondary" size="sm">Bottom</Button>
              </Tooltip>
              <div></div>
            </div>
          </div>
        </Section>

        {/* Rich content */}
        <Section label="Rich Content">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Tooltips support rich content, not just plain text
            </p>
            <ShowcaseRow>
              <Tooltip 
                content={
                  <div>
                    <strong>Rich Tooltip</strong>
                    <br />
                    <span style={{ opacity: 0.8 }}>With multiple lines and formatting</span>
                  </div>
                }
              >
                <Button variant="primary">Rich Content</Button>
              </Tooltip>
              
              <Tooltip 
                content={
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>Keyboard Shortcuts</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>
                      <div>⌘ + S - Save</div>
                      <div>⌘ + Z - Undo</div>
                      <div>⌘ + Y - Redo</div>
                    </div>
                  </div>
                }
                placement="bottom"
              >
                <Button variant="ghost">Shortcuts</Button>
              </Tooltip>
            </ShowcaseRow>
          </div>
        </Section>

        {/* Custom delays */}
        <Section label="Custom Delays">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Configure show and hide delays for different use cases
            </p>
            <ShowcaseRow>
              <Tooltip content="Instant tooltip" showDelay={0} hideDelay={0}>
                <Button variant="secondary">Instant</Button>
              </Tooltip>
              
              <Tooltip content="Quick tooltip" showDelay={200} hideDelay={100}>
                <Button variant="secondary">Quick</Button>
              </Tooltip>
              
              <Tooltip content="Slow tooltip" showDelay={1000} hideDelay={500}>
                <Button variant="secondary">Slow</Button>
              </Tooltip>
            </ShowcaseRow>
          </div>
        </Section>

        {/* Disabled state */}
        <Section label="Disabled State">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Tooltips can be disabled when not needed
            </p>
            <ShowcaseRow>
              <Tooltip content="This tooltip is enabled">
                <Button variant="primary">Enabled Tooltip</Button>
              </Tooltip>
              
              <Tooltip content="This tooltip is disabled" disabled>
                <Button variant="secondary">Disabled Tooltip</Button>
              </Tooltip>
            </ShowcaseRow>
          </div>
        </Section>

        {/* Keyboard accessibility */}
        <Section label="Keyboard Accessibility">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '24px' }}>
              Tooltips work with keyboard navigation and focus
            </p>
            <ShowcaseRow>
              <Tooltip content="Focus me with Tab key">
                <button style={{ 
                  padding: '8px 16px', 
                  background: 'var(--mark-bg-elevated)', 
                  border: '1px solid var(--mark-border)', 
                  borderRadius: 'var(--mark-radius-md)', 
                  color: 'var(--mark-fg)',
                  cursor: 'pointer'
                }}>
                  Focusable Element
                </button>
              </Tooltip>
              
              <Tooltip content="Links work too" placement="bottom">
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  style={{ 
                    color: 'var(--mark-accent-primary)', 
                    textDecoration: 'underline',
                    padding: '8px'
                  }}
                >
                  Focusable Link
                </a>
              </Tooltip>
            </ShowcaseRow>
          </div>
        </Section>

        {/* Viewport collision */}
        <Section label="Viewport Collision Detection">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '24px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '16px', textAlign: 'center' }}>
              Try these tooltips near the edges of your browser window
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tooltip content="This tooltip will adjust its position to stay visible" placement="left">
                <Button variant="ghost" size="sm">Left Edge</Button>
              </Tooltip>
              
              <Tooltip content="Smart positioning keeps tooltips in view" placement="top">
                <Button variant="ghost" size="sm">Center</Button>
              </Tooltip>
              
              <Tooltip content="Automatic collision detection prevents overflow" placement="right">
                <Button variant="ghost" size="sm">Right Edge</Button>
              </Tooltip>
            </div>
          </div>
        </Section>

        {/* Props table */}
        <Section label="Props">
          <PropsTable rows={[
            ['content', 'ReactNode', '—', 'Tooltip content (text or JSX)'],
            ['children', 'ReactNode', '—', 'Trigger element'],
            ['placement', "'top' | 'bottom' | 'left' | 'right'", "'top'", 'Preferred positioning'],
            ['showDelay', 'number', '500', 'Show delay in milliseconds'],
            ['hideDelay', 'number', '200', 'Hide delay in milliseconds'],
            ['disabled', 'boolean', 'false', 'Disable tooltip'],
            ['className', 'string', "''", 'Additional CSS class'],
          ]} />
        </Section>

        {/* Features */}
        <Section label="Features">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Smart Positioning</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Automatically adjusts position to stay within viewport bounds
              </p>
            </div>
            
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Keyboard Support</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Shows on focus for keyboard navigation accessibility
              </p>
            </div>
            
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Portal Rendering</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Renders in document.body for proper z-index layering
              </p>
            </div>
            
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Rich Content</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Supports any React content, not just plain text
              </p>
            </div>
            
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Configurable Delays</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Customizable show and hide delays for optimal UX
              </p>
            </div>
            
            <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px' }}>
              <h3 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-md)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '8px' }}>Reduced Motion</h3>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Respects prefers-reduced-motion settings
              </p>
            </div>
          </div>
        </Section>

        {/* Animation details */}
        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Show: opacity(0→1) + scale(0.95→1) · duration: 0.15s · ease: easeOut</p>
            <p style={{ margin: '0 0 8px' }}>Hide: opacity(1→0) + scale(1→0.95) · duration: 0.15s · ease: easeOut</p>
            <p style={{ margin: 0 }}>Reduced motion: opacity-only transitions with 0s duration</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}