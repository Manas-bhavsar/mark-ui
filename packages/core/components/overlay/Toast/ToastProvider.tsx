'use client'

import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import Toast from './Toast'
import type { ToastProps, ToastContextValue } from './Toast.types'

interface ToastItem extends Omit<ToastProps, 'onDismiss'> {
  id: string
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: React.ReactNode
  /** Maximum number of toasts to show at once */
  maxToasts?: number
  /** Position of toast container */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
}

export function ToastProvider({ 
  children, 
  maxToasts = 5,
  position = 'top-right'
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const toastIdRef = useRef(0)

  const toast = useCallback((props: Omit<ToastProps, 'onDismiss'>) => {
    const id = `toast-${++toastIdRef.current}`
    const newToast: ToastItem = { ...props, id }
    
    setToasts(current => {
      const updated = [newToast, ...current]
      // Limit number of toasts
      return updated.slice(0, maxToasts)
    })
    
    return id
  }, [maxToasts])

  const dismiss = useCallback((id: string) => {
    setToasts(current => current.filter(toast => toast.id !== id))
  }, [])

  const dismissAll = useCallback(() => {
    setToasts([])
  }, [])

  const contextValue: ToastContextValue = {
    toast,
    dismiss,
    dismissAll,
  }

  const getPositionStyles = () => {
    const baseStyles = {
      position: 'fixed' as const,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 'var(--mark-space-3)',
      padding: 'var(--mark-space-4)',
      pointerEvents: 'none' as const,
    }

    switch (position) {
      case 'top-right':
        return { ...baseStyles, top: 0, right: 0 }
      case 'top-left':
        return { ...baseStyles, top: 0, left: 0 }
      case 'bottom-right':
        return { ...baseStyles, bottom: 0, right: 0, flexDirection: 'column-reverse' as const }
      case 'bottom-left':
        return { ...baseStyles, bottom: 0, left: 0, flexDirection: 'column-reverse' as const }
      case 'top-center':
        return { ...baseStyles, top: 0, left: '50%', transform: 'translateX(-50%)' }
      case 'bottom-center':
        return { ...baseStyles, bottom: 0, left: '50%', transform: 'translateX(-50%)', flexDirection: 'column-reverse' as const }
      default:
        return { ...baseStyles, top: 0, right: 0 }
    }
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {typeof window !== 'undefined' && createPortal(
        <div style={getPositionStyles()}>
          <AnimatePresence mode="popLayout">
            {toasts.map((toastItem) => (
              <div
                key={toastItem.id}
                style={{ pointerEvents: 'auto' }}
              >
                <Toast
                  {...toastItem}
                  onDismiss={() => dismiss(toastItem.id)}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}