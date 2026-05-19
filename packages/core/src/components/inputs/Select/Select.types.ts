export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  /** Available options */
  options: SelectOption[]
  /** Current selected value */
  value?: string
  /** Default selected value */
  defaultValue?: string
  /** Placeholder text when no selection */
  placeholder?: string
  /** Selection change handler */
  onChange?: (value: string) => void
  /** Component size */
  size?: 'sm' | 'md' | 'lg'
  /** Disabled state */
  isDisabled?: boolean
  /** Error state */
  isError?: boolean
  /** Additional CSS class */
  className?: string
}