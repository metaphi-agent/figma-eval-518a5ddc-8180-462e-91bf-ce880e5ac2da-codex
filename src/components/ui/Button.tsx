import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  isLoading?: boolean
}

export function Button({
  className,
  variant = 'primary',
  fullWidth,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(
        'inline-flex h-14 items-center justify-center rounded-[var(--radius-sm)] px-6 text-[16px] font-semibold',
        'transition-colors duration-150 outline-none',
        'focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        fullWidth && 'w-full',
        variant === 'primary' &&
          'bg-black text-white hover:bg-black/90 active:bg-black disabled:bg-black/70',
        variant === 'secondary' &&
          'border border-[var(--color-border)] bg-white text-black hover:bg-black/[0.03] active:bg-black/[0.06] disabled:text-black/40',
        className
      )}
    >
      {isLoading ? 'Loading…' : children}
    </button>
  )
}

