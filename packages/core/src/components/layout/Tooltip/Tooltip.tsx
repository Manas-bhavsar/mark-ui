'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import type { TooltipProps } from './Tooltip.types'

interface Position {
  top: number
  left: number
}

const emptySubscribe = () => () => {}

export default function Tooltip({
  content,
  children,
  placement = 'top',
  showDelay = 500,
  hideDelay = 200,
  isDisabled = false,
  className = '',
}: TooltipProps) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 })
  const showTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Avoid hydration mismatch by only rendering portals on the client
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const calculatePosition = useCallback((triggerElement: HTMLElement, tooltipElement: HTMLElement): Position => {
    const triggerRect = triggerElement.getBoundingClientRect()
    const tooltipRect = tooltipElement.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    
    const gap = 8 // Gap between trigger and tooltip
    let top = 0
    let left = 0

    // Calculate initial position based on placement
    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - gap
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'bottom':
        top = triggerRect.bottom + scrollY + gap
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'left':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.left + scrollX - tooltipRect.width - gap
        break
      case 'right':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.right + scrollX + gap
        break
    }

    // Viewport collision detection and adjustment
    if (left < 0) {
      left = gap
    } else if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width - gap
    }

    if (top < scrollY) {
      // If tooltip would go above viewport, place it below the trigger
      if (placement === 'top') {
        top = triggerRect.bottom + scrollY + gap
      } else {
        top = scrollY + gap
      }
    } else if (top + tooltipRect.height > scrollY + viewportHeight) {
      // If tooltip would go below viewport, place it above the trigger
      if (placement === 'bottom') {
        top = triggerRect.top + scrollY - tooltipRect.height - gap
      } else {
        top = scrollY + viewportHeight - tooltipRect.height - gap
      }
    }

    return { top, left }
  }, [placement])

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return
    
    const newPosition = calculatePosition(triggerRef.current, tooltipRef.current)
    setPosition(newPosition)
  }, [calculatePosition])

  const showTooltip = useCallback(() => {
    if (isDisabled) return
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = undefined
    }

    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true)
      // Update position after tooltip becomes visible
      requestAnimationFrame(() => {
        updatePosition()
      })
    }, showDelay)
  }, [isDisabled, showDelay, updatePosition])

  const hideTooltip = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = undefined
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, hideDelay)
  }, [hideDelay])

  const handleMouseEnter = useCallback(() => {
    showTooltip()
  }, [showTooltip])

  const handleMouseLeave = useCallback(() => {
    hideTooltip()
  }, [hideTooltip])

  const handleFocus = useCallback(() => {
    showTooltip()
  }, [showTooltip])

  const handleBlur = useCallback(() => {
    hideTooltip()
  }, [hideTooltip])

  // Update position on scroll and resize
  useEffect(() => {
    if (!isVisible) return

    const handleScroll = () => updatePosition()
    const handleResize = () => updatePosition()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible, updatePosition])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  // Animation variants
  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: 'easeOut'
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: 'easeOut'
      }
    }
  }

  // Reduced motion variants
  const reducedMotionVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0 }
    }
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const tooltipContent = isVisible && (
    <AnimatePresence>
      <motion.div
        ref={tooltipRef}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={prefersReducedMotion ? reducedMotionVariants : tooltipVariants}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          zIndex: 1000,
          maxWidth: '320px',
          padding: 'var(--mark-space-2) var(--mark-space-3)',
          backgroundColor: 'var(--mark-bg-elevated)',
          color: 'var(--mark-fg)',
          fontSize: 'var(--mark-text-sm)',
          lineHeight: 'var(--mark-leading-tight)',
          borderRadius: 'var(--mark-radius-md)',
          boxShadow: 'var(--mark-shadow-lg)',
          border: '1px solid var(--mark-border)',
          wordWrap: 'break-word',
          pointerEvents: 'none',
        }}
        className={className}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  )

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          display: 'inline-block',
        }}
      >
        {children}
      </div>
      {isClient && createPortal(
        tooltipContent,
        document.body
      )}
    </>
  )
}
