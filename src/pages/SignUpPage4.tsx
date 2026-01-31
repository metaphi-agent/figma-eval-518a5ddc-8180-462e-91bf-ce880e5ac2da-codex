import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'
import { SegmentedControl } from '../components/ui/SegmentedControl'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function SignUpPage4() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<'sign-up' | 'register'>('sign-up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    return {
      email: touched.email && !isValidEmail(email) ? 'Enter a valid email' : '',
      password:
        touched.password && password.length < 8 ? 'Password must be 8 characters' : ''
    }
  }, [email, password, touched])

  const onSubmit = async () => {
    setTouched({ email: true, password: true })
    if (!isValidEmail(email) || password.length < 8) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsSubmitting(false)
    navigate('/sign-in-options')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-16">
        <TopCorners showStar />

        <div className="text-center font-display text-[26px] font-bold tracking-[-0.2px] text-black">
          App’s name
        </div>

        <div className="mt-6">
          <SegmentedControl
            value={tab}
            onChange={(v) => setTab(v as typeof tab)}
            options={[
              { value: 'sign-up', label: 'Sign up' },
              { value: 'register', label: 'Register' }
            ]}
          />
        </div>

        <div className="mt-8 grid gap-5">
          <Input
            label="Email address"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            error={errors.email || undefined}
          />

          <Input
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            type={showPassword ? 'text' : 'password'}
            error={errors.password || undefined}
            endAdornment={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-black/[0.04] active:bg-black/[0.08]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <Icon
                  src={
                    showPassword
                      ? './assets/icons/eye.svg'
                      : './assets/icons/eye-off.svg'
                  }
                  alt=""
                  className="h-5 w-5 opacity-70"
                />
              </button>
            }
          />

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-black/80 hover:text-black"
            >
              Forgot password?
            </Link>
          </div>

          <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
            Sign in
          </Button>

          <div className="mt-8 text-center text-sm text-black/60">
            Other sign in options
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]"
              aria-label="Facebook"
            >
              <Icon src="./assets/icons/facebook.svg" alt="" className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]"
              aria-label="Google"
            >
              <Icon src="./assets/icons/google.svg" alt="" className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]"
              aria-label="Apple"
            >
              <Icon src="./assets/icons/apple.svg" alt="" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-10 text-center text-sm text-black/60">
            {tab === 'register' ? 'Already have an account?' : 'Already have an account?'}{' '}
            <Link to="/log-in/1" className="font-semibold text-black hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  )
}
