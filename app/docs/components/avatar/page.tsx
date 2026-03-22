'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Avatar } from '@/packages/core'

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

export default function AvatarDoc() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Avatar</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>
            User profile image or initials display with automatic fallback, consistent color generation, and status indicators.
          </p>
        </motion.div>

        {/* All sizes */}
        <Section label="All Sizes">
          <ShowcaseRow>
            <Avatar size="xs" initials="XS" />
            <Avatar size="sm" initials="SM" />
            <Avatar size="md" initials="MD" />
            <Avatar size="lg" initials="LG" />
            <Avatar size="xl" initials="XL" />
          </ShowcaseRow>
        </Section>

        {/* Shape variants */}
        <Section label="Shape Variants">
          <ShowcaseRow>
            <Avatar shape="circle" initials="JD" />
            <Avatar shape="square" initials="JD" />
          </ShowcaseRow>
        </Section>

        {/* With images */}
        <Section label="With Images">
          <ShowcaseRow>
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
              alt="John Doe" 
              size="md" 
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
              alt="Jane Smith" 
              size="md" 
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Mike Johnson" 
              size="md" 
            />
          </ShowcaseRow>
        </Section>

        {/* Image fallback */}
        <Section label="Image Fallback">
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '12px' }}>
              When image fails to load, automatically falls back to initials
            </p>
            <ShowcaseRow>
              <Avatar src="invalid-url.jpg" alt="John Doe" />
              <Avatar src="invalid-url.jpg" initials="JS" alt="Jane Smith" />
              <Avatar src="invalid-url.jpg" initials="MJ" alt="Mike Johnson" />
            </ShowcaseRow>
          </div>
        </Section>

        {/* Status indicators */}
        <Section label="Status Indicators">
          <ShowcaseRow>
            <Avatar initials="ON" status="online" />
            <Avatar initials="AW" status="away" />
            <Avatar initials="BY" status="busy" />
            <Avatar initials="OF" status="offline" />
          </ShowcaseRow>
        </Section>

        {/* Color consistency */}
        <Section label="Color Consistency">
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '12px' }}>
              Same initials generate consistent colors across renders
            </p>
            <ShowcaseRow>
              <Avatar initials="AB" />
              <Avatar initials="AB" />
              <Avatar initials="CD" />
              <Avatar initials="CD" />
              <Avatar initials="EF" />
              <Avatar initials="EF" />
            </ShowcaseRow>
          </div>
        </Section>

        {/* Interactive */}
        <Section label="Interactive">
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)', color: 'var(--mark-fg-muted)', marginBottom: '12px' }}>
              Clickable avatars with hover and focus states. Clicked {clickCount} times.
            </p>
            <ShowcaseRow>
              <Avatar 
                initials="CL" 
                onClick={() => setClickCount(c => c + 1)}
              />
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Clickable avatar"
                onClick={() => setClickCount(c => c + 1)}
              />
            </ShowcaseRow>
          </div>
        </Section>

        {/* Props table */}
        <Section label="Props">
          <PropsTable rows={[
            ['src', 'string', '—', 'Image source URL'],
            ['alt', 'string', '—', 'Alt text for image'],
            ['initials', 'string', '—', 'Fallback initials (auto-generated from alt if not provided)'],
            ['size', "'xs' | 'sm' | 'md' | 'lg' | 'xl'", "'md'", 'Avatar size'],
            ['shape', "'circle' | 'square'", "'circle'", 'Shape variant'],
            ['status', "'online' | 'offline' | 'away' | 'busy'", '—', 'Status indicator'],
            ['onClick', '() => void', '—', 'Click handler (makes avatar interactive)'],
            ['className', 'string', "''", 'Additional CSS class'],
          ]} />
        </Section>

        {/* Animation details */}
        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Hover (interactive): scale(1.05) · duration: 0.15s · ease: easeOut</p>
            <p style={{ margin: '0 0 8px' }}>Click: scale(0.95) · duration: 0.15s · ease: easeOut</p>
            <p style={{ margin: 0 }}>Image load: opacity transition with --mark-duration-fast</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}