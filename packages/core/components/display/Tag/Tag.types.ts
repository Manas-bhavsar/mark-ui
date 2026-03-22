export interface TagProps {
  /** Tag content */
  children: React.ReactNode
  /** Visual variant */
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger'
  /** Tag size */
  size?: 'xs' | 'sm' | 'md'
  /** Removable with close button */
  removable?: boolean
  /** Remove handler */
  onRemove?: () => void
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
}