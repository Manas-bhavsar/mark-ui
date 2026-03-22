export interface AvatarProps {
  /** Image source URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Fallback initials */
  initials?: string
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Shape variant */
  shape?: 'circle' | 'square'
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy'
  /** Click handler */
  onClick?: () => void
  /** Additional CSS class */
  className?: string
}