'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { BadgeProps } from './Badge.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const VARIANT_STYLES = {
  default: {
    bg: 'var(--mark-bg-elevated)',
    color: 'var(--mark-fg)',
    border: '1px solid var(--mark-border-strong)',
    dotColor: 'var(--mark-fg)',
  },
  success: {
    bg: 'var(--mark-color-success-subtle)',
    color: 'var(--mark-color-success)',
    border: '1px solid color-mix(in srgb, var(--mark-color-success) 25%, transparent)',
    dotColor: 'var(--mark-color-success)',
  },
  warning: {
    bg: 'var(--mark-color-warning-subtle)',
    color: 'var(--mark-color-warning)',
    border: '1px solid color-mix(in srgb, var(--mark-color-warning) 25%, transparent)',
    dotColor: 'var(--mark-color-warning)',
  },
  error: {
    bg: 'var(--mark-color-error-subtle)',
    color: 'var(--mark-color-error)',
    border: '1px solid color-mix(in srgb, var(--mark-color-error) 25%, transparent)',
    dotColor: 'var(--mark-color-error)',
  },
  info: {
    bg: 'var(--mark-color-info-subtle)',
    color: 'var(--mark-color-info)',
    border: '1px solid color-mix(in srgb, var(--mark-color-info) 25%, transparent)',
    dotColor: 'var(--mark-color-info)',
  },
  accent: {
    bg: 'var(--mark-accent-subtle)',
    color: 'var(--mark-accent-primary)',
    border: '1px solid color-mix(in srgb, var(--mark-accent-primary) 25%, transparent)',
    dotColor: 'var(--mark-accent-primary)',
  },
} as const

const SIZE_STYLES = {
  sm: {
    fontSize: 'var(--mark-text-xs)',
    padding: '2px 6px',
    dotSize: 6,
  },
  md: {
    fontSize: 'var(--mark-text-sm)',
    padding: '4px 10px',
    dotSize: 7,
  },
} as const

export default function Badge({
  variant = 'default',
  size = 'md',
  showDot = false,
  children,
  className = '',
}: BadgeProps) {
  const v = VARIANT_STYLES[variant]
  const s = SIZE_STYLES[size]
  const badgeRef = useRef<HTMLSpanElement>(null)
  const { triggerAnimation } = useFunAnimation()

  const handleAnimationStart = () => {
    triggerAnimation({ trigger: 'mount', originRef: badgeRef })
  }

  return (
    <motion.span
      ref={badgeRef}
      className={className}
      onAnimationStart={handleAnimationStart}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.12,
        ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--mark-font-display)',
        fontWeight: 600,
        fontSize: s.fontSize,
        padding: s.padding,
        borderRadius: 'var(--mark-radius-pill)',
        background: v.bg,
        color: v.color,
        border: v.border,
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {showDot && (
        <motion.span
          animate={{ scale: [1, 1.4, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: s.dotSize,
            height: s.dotSize,
            borderRadius: '50%',
            backgroundColor: v.dotColor,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </motion.span>
  )
}
