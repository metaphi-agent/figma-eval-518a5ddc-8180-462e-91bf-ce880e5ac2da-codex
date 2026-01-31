import { Link, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'

type TopCornersProps = {
  backHref?: string
  showBack?: boolean
  showStar?: boolean
  className?: string
}

export function TopCorners({
  backHref,
  showBack,
  showStar,
  className
}: TopCornersProps) {
  const navigate = useNavigate()

  return (
    <div className={cn('pointer-events-none absolute inset-x-0 top-0', className)}>
      <div className="relative mx-auto w-full max-w-[393px] px-5 pt-5">
        {backHref ? (
          <Link
            to={backHref}
            className={cn(
              'pointer-events-auto inline-flex h-[39px] w-[39px] items-center justify-center rounded-[10px] border border-[var(--color-border)] bg-white',
              'transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2'
            )}
            aria-label="Back"
          >
            <Icon src="./assets/icons/back.svg" alt="" className="h-5 w-5" />
          </Link>
        ) : showBack ? (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={cn(
              'pointer-events-auto inline-flex h-[39px] w-[39px] items-center justify-center rounded-[10px] border border-[var(--color-border)] bg-white',
              'transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2'
            )}
            aria-label="Back"
          >
            <Icon src="./assets/icons/back.svg" alt="" className="h-5 w-5" />
          </button>
        ) : null}

        {showStar ? (
          <div className="pointer-events-none absolute right-5 top-5">
            <Icon src="./assets/icons/sparkle.svg" alt="" className="h-11 w-11" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
