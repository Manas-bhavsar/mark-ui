import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()\n\n  // Badge uses 'mount' trigger — fires automatically on render\n  // triggerAnimation({ trigger: '${trigger}' })`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { Badge } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function BadgeExample() {${animHook}
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-3)',
      alignItems: 'center',
    }}>
      {/* All variants */}
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="accent">Accent</Badge>

      {/* With pulsing dot */}
      <Badge variant="success" showDot>Live</Badge>
      <Badge variant="error" showDot>Alert</Badge>

      {/* Small size */}
      <Badge variant="accent" size="sm">v2.0</Badge>
    </div>
  )
}`
}
