import React, { forwardRef, ChangeEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ISelectProps {
  value: string
  defaultValue?: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  children: ReactNode
  className?: string
  disabled?: boolean
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ value, onChange, children, className, disabled, defaultValue }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={cn(
          'text-bgPrimary font-medium h-full w-full rounded-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-2 p-2',
          className
        )}
        disabled={disabled}
      >
        {children}
      </select>
    )
  }
)
