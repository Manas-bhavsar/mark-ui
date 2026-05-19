import type { ContainerProps } from './Container.types'

const MAX_WIDTH_MAP = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  full: '100%',
} as const

export default function Container({
  size = 'xl',
  isCentered = true,
  padding = true,
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: MAX_WIDTH_MAP[size],
        marginLeft: isCentered ? 'auto' : undefined,
        marginRight: isCentered ? 'auto' : undefined,
        paddingLeft: padding ? 'var(--mark-space-6)' : undefined,
        paddingRight: padding ? 'var(--mark-space-6)' : undefined,
      }}
    >
      {children}
    </div>
  )
}
