import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()`
    : ''
  const animProp = isFun && trigger
    ? `\n        onClick={() => triggerAnimation({ trigger: '${trigger}' })}`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { Button } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function ButtonExample() {${animHook}
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-3)',
      alignItems: 'center',
    }}>
      {/* Primary — main call to action */}
      <Button
        variant="primary"
        size="md"${animProp}
      >
        Get Started
      </Button>

      {/* Secondary — supporting action */}
      <Button variant="secondary" size="md">
        Learn More
      </Button>

      {/* Ghost — low-emphasis action */}
      <Button variant="ghost" size="md">
        Skip
      </Button>

      {/* Destructive — irreversible action */}
      <Button variant="destructive" size="sm">
        Delete
      </Button>

      {/* Loading state — locks dimensions, shows spinner */}
      <Button variant="primary" isLoading>
        Saving...
      </Button>

      {/* Disabled state */}
      <Button variant="primary" isDisabled>
        Unavailable
      </Button>

      {/* Full width */}
      <Button variant="primary" isFullWidth>
        Full Width Action
      </Button>
    </div>
  )
}`
}
