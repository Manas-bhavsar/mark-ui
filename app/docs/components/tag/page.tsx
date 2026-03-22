'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tag } from '@/packages/core'

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
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>{children}</div>
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

export default function TagDoc() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Design System'])

  const removeTag = (index: number) => {
    setTags(tags => tags.filter((_, i) => i !== index))
  }

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags(tags => [...tags, tag])
    }
  }

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Tag</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>
            Small status and label indicators for categories, metadata, and removable items. Crisp and readable at small sizes.
          </p>
        </motion.div>

        {/* All variants */}
        <Section label="All Variants">
          <ShowcaseRow>
            <Tag variant="default">Default</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="accent">Accent</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="danger">Danger</Tag>
          </ShowcaseRow>
        </Section>

        {/* All sizes */}
        <Section label="All Sizes">
          {(['xs', 'sm', 'md'] as const).map(size => (
            <div key={size} style={{ marginBottom: '16px' }}>
              <p style={{ fontFamily: 'var(--mark-font-code)', fontSize: '12px', color: 'var(--mark-fg-subtle)', marginBottom: '8px' }}>{size}</p>
              <ShowcaseRow>
                <Tag size={size} variant="default">Default</Tag>
                <Tag size={size} variant="primary">Primary</Tag>
                <Tag size={size} variant="accent">Accent</Tag>
                <Tag size={size} variant="success">Success</Tag>
              </ShowcaseRow>
            </div>
          ))}
        </Section>

        {/* Removable tags */}
        <Section label="Removable Tags">
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '12px' }}>
              Click the × button or use Delete/Backspace keys when focused
            </p>
            <ShowcaseRow>
              {tags.map((tag, index) => (
                <Tag 
                  key={tag} 
                  variant="primary" 
                  removable 
                  onRemove={() => removeTag(index)}
                >
                  {tag}
                </Tag>
              ))}
            </ShowcaseRow>
            {tags.length === 0 && (
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', fontStyle: 'italic' }}>
                All tags removed! 
                <button 
                  onClick={() => setTags(['React', 'TypeScript', 'Design System'])}
                  style={{ marginLeft: '8px', background: 'none', border: 'none', color: 'var(--mark-accent-primary)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Reset
                </button>
              </p>
            )}
          </div>
        </Section>

        {/* Status tags */}
        <Section label="Status Tags">
          <ShowcaseRow>
            <Tag variant="success">Active</Tag>
            <Tag variant="warning">Pending</Tag>
            <Tag variant="danger">Error</Tag>
            <Tag variant="default">Draft</Tag>
          </ShowcaseRow>
        </Section>

        {/* Category tags */}
        <Section label="Category Tags">
          <ShowcaseRow>
            <Tag variant="accent" size="sm">Frontend</Tag>
            <Tag variant="accent" size="sm">Backend</Tag>
            <Tag variant="accent" size="sm">DevOps</Tag>
            <Tag variant="accent" size="sm">Design</Tag>
            <Tag variant="accent" size="sm">Mobile</Tag>
          </ShowcaseRow>
        </Section>

        {/* Disabled state */}
        <Section label="Disabled State">
          <ShowcaseRow>
            <Tag variant="primary" disabled>Disabled</Tag>
            <Tag variant="success" disabled removable>Disabled Removable</Tag>
            <Tag variant="accent" disabled>Cannot Interact</Tag>
          </ShowcaseRow>
        </Section>

        {/* Interactive demo */}
        <Section label="Interactive Demo">
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '12px' }}>
              Add and remove tags dynamically
            </p>
            <div style={{ marginBottom: '12px' }}>
              <ShowcaseRow>
                <button 
                  onClick={() => addTag('JavaScript')}
                  style={{ padding: '4px 8px', fontSize: '12px', background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-sm)', cursor: 'pointer', color: 'var(--mark-fg)' }}
                >
                  + JavaScript
                </button>
                <button 
                  onClick={() => addTag('CSS')}
                  style={{ padding: '4px 8px', fontSize: '12px', background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-sm)', cursor: 'pointer', color: 'var(--mark-fg)' }}
                >
                  + CSS
                </button>
                <button 
                  onClick={() => addTag('HTML')}
                  style={{ padding: '4px 8px', fontSize: '12px', background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-sm)', cursor: 'pointer', color: 'var(--mark-fg)' }}
                >
                  + HTML
                </button>
              </ShowcaseRow>
            </div>
            <ShowcaseRow>
              {tags.map((tag, index) => (
                <Tag 
                  key={tag} 
                  variant="accent" 
                  removable 
                  onRemove={() => removeTag(index)}
                >
                  {tag}
                </Tag>
              ))}
            </ShowcaseRow>
          </div>
        </Section>

        {/* Props table */}
        <Section label="Props">
          <PropsTable rows={[
            ['children', 'ReactNode', '—', 'Tag content'],
            ['variant', "'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger'", "'default'", 'Visual style variant'],
            ['size', "'xs' | 'sm' | 'md'", "'md'", 'Tag size'],
            ['removable', 'boolean', 'false', 'Show close button for removal'],
            ['onRemove', '() => void', '—', 'Called when tag is removed'],
            ['disabled', 'boolean', 'false', 'Disable interactions'],
            ['className', 'string', "''", 'Additional CSS class'],
          ]} />
        </Section>

        {/* Keyboard navigation */}
        <Section label="Keyboard Navigation">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Tab: Focus removable tags</p>
            <p style={{ margin: '0 0 8px' }}>Delete/Backspace: Remove focused tag</p>
            <p style={{ margin: 0 }}>Mouse: Click × button to remove</p>
          </div>
        </Section>

        {/* Animation details */}
        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Hover: scale(1.02) · duration: 0.12s · ease: bounce</p>
            <p style={{ margin: '0 0 8px' }}>Click: scale(0.98) · duration: 0.12s · ease: bounce</p>
            <p style={{ margin: 0 }}>Remove: Fun animation trigger on dismiss</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}