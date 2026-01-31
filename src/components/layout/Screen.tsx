import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ScreenProps = {
  children: ReactNode
  className?: string
}

export function Screen({ children, className }: ScreenProps) {
  return (
    <div className="min-h-screen bg-neutral-100 px-4 py-8">
      <div
        className={cn(
          'mx-auto w-full max-w-[393px] overflow-hidden bg-white',
          'sm:rounded-[28px] sm:shadow-[0_16px_48px_rgba(0,0,0,0.08)]',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

