import { Screen } from '../components/layout/Screen'
import { cn } from '../lib/cn'
import { Icon } from '../components/ui/Icon'

function RowButton({
  iconSrc,
  label
}: {
  iconSrc: string
  label: string
}) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-14 w-full items-center gap-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-5',
        'text-[15px] font-semibold text-black',
        'transition-colors duration-150 hover:bg-black/[0.03] active:bg-black/[0.06]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2'
      )}
    >
      <Icon src={iconSrc} alt="" className="h-5 w-5" />
      <div className="flex-1 text-center">{label}</div>
      <div className="w-5" />
    </button>
  )
}

export default function SignInOptionsPage() {
  return (
    <Screen>
      <div className="min-h-[852px] px-5 pb-10 pt-16">
        <h1 className="text-center font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Hi, Welcome! 👋
        </h1>

        <div className="mt-10 grid gap-3">
          <RowButton iconSrc="./assets/icons/google.svg" label="Sign in with Google" />
          <RowButton iconSrc="./assets/icons/apple.svg" label="Sign in with Apple" />
          <RowButton iconSrc="./assets/icons/mail.svg" label="Sign in with Email" />
          <RowButton iconSrc="./assets/icons/facebook.svg" label="Sign in with Facebook" />
          <RowButton iconSrc="./assets/icons/github.svg" label="Sign in with Github" />
          <RowButton iconSrc="./assets/icons/dropbox.svg" label="Sign in with Dropbox" />
          <RowButton iconSrc="./assets/icons/linkedin.svg" label="Sign in with LinkedIn" />
          <RowButton iconSrc="./assets/icons/microsoft.svg" label="Sign in with Microsoft" />
          <RowButton iconSrc="./assets/icons/instagram.svg" label="Sign in with Instagram" />
        </div>
      </div>
    </Screen>
  )
}

