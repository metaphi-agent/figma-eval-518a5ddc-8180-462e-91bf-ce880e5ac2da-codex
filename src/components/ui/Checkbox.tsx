import { cn } from '../../lib/cn'
import { Icon } from './Icon'

type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  className?: string
}

export function Checkbox({ checked, onChange, label, className }: CheckboxProps) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-center gap-3 text-sm text-black',
        className
      )}
    >
      <button
        type="button"
        aria-checked={checked}
        role="checkbox"
        onClick={() => onChange(!checked)}
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-full',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2',
          checked ? 'bg-black' : 'bg-white ring-1 ring-[var(--color-border)]'
        )}
      >
        {checked ? (
          <Icon
            src="./assets/icons/checkbox-on.svg"
            alt=""
            className="h-4 w-4 invert"
          />
        ) : null}
      </button>
      <span>{label}</span>
    </label>
  )
}

