export interface SkeletonProps {
  /** Skeleton shape */
  variant?: 'text' | 'circle' | 'rectangle'
  /** Width (CSS value or number for px) */
  width?: string | number
  /** Height (CSS value or number for px) */
  height?: string | number
  /** Number of text lines */
  lines?: number
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none'
  /** Additional CSS class */
  className?: string
}