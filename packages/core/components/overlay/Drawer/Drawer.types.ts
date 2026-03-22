export interface DrawerProps {
  /** Drawer visibility */
  open: boolean
  /** Close handler */
  onClose: () => void
  /** Slide direction */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /** Drawer size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Close on backdrop click */
  closeOnBackdrop?: boolean
  /** Close on Escape key */
  closeOnEscape?: boolean
  /** Drawer content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}