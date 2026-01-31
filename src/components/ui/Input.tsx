import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  endAdornment?: ReactNode
}

export function Input({
  className,
  label,
  error,
  endAdornment,
  ...props
}: InputProps) {
  return (
    <label className="block">
      {label ? (
        <div className="mb-1 text-sm font-medium text-black">{label}</div>
      ) : null}
      <div className="relative">
        <input
          {...props}
          className={cn(
            'h-14 w-full rounded-[var(--radius-sm)] border bg-white px-4 text-[16px] text-black',
            'outline-none transition-colors duration-150',
            'placeholder:text-black/40',
            error
              ? 'border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-2 focus:ring-[var(--color-danger)]/20'
              : 'border-[var(--color-border)] focus:border-black focus:ring-2 focus:ring-black/10',
            endAdornment ? 'pr-12' : '',
            className
          )}
        />
        {endAdornment ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {endAdornment}
          </div>
        ) : null}
      </div>
      {error ? (
        <div className="mt-1 text-sm text-[var(--color-danger)]">{error}</div>
      ) : null}
    </label>
  )
}

