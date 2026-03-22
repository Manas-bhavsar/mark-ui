export interface ToastProps {
  /** Toast title */
  title?: string
  /** Toast description */
  description?: string
  /** Visual variant */
  variant?: 'success' | 'error' | 'warning' | 'info'
  /** Auto-dismiss duration (0 = no auto-dismiss) */
  duration?: number
  /** Manual dismiss handler */
  onDismiss?: () => void
  /** Action button */
  action?: {
    label: string
    onClick: () => void
  }
  /** Additional CSS class */
  className?: string
}

export interface ToastContextValue {
  toast: (props: Omit<ToastProps, 'onDismiss'>) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}