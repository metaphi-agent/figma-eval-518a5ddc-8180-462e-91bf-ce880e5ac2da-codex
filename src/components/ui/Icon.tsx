import { cn } from '../../lib/cn'

type IconProps = {
  src: string
  alt?: string
  className?: string
}

export function Icon({ src, alt = '', className }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-5 w-5 select-none', className)}
      draggable={false}
    />
  )
}

