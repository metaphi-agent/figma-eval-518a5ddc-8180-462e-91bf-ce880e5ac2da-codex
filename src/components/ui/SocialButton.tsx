import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

type SocialButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc: string
  label: ReactNode
}

export function SocialButton({ iconSrc, label, className, ...props }: SocialButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex h-14 w-full items-center gap-4 rounded-[999px] border border-[var(--color-border)] bg-white px-5',
        'text-[15px] font-semibold text-black',
        'transition-colors duration-150 hover:bg-black/[0.03] active:bg-black/[0.06]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2',
        className
      )}
    >
      <Icon src={iconSrc} alt="" className="h-5 w-5" />
      <div className="flex-1 text-left">{label}</div>
    </button>
  )
}

