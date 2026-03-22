// MARK UI — Core Package Barrel Export
// All 19 Phase 1 components (10 Week 1 + 8 Week 2 + 1 existing)

// Inputs
export { default as Button } from './components/inputs/Button/Button'
export type { ButtonProps } from './components/inputs/Button/Button.types'

export { default as Checkbox } from './components/inputs/Checkbox/Checkbox'
export type { CheckboxProps } from './components/inputs/Checkbox/Checkbox.types'

export { default as Input } from './components/inputs/Input/Input'
export type { InputProps } from './components/inputs/Input/Input.types'

export { default as Select } from './components/inputs/Select/Select'
export type { SelectProps, SelectOption } from './components/inputs/Select/Select.types'

export { default as Toggle } from './components/inputs/Toggle/Toggle'
export type { ToggleProps } from './components/inputs/Toggle/Toggle.types'

// Display
export { default as Avatar } from './components/display/Avatar/Avatar'
export type { AvatarProps } from './components/display/Avatar/Avatar.types'

export { default as Badge } from './components/display/Badge/Badge'
export type { BadgeProps } from './components/display/Badge/Badge.types'

export { default as Card } from './components/display/Card/Card'
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './components/display/Card/Card.types'

export { default as Tag } from './components/display/Tag/Tag'
export type { TagProps } from './components/display/Tag/Tag.types'

// Feedback
export { default as Alert } from './components/feedback/Alert/Alert'
export type { AlertProps } from './components/feedback/Alert/Alert.types'

export { default as Skeleton } from './components/feedback/Skeleton/Skeleton'
export type { SkeletonProps } from './components/feedback/Skeleton/Skeleton.types'

export { default as Spinner } from './components/feedback/Spinner/Spinner'
export type { SpinnerProps } from './components/feedback/Spinner/Spinner.types'

// Layout
export { default as Container } from './components/layout/Container/Container'
export type { ContainerProps } from './components/layout/Container/Container.types'

export { default as Divider } from './components/layout/Divider/Divider'
export type { DividerProps } from './components/layout/Divider/Divider.types'

export { default as Tooltip } from './components/layout/Tooltip/Tooltip'
export type { TooltipProps } from './components/layout/Tooltip/Tooltip.types'

// Overlay
export { default as Drawer } from './components/overlay/Drawer/Drawer'
export type { DrawerProps } from './components/overlay/Drawer/Drawer.types'

export { default as Modal, ModalHeader, ModalBody, ModalFooter } from './components/overlay/Modal/Modal'
export type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './components/overlay/Modal/Modal.types'

export { Toast, ToastProvider, useToast } from './components/overlay/Toast'
export type { ToastProps, ToastContextValue } from './components/overlay/Toast/Toast.types'
