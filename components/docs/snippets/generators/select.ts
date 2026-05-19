import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { useState } from 'react'
import { Select } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Select

export default function SelectExample() {
  const [value, setValue] = useState('')

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'SolidJS', disabled: true },
  ]

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
      maxWidth: 320,
    }}>
      {/* Default select */}
      <Select
        options={options}
        placeholder="Choose a framework"
        value={value}
        onChange={setValue}
        size="md"
      />

      {/* With default value */}
      <Select
        options={options}
        defaultValue="react"
        size="md"
      />

      {/* Error state */}
      <Select
        options={options}
        placeholder="Required field"
        isError
        size="md"
      />

      {/* Disabled */}
      <Select
        options={options}
        placeholder="Not available"
        isDisabled
        size="md"
      />

      {/* Small size */}
      <Select
        options={options}
        placeholder="Compact"
        size="sm"
      />
    </div>
  )
}`
}
