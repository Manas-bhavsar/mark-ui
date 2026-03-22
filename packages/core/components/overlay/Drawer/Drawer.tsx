'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { DrawerProps } from './Drawer.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

// Size variant styles
const SIZE_STYLES = {
  sm: {
    horizontal: '320px',
    vertical: '200px',
  },
  md: {
    horizontal: '400px',
    vertical: '300px',
  },
  lg: {
    horizontal: '500px',
    vertical: '400px',
  },
  xl: {
    horizontal: '600px',
    vertical: '500px',
  },
  full: {
    horizontal: '100vw',
    vertical: '100vh',
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

export default function Drawer({
  open,
  onClose,
  placement = 'right',
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  children,
  className = '',
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const { triggerAnimation } = useFunAnimation()

  const isHorizontal = placement === 'left' || placement === 'right'

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
    if (!open || !drawerRef.current) return

    const drawer = drawerRef.current
    const focusableElements = drawer.querySelectorAll(FOCUSABLE_SELECTOR) as NodeListOf<HTMLElement>
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    // Focus the first focusable element or the drawer itself
    const focusTarget = firstFocusable || drawer
    // Small delay to ensure drawer is rendered
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

    drawer.addEventListener('keydown', handleTabKey)
    return () => drawer.removeEventListener('keydown', handleTabKey)
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

  // Restore focus when drawer closes
  useEffect(() => {
    if (!open && previousActiveElement.current) {
      // Small delay to ensure drawer is fully closed
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

  // Animation variants for backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // Animation variants for drawer based on placement
  const getDrawerVariants = () => {
    const slideDistance = '100%'
    
    const variants = {
      left: {
        hidden: { x: `-${slideDistance}` },
        visible: { x: 0 },
        exit: { x: `-${slideDistance}` },
      },
      right: {
        hidden: { x: slideDistance },
        visible: { x: 0 },
        exit: { x: slideDistance },
      },
      top: {
        hidden: { y: `-${slideDistance}` },
        visible: { y: 0 },
        exit: { y: `-${slideDistance}` },
      },
      bottom: {
        hidden: { y: slideDistance },
        visible: { y: 0 },
        exit: { y: slideDistance },
      },
    }

    return variants[placement]
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const drawerVariants = prefersReducedMotion ? reducedMotionVariants : getDrawerVariants()

  // Get drawer positioning styles
  const getDrawerStyles = () => {
    const sizeValue = SIZE_STYLES[size][isHorizontal ? 'horizontal' : 'vertical']
    
    const baseStyles = {
      position: 'absolute' as const,
      backgroundColor: 'var(--mark-bg)',
      border: '1px solid var(--mark-border)',
      boxShadow: 'var(--mark-shadow-xl)',
      overflow: 'auto',
      outline: 'none',
    }

    const placementStyles = {
      left: {
        top: 0,
        bottom: 0,
        left: 0,
        width: sizeValue,
        borderRadius: '0 var(--mark-radius-lg) var(--mark-radius-lg) 0',
      },
      right: {
        top: 0,
        bottom: 0,
        right: 0,
        width: sizeValue,
        borderRadius: 'var(--mark-radius-lg) 0 0 var(--mark-radius-lg)',
      },
      top: {
        top: 0,
        left: 0,
        right: 0,
        height: sizeValue,
        borderRadius: '0 0 var(--mark-radius-lg) var(--mark-radius-lg)',
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        height: sizeValue,
        borderRadius: 'var(--mark-radius-lg) var(--mark-radius-lg) 0 0',
      },
    }

    return {
      ...baseStyles,
      ...placementStyles[placement],
    }
  }

  if (!open) return null

  const drawerContent = (
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
            zIndex: 'var(--mark-z-drawer, 1000)',
          }}
        >
          <motion.div
            ref={drawerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: prefersReducedMotion ? 0 : undefined,
            }}
            className={className}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            style={getDrawerStyles()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Render in portal for proper z-index layering
  return typeof window !== 'undefined' ? createPortal(drawerContent, document.body) : null
}