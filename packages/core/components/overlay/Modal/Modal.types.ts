export interface ModalProps {
  /** Modal visibility */
  open: boolean
  /** Close handler */
  onClose: () => void
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Close on backdrop click */
  closeOnBackdrop?: boolean
  /** Close on Escape key */
  closeOnEscape?: boolean
  /** Modal content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}

export interface ModalHeaderProps {
  /** Header title */
  title?: string
  /** Show close button */
  showClose?: boolean
  /** Close handler */
  onClose?: () => void
  /** Additional content */
  children?: React.ReactNode
}

export interface ModalBodyProps {
  /** Body content */
  children: React.ReactNode
  /** Padding variant */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export interface ModalFooterProps {
  /** Footer content */
  children: React.ReactNode
  /** Alignment */
  align?: 'left' | 'center' | 'right'
}