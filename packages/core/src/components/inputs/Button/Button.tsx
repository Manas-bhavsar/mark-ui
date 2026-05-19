'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { ButtonProps } from './Button.types'
import Spinner from '../../feedback/Spinner/Spinner'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const SPINNER_COLOR_MAP: Record<string, 'accent' | 'white' | 'muted'> = {
  primary: 'muted',
  secondary: 'accent',
  ghost: 'accent',
  destructive: 'white',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  isFullWidth = false,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const disabled = isDisabled || isLoading
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { triggerAnimation } = useFunAnimation()

  const handleClick = () => {
    if (disabled) return
    triggerAnimation({ trigger: 'click', originRef: buttonRef })
    onClick?.()
  }

  const combinedClassName = [
    'mark-button',
    `mark-button-${variant}`,
    `mark-button-${size}`,
    isFullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.button
      ref={buttonRef}
      className={combinedClassName}
      onClick={handleClick}
      disabled={disabled}
      aria-busy={isLoading}
      aria-disabled={disabled}
      whileHover={disabled ? {} : { y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97, y: 0 }}
      transition={{
        duration: 0.12,
        ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
      }}
      style={{
        position: 'relative',
      }}
    >
      {isLoading ? (
        <Spinner size="sm" color={SPINNER_COLOR_MAP[variant]} />
      ) : (
        <>
          {leftIcon && (
            <span className="flex shrink-0 items-center justify-center">
              {leftIcon}
            </span>
          )}
          <span className="truncate">{children}</span>
          {rightIcon && (
            <span className="flex shrink-0 items-center justify-center">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </motion.button>
  )
}
