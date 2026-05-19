'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AlertProps } from './Alert.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const VARIANT_STYLES = {
  info: {
    bg: 'var(--mark-color-info-subtle)',
    borderColor: 'var(--mark-color-info)',
    iconColor: 'var(--mark-color-info)',
    defaultIcon: 'ℹ',
  },
  success: {
    bg: 'var(--mark-color-success-subtle)',
    borderColor: 'var(--mark-color-success)',
    iconColor: 'var(--mark-color-success)',
    defaultIcon: '✓',
  },
  warning: {
    bg: 'var(--mark-color-warning-subtle)',
    borderColor: 'var(--mark-color-warning)',
    iconColor: 'var(--mark-color-warning)',
    defaultIcon: '⚠',
  },
  error: {
    bg: 'var(--mark-color-error-subtle)',
    borderColor: 'var(--mark-color-error)',
    iconColor: 'var(--mark-color-error)',
    defaultIcon: '✕',
  },
  accent: {
    bg: 'var(--mark-accent-subtle)',
    borderColor: 'var(--mark-accent-primary)',
    iconColor: 'var(--mark-accent-primary)',
    defaultIcon: '★',
  },
} as const

export default function Alert({
  variant = 'info',
  title,
  isDismissible = false,
  onDismiss,
  icon,
  showIcon = true,
  children,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  const alertRef = useRef<HTMLDivElement>(null)
  const v = VARIANT_STYLES[variant]
  const { triggerAnimation } = useFunAnimation()

  const handleDismiss = () => {
    triggerAnimation({ trigger: 'dismiss', originRef: alertRef })
    // Add small delay to allow animation to play before layout collapse
    setTimeout(() => {
      setVisible(false)
      onDismiss?.()
    }, 400) // approx duration of dismiss animations
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={alertRef}
          className={className}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.24,
            ease: [0.25, 0, 0, 1], // mark-ease-snappy
          }}
          style={{
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: v.bg,
              borderLeft: `3px solid ${v.borderColor}`,
              borderRadius: 'var(--mark-radius-md)',
              padding: 'var(--mark-space-4)',
              position: 'relative',
            }}
          >
            {/* Icon */}
            {showIcon && (
              <span
                style={{
                  fontSize: '20px',
                  flexShrink: 0,
                  color: v.iconColor,
                  lineHeight: 1,
                }}
              >
                {icon ?? v.defaultIcon}
              </span>
            )}

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {title && (
                <div
                  style={{
                    fontFamily: 'var(--mark-font-display)',
                    fontWeight: 600,
                    fontSize: 'var(--mark-text-sm)',
                    color: v.iconColor,
                    marginBottom: '4px',
                  }}
                >
                  {title}
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: 'var(--mark-text-sm)',
                  color: 'var(--mark-fg-muted)',
                  lineHeight: 'var(--mark-leading-normal)',
                }}
              >
                {children}
              </div>
            </div>

            {/* Dismiss button */}
            {isDismissible && (
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--mark-fg-subtle)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: 1,
                  display: 'flex',
                  padding: '2px',
                  transition: `color var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--mark-fg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--mark-fg-subtle)'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
