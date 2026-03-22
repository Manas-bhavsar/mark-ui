export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode
  /** Trigger element */
  children: React.ReactNode
  /** Positioning */
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** Show delay in milliseconds */
  showDelay?: number
  /** Hide delay in milliseconds */
  hideDelay?: number
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
}