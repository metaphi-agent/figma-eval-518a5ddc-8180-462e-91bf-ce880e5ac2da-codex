import { cn } from '../../lib/cn'

type SegmentedControlProps = {
  value: string
  options: Array<{ value: string; label: string }>
  onChange: (value: string) => void
  className?: string
}

export function SegmentedControl({
  value,
  options,
  onChange,
  className
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        'flex h-10 w-full rounded-[12px] bg-black/[0.06] p-1',
        className
      )}
    >
      {options.map((o) => {
        const active = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={cn(
              'flex-1 rounded-[10px] text-[14px] font-semibold transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
              active ? 'bg-white text-black shadow-sm' : 'text-black/70 hover:text-black'
            )}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

