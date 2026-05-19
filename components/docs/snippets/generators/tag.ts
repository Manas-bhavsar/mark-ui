import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()`
    : ''
  const animCallback = isFun && trigger
    ? `\n      triggerAnimation({ trigger: '${trigger}' })`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { useState } from 'react'
import { Tag } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function TagExample() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Framer Motion'])${animHook}

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-6)',
    }}>
      {/* Static variants */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--mark-space-2)' }}>
        <Tag variant="default">Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="accent">Accent</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="danger">Danger</Tag>
      </div>

      {/* Removable tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--mark-space-2)' }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant="accent"
            isRemovable
            onRemove={() => {${animCallback}
              setTags((prev) => prev.filter((t) => t !== tag))
            }}
          >
            {tag}
          </Tag>
        ))}
      </div>

      {/* Sizes */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--mark-space-2)', alignItems: 'center' }}>
        <Tag size="xs">Extra Small</Tag>
        <Tag size="sm">Small</Tag>
        <Tag size="md">Medium</Tag>
      </div>
    </div>
  )
}`
}
