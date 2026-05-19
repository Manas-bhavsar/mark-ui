export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Show spinner and disable interaction */
  isLoading?: boolean
  /** Disable the button */
  isDisabled?: boolean
  /** Icon before label */
  leftIcon?: React.ReactNode
  /** Icon after label */
  rightIcon?: React.ReactNode
  /** Stretch to fill container */
  isFullWidth?: boolean
  /** Click handler */
  onClick?: () => void
  /** Button content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}
