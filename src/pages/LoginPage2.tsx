import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Checkbox } from '../components/ui/Checkbox'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function LoginPage2() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>(
    {}
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    return {
      email:
        touched.email && !isValidEmail(email) ? 'Enter a valid email' : '',
      password:
        touched.password && password.length < 8
          ? 'Password must be at least 8 characters'
          : ''
    }
  }, [email, password, touched.email, touched.password])

  const onSubmit = async () => {
    setTouched({ email: true, password: true })
    if (!isValidEmail(email) || password.length < 8) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsSubmitting(false)
    navigate('/choose-plan')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Hi, Welcome!
        </h1>

        <div className="mt-10 grid gap-5">
          <Input
            label="Email address"
            placeholder="Your email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            error={errors.email || undefined}
          />

          <Input
            label="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
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

          <div className="flex items-center justify-between">
            <Checkbox
              checked={rememberMe}
              onChange={setRememberMe}
              label="Remember me"
            />
            <Link
              to="/forgot-password"
              className="text-sm text-black/80 hover:text-black"
            >
              Forgot password?
            </Link>
          </div>

          <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
            Log in
          </Button>

          <div className="mt-12 text-center text-sm text-black/60">
            Don’t have an account?{' '}
            <Link
              to="/sign-up/2"
              className="font-semibold text-black hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  )
}

