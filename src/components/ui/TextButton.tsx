import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function TextButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-black underline underline-offset-4',
        'transition-colors hover:text-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2',
        className
      )}
    />
  )
}

