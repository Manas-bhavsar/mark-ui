'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { InputProps } from './Input.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  size = 'md',
  isDisabled = false,
  isError = false,
  isSuccess = false,
  errorMessage,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const [hasErrorShake, setHasErrorShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { triggerAnimation } = useFunAnimation()

  const handleFocus = () => {
    setFocused(true)
    triggerAnimation({ trigger: 'focus', originRef: wrapperRef })
  }

  // Trigger error shake
  const triggerShake = () => {
    if (isError && !hasErrorShake) {
      setHasErrorShake(true)
      setTimeout(() => setHasErrorShake(false), 500)
    }
  }

  // Message below input
  const message = isError && errorMessage ? errorMessage : helperText
  const isMessageError = isError && !!errorMessage

  const labelClassName = [
    'block font-body text-sm mb-2 transition-colors duration-150',
    focused ? 'text-[var(--mark-accent-primary)]' : 'text-[var(--mark-fg-muted)]',
    isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
  ].join(' ')

  const inputClassName = [
    'mark-input',
    `h-[var(--mark-size-${size})]`,
    `text-[var(--mark-text-${size})]`,
    leftIcon ? 'pl-10' : 'px-[var(--mark-px-md)]',
    rightIcon ? 'pr-10' : 'px-[var(--mark-px-md)]',
    isError ? 'mark-input-error' : '',
    isSuccess ? 'mark-input-success' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={className} style={{ width: '100%' }}>
      {/* Label */}
      {label && (
        <label
          className={labelClassName}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <motion.div
        ref={wrapperRef}
        className="mark-input-wrapper"
        animate={hasErrorShake ? { x: [0, -4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.4 }}
        onAnimationComplete={triggerShake}
      >
        {/* Left icon */}
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--mark-fg-muted)] pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={handleFocus}
          onBlur={() => setFocused(false)}
          className={inputClassName}
          aria-invalid={isError}
          aria-describedby={message ? 'input-message' : undefined}
        />

        {/* Right icon */}
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--mark-fg-muted)] pointer-events-none">
            {rightIcon}
          </span>
        )}
      </motion.div>

      {/* Helper / Error message */}
      {message && (
        <p
          id="input-message"
          className="font-body text-sm mt-2 mb-0"
          style={{
            color: isMessageError ? 'var(--mark-color-error)' : 'var(--mark-fg-muted)',
          }}
        >
          {message}
        </p>
      )}
    </div>
  )
}
