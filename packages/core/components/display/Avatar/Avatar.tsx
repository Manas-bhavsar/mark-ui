'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import type { AvatarProps } from './Avatar.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

// Size variants mapping to CSS custom properties
const SIZE_STYLES = {
  xs: {
    width: '24px',
    height: '24px',
    fontSize: 'var(--mark-text-xs)',
  },
  sm: {
    width: 'var(--mark-size-sm)', // 32px
    height: 'var(--mark-size-sm)',
    fontSize: 'var(--mark-text-sm)',
  },
  md: {
    width: 'var(--mark-size-md)', // 40px
    height: 'var(--mark-size-md)',
    fontSize: 'var(--mark-text-md)',
  },
  lg: {
    width: 'var(--mark-size-lg)', // 48px
    height: 'var(--mark-size-lg)',
    fontSize: 'var(--mark-text-lg)',
  },
  xl: {
    width: '64px',
    height: '64px',
    fontSize: 'var(--mark-text-xl)',
  },
} as const

// Generate consistent color based on initials
const generateColor = (initials: string): string => {
  if (!initials) return 'var(--mark-accent-primary)'
  
  // Simple hash function for consistent color generation
  let hash = 0
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  // Generate HSL color with good contrast
  const hue = Math.abs(hash) % 360
  const saturation = 65 + (Math.abs(hash) % 20) // 65-85%
  const lightness = 45 + (Math.abs(hash) % 15) // 45-60%
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

// Get initials from a name string
const getInitials = (name: string): string => {
  if (!name) return ''
  
  const words = name.trim().split(/\s+/)
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  }
  
  return words
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('')
}

export default function Avatar({
  src,
  alt,
  initials,
  size = 'md',
  shape = 'circle',
  status,
  onClick,
  className = '',
}: AvatarProps) {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { triggerAnimation } = useFunAnimation()

  // Reset image state when src changes
  useEffect(() => {
    if (src) {
      setImageError(false)
      setImageLoaded(false)
    }
  }, [src])

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
      if (avatarRef.current) {
        triggerAnimation({
          trigger: 'click',
          originRef: avatarRef
        })
      }
    }
  }

  // Determine what to display
  const shouldShowImage = src && !imageError && imageLoaded
  const displayInitials = initials || (alt ? getInitials(alt) : '')
  const backgroundColor = shouldShowImage ? 'transparent' : generateColor(displayInitials)

  const sizeStyles = SIZE_STYLES[size]
  const borderRadius = shape === 'circle' ? '50%' : 'var(--mark-radius-md)'

  return (
    <motion.div
      ref={avatarRef}
      className={`avatar ${className}`}
      onClick={handleClick}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      transition={{
        duration: 0.15,
        ease: 'easeOut'
      }}
      style={{
        ...sizeStyles,
        borderRadius,
        backgroundColor,
        color: shouldShowImage ? 'transparent' : 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 'var(--mark-weight-medium)',
        userSelect: 'none',
        border: '2px solid var(--mark-border)',
        transition: 'all var(--mark-duration-fast) var(--mark-ease-smooth)',
      }}
      role={onClick ? 'button' : undefined}
      aria-label={alt || `Avatar${displayInitials ? ` for ${displayInitials}` : ''}`}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      } : undefined}
    >
      {/* Image */}
      {src && (
        <img
          src={src}
          alt={alt || ''}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: shouldShowImage ? 'block' : 'none',
          }}
        />
      )}
      
      {/* Initials fallback */}
      {!shouldShowImage && displayInitials && (
        <span style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
          {displayInitials}
        </span>
      )}
      
      {/* Status indicator */}
      {status && (
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: size === 'xs' ? '6px' : size === 'sm' ? '8px' : '10px',
            height: size === 'xs' ? '6px' : size === 'sm' ? '8px' : '10px',
            borderRadius: '50%',
            backgroundColor: 
              status === 'online' ? '#10B981' :
              status === 'away' ? '#F59E0B' :
              status === 'busy' ? '#EF4444' :
              '#6B7280', // offline
            border: '2px solid var(--mark-bg)',
          }}
          aria-label={`Status: ${status}`}
        />
      )}
    </motion.div>
  )
}