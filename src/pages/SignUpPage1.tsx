import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function SignUpPage1() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    const emailError = touched.email && !isValidEmail(email) ? 'Enter a valid email' : ''
    const passwordError =
      touched.password && password.length < 8 ? 'Must be at least 8 characters' : ''
    const confirmError =
      touched.confirm && confirm !== password ? 'Passwords do not match' : ''
    return { email: emailError, password: passwordError, confirm: confirmError }
  }, [confirm, email, password, touched])

  const onSubmit = async () => {
    setTouched({ email: true, password: true, confirm: true })
    if (!isValidEmail(email) || password.length < 8 || confirm !== password) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSubmitting(false)
    navigate('/choose-plan')
  }

  return (
    <Screen>
      <div className="flex min-h-[852px] flex-col px-5 py-10">
        <div className="rounded-[var(--radius-xl)] bg-[#EEF3FF] px-5 pb-6 pt-8">
          <div className="flex justify-center">
            <img
              src="./assets/illustrations/hero-sparkles.svg"
              alt=""
              className="h-[180px] w-[220px] select-none"
              draggable={false}
            />
          </div>

          <h1 className="mt-5 text-center font-display text-[30px] font-bold tracking-[-0.3px] text-black">
            Create account
          </h1>

          <div className="mt-6 grid gap-4">
            <Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              autoComplete="email"
              inputMode="email"
              error={errors.email || undefined}
              className="bg-white"
            />

            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
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
              className="bg-white"
            />

            <Input
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              error={errors.confirm || undefined}
              endAdornment={
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-black/[0.04] active:bg-black/[0.08]"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  <Icon
                    src={
                      showConfirm
                        ? './assets/icons/eye.svg'
                        : './assets/icons/eye-off.svg'
                    }
                    alt=""
                    className="h-5 w-5 opacity-70"
                  />
                </button>
              }
              className="bg-white"
            />

            <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
              Create account
            </Button>
          </div>

          <div className="mt-6 text-center text-xs leading-5 text-black/60">
            By creating an account or signing you agree to our{' '}
            <a href="#" className="font-semibold text-black underline underline-offset-4">
              Terms and Conditions
            </a>
          </div>
        </div>

        <div className="mt-auto pt-6 text-center text-sm text-black/60">
          <span>Already have an account? </span>
          <Link to="/log-in/1" className="font-semibold text-black hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </Screen>
  )
}

