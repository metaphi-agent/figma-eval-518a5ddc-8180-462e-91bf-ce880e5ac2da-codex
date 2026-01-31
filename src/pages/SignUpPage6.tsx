import { Link } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { SocialButton } from '../components/ui/SocialButton'

export default function SignUpPage6() {
  return (
    <Screen>
      <div className="flex min-h-[852px] flex-col px-5 pb-10 pt-10">
        <div className="rounded-[var(--radius-xl)] bg-[#EEF3FF] px-5 pb-7 pt-8">
          <div className="flex justify-center">
            <img
              src="./assets/illustrations/hero-sparkles.svg"
              alt=""
              className="h-[180px] w-[220px] select-none"
              draggable={false}
            />
          </div>

          <h1 className="mt-5 text-center font-display text-[32px] font-bold tracking-[-0.32px] text-black">
            Explore the app
          </h1>
          <p className="mt-3 text-center text-[15px] leading-[20px] text-[var(--color-muted)]">
            Now your finances are in one place and always under control
          </p>

          <div className="mt-6 grid gap-4">
            <SocialButton
              iconSrc="./assets/icons/google.svg"
              label="Continue with Google"
            />
            <SocialButton
              iconSrc="./assets/icons/apple.svg"
              label="Continue with Apple"
            />
            <SocialButton
              iconSrc="./assets/icons/mail.svg"
              label="Continue with Email"
            />
          </div>
        </div>

        <div className="mt-auto pt-8 text-center text-sm text-black/60">
          Already have an account?{' '}
          <Link to="/log-in/1" className="font-semibold text-black underline underline-offset-4">
            Log in
          </Link>
        </div>
      </div>
    </Screen>
  )
}

