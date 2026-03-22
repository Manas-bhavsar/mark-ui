'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SelectProps } from './Select.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const SIZE_STYLES = {
  sm: {
    height: 'var(--mark-size-sm)',
    fontSize: 'var(--mark-text-sm)',
  },
  md: {
    height: 'var(--mark-size-md)',
    fontSize: 'var(--mark-text-md)',
  },
  lg: {
    height: 'var(--mark-size-lg)',
    fontSize: 'var(--mark-text-lg)',
  },
} as const

export default function Select({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option...',
  onChange,
  size = 'md',
  disabled = false,
  error = false,
  className = '',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [focused, setFocused] = useState(false)
  
  const selectRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { triggerAnimation } = useFunAnimation()
  
  const s = SIZE_STYLES[size]

  // Update selected value when controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const selectedOption = options.find(option => option.value === selectedValue)
  const displayText = selectedOption ? selectedOption.label : placeholder

  const handleToggle = () => {
    if (disabled) return
    
    setIsOpen(!isOpen)
    setFocusedIndex(-1)
    
    if (!isOpen) {
      triggerAnimation({ trigger: 'click', originRef: selectRef })
    }
  }

  const handleOptionSelect = (optionValue: string) => {
    if (disabled) return
    
    const option = options.find(opt => opt.value === optionValue)
    if (option?.disabled) return

    setSelectedValue(optionValue)
    setIsOpen(false)
    setFocusedIndex(-1)
    
    if (onChange) {
      onChange(optionValue)
    }
    
    triggerAnimation({ trigger: 'click', originRef: selectRef })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(0)
        } else if (focusedIndex >= 0) {
          const option = options[focusedIndex]
          if (!option.disabled) {
            handleOptionSelect(option.value)
          }
        }
        break
        
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        setFocusedIndex(-1)
        break
        
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(0)
        } else {
          const nextIndex = Math.min(focusedIndex + 1, options.length - 1)
          setFocusedIndex(nextIndex)
        }
        break
        
      case 'ArrowUp':
        event.preventDefault()
        if (isOpen) {
          const prevIndex = Math.max(focusedIndex - 1, 0)
          setFocusedIndex(prevIndex)
        }
        break
    }
  }

  // Determine border/shadow based on state
  let borderColor = 'var(--mark-border-strong)'
  let boxShadow = 'none'

  if (focused && !error && !disabled) {
    borderColor = 'var(--mark-accent-primary)'
    boxShadow = '0 0 0 3px var(--mark-accent-subtle)'
  } else if (error) {
    borderColor = '#EF4444'
    boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.12)'
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const dropdownAnimation = prefersReducedMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0 }
  } : {
    initial: { opacity: 0, y: -8, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.95 },
    transition: { 
      duration: 0.15
    }
  }

  return (
    <div className={className} style={{ position: 'relative', width: '100%' }}>
      <div
        ref={selectRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={placeholder}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={handleToggle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: s.height,
          background: disabled ? 'var(--mark-bg)' : 'var(--mark-bg-elevated)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--mark-radius-md)',
          color: selectedOption ? 'var(--mark-fg)' : 'var(--mark-fg-muted)',
          fontFamily: 'var(--mark-font-body)',
          fontSize: s.fontSize,
          paddingLeft: 'var(--mark-px-md)',
          paddingRight: 'var(--mark-px-md)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.4 : 1,
          outline: 'none',
          boxShadow,
          transition: `border-color var(--mark-duration-fast) var(--mark-ease-smooth),
                       box-shadow var(--mark-duration-fast) var(--mark-ease-smooth)`,
        }}
      >
        <span style={{ 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          flex: 1
        }}>
          {displayText}
        </span>
        
        {/* Dropdown arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 0.2,
            ease: 'easeOut'
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'var(--mark-space-2)',
            color: 'var(--mark-fg-muted)',
            fontSize: 'var(--mark-text-sm)',
          }}
        >
          ▼
        </motion.span>
      </div>

      {/* Dropdown options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            role="listbox"
            aria-label="Options"
            {...dropdownAnimation}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 1000,
              marginTop: 'var(--mark-space-1)',
              background: 'var(--mark-bg-elevated)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-md)',
              boxShadow: 'var(--mark-shadow-lg)',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === selectedValue}
                onClick={() => handleOptionSelect(option.value)}
                style={{
                  padding: 'var(--mark-px-md)',
                  cursor: option.disabled ? 'not-allowed' : 'pointer',
                  color: option.disabled ? 'var(--mark-fg-muted)' : 'var(--mark-fg)',
                  backgroundColor: 
                    index === focusedIndex ? 'var(--mark-accent-subtle)' :
                    option.value === selectedValue ? 'var(--mark-accent-subtle)' :
                    'transparent',
                  opacity: option.disabled ? 0.4 : 1,
                  fontSize: s.fontSize,
                  fontFamily: 'var(--mark-font-body)',
                  transition: 'background-color var(--mark-duration-fast) var(--mark-ease-smooth)',
                }}
                onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}