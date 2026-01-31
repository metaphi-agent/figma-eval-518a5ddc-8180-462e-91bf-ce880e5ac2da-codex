import { Link } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { Button } from '../components/ui/Button'

export default function OpeningPage() {
  return (
    <Screen>
      <div className="flex min-h-[852px] flex-col px-5 pb-10 pt-14">
        <div className="flex flex-1 flex-col items-center">
          <img
            src="./assets/illustrations/hero-sparkles.svg"
            alt=""
            className="mt-8 h-[220px] w-[260px] select-none"
            draggable={false}
          />

          <h1 className="mt-10 text-center font-display text-[32px] font-bold tracking-[-0.32px] text-black">
            Explore the app
          </h1>
          <p className="mt-3 max-w-[320px] text-center text-[15px] leading-[20px] text-[var(--color-muted)]">
            Now your finances are in one place and always under control
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          <Link to="/log-in/1">
            <Button fullWidth>Sign In</Button>
          </Link>
          <Link to="/sign-up/6">
            <Button fullWidth variant="secondary">
              Create account
            </Button>
          </Link>
        </div>
      </div>
    </Screen>
  )
}

