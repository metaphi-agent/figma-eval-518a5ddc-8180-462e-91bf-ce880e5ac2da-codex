import { useEffect, useMemo, useRef } from 'react'
import { cn } from '../../lib/cn'

type OtpInputProps = {
  length: number
  value: string
  onChange: (value: string) => void
  autoFocus?: boolean
  error?: string
}

export function OtpInput({
  length,
  value,
  onChange,
  autoFocus,
  error
}: OtpInputProps) {
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const digits = useMemo(() => {
    const v = value.replace(/\D/g, '').slice(0, length)
    return Array.from({ length }, (_, i) => v[i] ?? '')
  }, [length, value])

  useEffect(() => {
    if (!autoFocus) return
    inputs.current[0]?.focus()
  }, [autoFocus])

  const setAt = (index: number, digit: string) => {
    const next = digits.slice()
    next[index] = digit
    onChange(next.join(''))
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el
            }}
            inputMode="numeric"
            pattern="[0-9]*"
            value={d}
            onChange={(e) => {
              const next = e.target.value.replace(/\D/g, '').slice(-1)
              setAt(i, next)
              if (next && i < length - 1) inputs.current[i + 1]?.focus()
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !digits[i] && i > 0) {
                inputs.current[i - 1]?.focus()
              }
            }}
            onPaste={(e) => {
              e.preventDefault()
              const pasted = e.clipboardData.getData('text').replace(/\D/g, '')
              const next = (value + pasted).replace(/\D/g, '').slice(0, length)
              onChange(next)
            }}
            className={cn(
              'h-14 w-14 rounded-[14px] border bg-white text-center text-xl font-semibold',
              'outline-none transition-colors duration-150',
              error
                ? 'border-[var(--color-danger)] text-[var(--color-ink)]'
                : 'border-[var(--color-border)] focus:border-black'
            )}
          />
        ))}
      </div>
      {error ? (
        <div className="mt-3 text-center text-sm text-[var(--color-danger)]">
          {error}
        </div>
      ) : null}
    </div>
  )
}

