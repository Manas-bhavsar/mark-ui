'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { TagProps } from './Tag.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const VARIANT_STYLES = {
  default: {
    background: 'var(--mark-bg-elevated)',
    color: 'var(--mark-fg)',
    border: '1px solid var(--mark-border)',
  },
  primary: {
    background: 'var(--mark-accent-primary)',
    color: 'var(--mark-bg)',
    border: 'none',
  },
  accent: {
    background: 'var(--mark-accent-subtle)',
    color: 'var(--mark-accent-primary)',
    border: '1px solid var(--mark-accent-primary)',
  },
  success: {
    background: 'var(--mark-color-success-subtle)',
    color: 'var(--mark-color-success)',
    border: '1px solid var(--mark-color-success)',
  },
  warning: {
    background: 'var(--mark-color-warning-subtle)',
    color: 'var(--mark-color-warning)',
    border: '1px solid var(--mark-color-warning)',
  },
  danger: {
    background: 'var(--mark-color-error-subtle)',
    color: 'var(--mark-color-error)',
    border: '1px solid var(--mark-color-error)',
  },
} as const

const SIZE_STYLES = {
  xs: {
    height: '20px',
    padding: '0 6px',
    fontSize: 'var(--mark-text-xs)',
    gap: 'var(--mark-space-1)',
  },
  sm: {
    height: '24px',
    padding: '0 8px',
    fontSize: 'var(--mark-text-xs)',
    gap: 'var(--mark-space-1)',
  },
  md: {
    height: '28px',
    padding: '0 10px',
    fontSize: 'var(--mark-text-sm)',
    gap: 'var(--mark-space-2)',
  },
} as const

export default function Tag({
  children,
  variant = 'default',
  size = 'md',
  isRemovable = false,
  onRemove,
  isDisabled = false,
  className = '',
}: TagProps) {
  const tagRef = useRef<HTMLDivElement>(null)
  const { triggerAnimation } = useFunAnimation()
  const v = VARIANT_STYLES[variant]
  const s = SIZE_STYLES[size]

  const handleRemove = () => {
    if (isDisabled) return
    triggerAnimation({ trigger: 'dismiss', originRef: tagRef })
    onRemove?.()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isRemovable && !isDisabled && (e.key === 'Delete' || e.key === 'Backspace')) {
      e.preventDefault()
      handleRemove()
    }
  }

  return (
    <motion.div
      ref={tagRef}
      className={className}
      tabIndex={isRemovable && !isDisabled ? 0 : undefined}
      role={isRemovable ? 'button' : undefined}
      aria-label={isRemovable ? `Remove ${children}` : undefined}
      onKeyDown={handleKeyDown}
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      transition={{
        duration: 0.12,
        ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
      }}
      style={{
        // Layout
        display: 'inline-flex',
        alignItems: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        // Visual
        background: v.background,
        color: v.color,
        border: v.border,
        borderRadius: 'var(--mark-radius-pill)',
        // Typography
        fontFamily: 'var(--mark-font-body)',
        fontWeight: 500,
        fontSize: s.fontSize,
        lineHeight: 1,
        // Interaction
        cursor: isRemovable && !isDisabled ? 'pointer' : 'default',
        opacity: isDisabled ? 0.4 : 1,
        outline: 'none',
        // Transition for non-motion properties
        transition: `background var(--mark-duration-fast) var(--mark-ease-smooth),
                     border-color var(--mark-duration-fast) var(--mark-ease-smooth),
                     opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
      }}
      onFocus={(e) => {
        if (isRemovable && !isDisabled) {
          e.currentTarget.style.outline = '2px solid var(--mark-accent-primary)'
          e.currentTarget.style.outlineOffset = '2px'
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none'
      }}
    >
      <span>{children}</span>
      {isRemovable && (
        <button
          onClick={handleRemove}
          disabled={isDisabled}
          aria-label="Remove"
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            padding: '2px',
            margin: '0 -2px 0 2px',
            fontSize: '12px',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            transition: `background var(--mark-duration-fast) var(--mark-ease-smooth)`,
          }}
          onMouseEnter={(e) => {
            if (!isDisabled) {
              e.currentTarget.style.background = 'var(--mark-accent-subtle)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none'
          }}
        >
          ✕
        </button>
      )}
    </motion.div>
  )
}