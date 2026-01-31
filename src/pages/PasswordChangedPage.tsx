import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

export default function PasswordChangedPage() {
  const navigate = useNavigate()

  return (
    <Screen>
      <div className="flex min-h-[852px] flex-col items-center justify-center px-5 pb-12 pt-10">
        <div className="relative">
          <Icon src="./assets/icons/sparkle.svg" alt="" className="h-10 w-10" />
          <div className="absolute -right-6 -top-4">
            <Icon src="./assets/icons/sparkle.svg" alt="" className="h-7 w-7" />
          </div>
        </div>

        <h1 className="mt-10 text-center font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Password changed
        </h1>
        <p className="mt-3 text-center text-[15px] leading-[20px] text-[var(--color-muted)]">
          Your password has been changed
          <br />
          successfully
        </p>

        <div className="mt-10 w-full">
          <Button fullWidth onClick={() => navigate('/log-in/1')}>
            Back to login
          </Button>
        </div>
      </div>
    </Screen>
  )
}

