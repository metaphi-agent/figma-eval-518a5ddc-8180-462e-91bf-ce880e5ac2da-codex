import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

type CenteredIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc: string
  alt?: string
}

export function CenteredIconButton({
  className,
  iconSrc,
  alt = '',
  ...props
}: CenteredIconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex h-14 w-[108px] items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white',
        'transition-colors duration-150 hover:bg-black/[0.03] active:bg-black/[0.06]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2',
        className
      )}
    >
      <Icon src={iconSrc} alt={alt} className="h-5 w-5" />
    </button>
  )
}

