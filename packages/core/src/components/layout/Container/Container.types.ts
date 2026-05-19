export interface ContainerProps {
  /** Maximum width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Center horizontally with auto margins */
  isCentered?: boolean
  /** Add horizontal padding */
  padding?: boolean
  /** Container content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}
