import { cn } from '../../lib/cn'

const keys = [
  { label: '1' },
  { label: '2', sub: 'ABC' },
  { label: '3', sub: 'DEF' },
  { label: '4', sub: 'GHI' },
  { label: '5', sub: 'JKL' },
  { label: '6', sub: 'MNO' },
  { label: '7', sub: 'PQRS' },
  { label: '8', sub: 'TUV' },
  { label: '9', sub: 'WXYZ' },
  { label: '+*#' },
  { label: '0' }
]

export function PhoneKeypadMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'mt-auto border-t border-black/10 bg-[#E9EBEE] px-4 pb-4 pt-2',
        className
      )}
      aria-hidden
    >
      <div className="grid grid-cols-3 gap-3">
        {keys.map((k) => (
          <div
            key={k.label}
            className="flex h-12 flex-col items-center justify-center rounded-xl bg-white/85 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
          >
            <div className="text-lg font-semibold text-[var(--color-ink)]">
              {k.label}
            </div>
            {k.sub ? (
              <div className="mt-[-2px] text-[10px] tracking-wider text-black/60">
                {k.sub}
              </div>
            ) : null}
          </div>
        ))}
        <div className="flex h-12 items-center justify-center rounded-xl bg-white/40 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
        <div className="flex h-12 items-center justify-center rounded-xl bg-white/85 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]">
          <div className="text-lg font-semibold text-[var(--color-ink)]">⌫</div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="h-1.5 w-32 rounded-full bg-black/80" />
      </div>
    </div>
  )
}

