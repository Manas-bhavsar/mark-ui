'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './Modal.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

// Size variant styles
const SIZE_STYLES = {
  sm: {
    maxWidth: '28rem', // 448px
    width: '90vw',
  },
  md: {
    maxWidth: '32rem', // 512px
    width: '90vw',
  },
  lg: {
    maxWidth: '42rem', // 672px
    width: '90vw',
  },
  xl: {
    maxWidth: '56rem', // 896px
    width: '90vw',
  },
  full: {
    maxWidth: '95vw',
    width: '95vw',
    maxHeight: '95vh',
  },
}

// Focus trap utility
const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function Modal({
  open,
  onClose,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  children,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const { triggerAnimation } = useFunAnimation()

  // Store the previously focused element
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Focus trap implementation
  useEffect(() => {
    if (!open || !modalRef.current) return

    const modal = modalRef.current
    const focusableElements = modal.querySelectorAll(FOCUSABLE_SELECTOR) as NodeListOf<HTMLElement>
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    // Focus the first focusable element or the modal itself
    const focusTarget = firstFocusable || modal
    // Small delay to ensure modal is rendered
    setTimeout(() => {
      focusTarget.focus()
    }, 10)

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (focusableElements.length === 0) {
        e.preventDefault()
        return
      }

      if (focusableElements.length === 1) {
        e.preventDefault()
        return
      }

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTabKey)
    return () => modal.removeEventListener('keydown', handleTabKey)
  }, [open])

  // Escape key handler
  useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, closeOnEscape, onClose])

  // Restore focus when modal closes
  useEffect(() => {
    if (!open && previousActiveElement.current) {
      // Small delay to ensure modal is fully closed
      setTimeout(() => {
        if (previousActiveElement.current && document.contains(previousActiveElement.current)) {
          previousActiveElement.current.focus()
        }
        previousActiveElement.current = null
      }, 10)
    }
  }, [open])

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === backdropRef.current) {
      onClose()
    }
  }, [closeOnBackdrop, onClose])

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: -20,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
      }
    },
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const variants = prefersReducedMotion ? reducedMotionVariants : modalVariants

  if (!open) return null

  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--mark-bg-overlay, rgba(0, 0, 0, 0.5))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 'var(--mark-z-modal, 1000)',
            padding: 'var(--mark-space-4)',
          }}
        >
          <motion.div
            ref={modalRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className={className}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            style={{
              backgroundColor: 'var(--mark-bg)',
              borderRadius: 'var(--mark-radius-lg)',
              border: '1px solid var(--mark-border)',
              boxShadow: 'var(--mark-shadow-xl)',
              maxHeight: '90vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              outline: 'none',
              ...SIZE_STYLES[size],
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Render in portal for proper z-index layering
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null
}

// Compound components - full implementations
export function ModalHeader({ title, showClose = true, onClose, children }: ModalHeaderProps) {
  return (
    <div
      style={{
        padding: 'var(--mark-px-lg)',
        borderBottom: '1px solid var(--mark-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <div style={{ flex: 1 }}>
        {title && (
          <h2
            style={{
              margin: 0,
              fontSize: 'var(--mark-text-lg)',
              fontWeight: 'var(--mark-weight-semibold)',
              color: 'var(--mark-fg)',
              lineHeight: 1.5,
            }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
      {showClose && onClose && (
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'var(--mark-text-xl)',
            color: 'var(--mark-fg-muted)',
            padding: 'var(--mark-space-1)',
            borderRadius: 'var(--mark-radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2rem',
            height: '2rem',
            marginLeft: 'var(--mark-space-2)',
            transition: 'all var(--mark-duration-fast) var(--mark-ease-out)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--mark-bg-subtle)'
            e.currentTarget.style.color = 'var(--mark-fg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = 'var(--mark-fg-muted)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid var(--mark-border-focus)'
            e.currentTarget.style.outlineOffset = '2px'
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none'
          }}
        >
          ×
        </button>
      )}
    </div>
  )
}

export function ModalBody({ children, padding = 'md' }: ModalBodyProps) {
  const paddingMap = {
    none: '0',
    sm: 'var(--mark-px-sm)',
    md: 'var(--mark-px-md)',
    lg: 'var(--mark-px-lg)',
  }

  return (
    <div
      style={{
        padding: paddingMap[padding],
        flex: 1,
        overflow: 'auto',
        color: 'var(--mark-fg)',
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  )
}

export function ModalFooter({ children, align = 'right' }: ModalFooterProps) {
  const justifyContentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  return (
    <div
      style={{
        padding: 'var(--mark-px-lg)',
        borderTop: '1px solid var(--mark-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: justifyContentMap[align],
        gap: 'var(--mark-space-2)',
        flexShrink: 0,
        backgroundColor: 'var(--mark-bg-subtle)',
      }}
    >
      {children}
    </div>
  )
}