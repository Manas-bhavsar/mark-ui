'use client'

import { motion, type Variants } from 'framer-motion'
import { useRef, useMemo } from 'react'
import type { SkeletonProps } from './Skeleton.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

// Shape variant styles
const SHAPE_STYLES = {
  text: {
    borderRadius: 'var(--mark-radius-sm)',
    height: '1em',
  },
  circle: {
    borderRadius: '50%',
    aspectRatio: '1',
  },
  rectangle: {
    borderRadius: 'var(--mark-radius-md)',
  },
} as const

// Animation variants for Framer Motion
const ANIMATION_VARIANTS: Record<string, Variants> = {
  pulse: {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }
    },
  },
  wave: {
    initial: { 
      backgroundPosition: '-200px 0',
    },
    animate: {
      backgroundPosition: 'calc(200px + 100%) 0',
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: 'linear',
      }
    },
  },
  none: {
    initial: { opacity: 0.6 },
    animate: { opacity: 0.6 },
  },
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  lines = 1,
  animation = 'pulse',
  className = '',
}: SkeletonProps) {
  const skeletonRef = useRef<HTMLDivElement>(null)
  const { triggerAnimation } = useFunAnimation()

  // Calculate dimensions based on variant and props
  const dimensions = useMemo(() => {
    const getWidth = () => {
      if (width) return typeof width === 'number' ? `${width}px` : width
      if (variant === 'circle') return 'var(--mark-size-md)'
      return '100%'
    }

    const getHeight = () => {
      if (height) return typeof height === 'number' ? `${height}px` : height
      if (variant === 'circle') return 'var(--mark-size-md)'
      if (variant === 'text') return '1em'
      return 'var(--mark-size-lg)'
    }

    return { width: getWidth(), height: getHeight() }
  }, [variant, width, height])

  // Base styles for all skeleton variants
  const baseStyles = useMemo(() => ({
    background: animation === 'wave' 
      ? `linear-gradient(90deg, var(--mark-bg-elevated) 25%, var(--mark-bg-overlay) 50%, var(--mark-bg-elevated) 75%)`
      : 'var(--mark-bg-elevated)',
    backgroundSize: animation === 'wave' ? '200px 100%' : 'auto',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    ...SHAPE_STYLES[variant],
    ...dimensions,
  }), [variant, dimensions, animation])

  // Handle reduced motion preference
  const shouldAnimate = useMemo(() => {
    if (typeof window === 'undefined') return animation !== 'none'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !prefersReducedMotion && animation !== 'none'
  }, [animation])

  // Get animation configuration
  const animationConfig = useMemo(() => {
    if (!shouldAnimate) return ANIMATION_VARIANTS.none
    return ANIMATION_VARIANTS[animation]
  }, [animation, shouldAnimate])

  // Handle fun animation trigger
  const handleClick = () => {
    triggerAnimation({
      trigger: 'click',
      originRef: skeletonRef,
    })
  }

  // Render multiple lines for text variant
  if (variant === 'text' && lines > 1) {
    return (
      <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mark-space-2)' }}>
        {Array.from({ length: lines }, (_, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? skeletonRef : undefined}
            style={{
              ...baseStyles,
              // Make last line slightly shorter for more realistic text appearance
              width: index === lines - 1 && !width ? '75%' : baseStyles.width,
            }}
            variants={animationConfig}
            initial="initial"
            animate="animate"
            onClick={handleClick}
          />
        ))}
      </div>
    )
  }

  // Single skeleton element
  return (
    <motion.div
      ref={skeletonRef}
      className={className}
      style={baseStyles}
      variants={animationConfig}
      initial="initial"
      animate="animate"
      onClick={handleClick}
    />
  )
}