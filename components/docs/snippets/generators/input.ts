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
    ? `\n        onFocus={() => triggerAnimation({ trigger: '${trigger}' })}`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { Input } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function InputExample() {${animHook}
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
      maxWidth: 400,
    }}>
      {/* Default input with label */}
      <Input
        label="Username"
        placeholder="Enter your username"
        size="md"${animProp}
      />

      {/* With helper text */}
      <Input
        label="Email"
        placeholder="jane@example.com"
        helperText="We'll never share your email"
        size="md"
      />

      {/* Error state */}
      <Input
        label="Password"
        placeholder="••••••••"
        isError
        errorMessage="Password must be at least 8 characters"
        size="md"
      />

      {/* Success state */}
      <Input
        label="Domain"
        placeholder="yoursite.com"
        isSuccess
        helperText="Domain is available!"
        size="md"
      />

      {/* Disabled */}
      <Input
        label="Organization"
        placeholder="Locked field"
        isDisabled
        size="md"
      />
    </div>
  )
}`
}
