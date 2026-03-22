'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { TooltipProps } from './Tooltip.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

interface Position {
  top: number
  left: number
}

interface TooltipDimensions {
  width: number
  height: number
}

export default function Tooltip({
  content,
  children,
  placement = 'top',
  showDelay = 500,
  hideDelay = 200,
  disabled = false,
  className = '',
}: TooltipProps) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 })
  const [mounted, setMounted] = useState(false)
  const showTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const { triggerAnimation } = useFunAnimation()

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true)
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

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
    let actualPlacement = placement

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
        actualPlacement = 'bottom'
      } else {
        top = scrollY + gap
      }
    } else if (top + tooltipRect.height > scrollY + viewportHeight) {
      // If tooltip would go below viewport, place it above the trigger
      if (placement === 'bottom') {
        top = triggerRect.top + scrollY - tooltipRect.height - gap
        actualPlacement = 'top'
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
    if (disabled) return
    
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
  }, [disabled, showDelay, updatePosition])

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

  const tooltipContent = mounted && isVisible && (
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
          zIndex: 'var(--mark-z-tooltip, 1000)',
          maxWidth: '320px',
          padding: 'var(--mark-space-2, 8px) var(--mark-space-3, 12px)',
          backgroundColor: 'var(--mark-bg-tooltip, var(--mark-bg-inverse, #1a1a1a))',
          color: 'var(--mark-fg-tooltip, var(--mark-fg-inverse, #ffffff))',
          fontSize: 'var(--mark-text-sm, 14px)',
          lineHeight: 'var(--mark-leading-tight, 1.25)',
          borderRadius: 'var(--mark-radius-md, 6px)',
          boxShadow: 'var(--mark-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))',
          border: '1px solid var(--mark-border-tooltip, var(--mark-border-subtle, rgba(255, 255, 255, 0.1)))',
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
      {mounted && typeof document !== 'undefined' && createPortal(
        tooltipContent,
        document.body
      )}
    </>
  )
}