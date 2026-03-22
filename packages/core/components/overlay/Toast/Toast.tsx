'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import type { ToastProps } from './Toast.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const VARIANT_STYLES = {
  success: {
    bg: 'rgba(34, 197, 94, 0.08)',
    borderColor: '#22C55E',
    iconColor: '#22C55E',
    defaultIcon: '✓',
  },
  error: {
    bg: 'rgba(239, 68, 68, 0.08)',
    borderColor: '#EF4444',
    iconColor: '#EF4444',
    defaultIcon: '✕',
  },
  warning: {
    bg: 'rgba(234, 179, 8, 0.08)',
    borderColor: '#EAB308',
    iconColor: '#EAB308',
    defaultIcon: '⚠',
  },
  info: {
    bg: 'rgba(59, 130, 246, 0.08)',
    borderColor: '#3B82F6',
    iconColor: '#3B82F6',
    defaultIcon: 'ℹ',
  },
} as const

export default function Toast({
  title,
  description,
  variant = 'info',
  duration = 5000,
  onDismiss,
  action,
  className = '',
}: ToastProps) {
  const [visible, setVisible] = useState(true)
  const toastRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { triggerAnimation } = useFunAnimation()
  const v = VARIANT_STYLES[variant]

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const getAnimationConfig = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 }
      }
    }
    
    return {
      initial: { 
        opacity: 0, 
        x: 300,
        scale: 0.95
      },
      animate: { 
        opacity: 1, 
        x: 0,
        scale: 1
      },
      exit: { 
        opacity: 0, 
        x: 300,
        scale: 0.95
      },
      transition: {
        duration: 0.24,
        ease: [0.25, 0, 0, 1] as const, // mark-ease-snappy
      }
    }
  }

  const animationConfig = getAnimationConfig()

  // Auto-dismiss functionality
  useEffect(() => {
    if (duration > 0) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss()
      }, duration)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [duration])

  // Keyboard dismissal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleDismiss()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleDismiss = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    triggerAnimation({ trigger: 'dismiss', originRef: toastRef })
    
    // Add small delay to allow animation to play
    setTimeout(() => {
      setVisible(false)
      onDismiss?.()
    }, 200)
  }

  const handleActionClick = () => {
    action?.onClick()
    handleDismiss()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={toastRef}
          className={className}
          role="alert"
          aria-live="polite"
          initial={animationConfig.initial}
          animate={animationConfig.animate}
          exit={animationConfig.exit}
          transition={animationConfig.transition}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            background: v.bg,
            borderLeft: `3px solid ${v.borderColor}`,
            borderRadius: 'var(--mark-radius-md)',
            padding: 'var(--mark-space-4)',
            minWidth: '300px',
            maxWidth: '400px',
            position: 'relative',
            boxShadow: 'var(--mark-shadow-lg)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Icon */}
          <span
            style={{
              fontSize: '20px',
              flexShrink: 0,
              color: v.iconColor,
              lineHeight: 1,
            }}
          >
            {v.defaultIcon}
          </span>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {title && (
              <div
                style={{
                  fontFamily: 'var(--mark-font-display)',
                  fontWeight: 600,
                  fontSize: 'var(--mark-text-sm)',
                  color: v.iconColor,
                  marginBottom: description ? '4px' : '0',
                }}
              >
                {title}
              </div>
            )}
            {description && (
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: 'var(--mark-text-sm)',
                  color: 'var(--mark-fg-muted)',
                  lineHeight: 'var(--mark-leading-normal)',
                  marginBottom: action ? 'var(--mark-space-3)' : '0',
                }}
              >
                {description}
              </div>
            )}
            
            {/* Action button */}
            {action && (
              <button
                onClick={handleActionClick}
                style={{
                  background: v.iconColor,
                  color: 'var(--mark-bg)',
                  border: 'none',
                  borderRadius: 'var(--mark-radius-sm)',
                  padding: '0 var(--mark-px-sm)',
                  height: 'var(--mark-size-sm)',
                  fontSize: 'var(--mark-text-sm)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: `opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid var(--mark-accent-primary)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none'
                }}
              >
                {action.label}
              </button>
            )}
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss notification"
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
              borderRadius: 'var(--mark-radius-sm)',
              transition: `color var(--mark-duration-fast) var(--mark-ease-smooth),
                           background var(--mark-duration-fast) var(--mark-ease-smooth)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--mark-fg)'
              e.currentTarget.style.background = 'var(--mark-bg-elevated)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--mark-fg-subtle)'
              e.currentTarget.style.background = 'none'
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid var(--mark-accent-primary)'
              e.currentTarget.style.outlineOffset = '2px'
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none'
            }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}