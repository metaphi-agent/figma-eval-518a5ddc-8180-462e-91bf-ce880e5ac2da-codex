import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { CenteredIconButton } from '../components/ui/CenteredIconButton'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function SignUpPage5() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('example@gmail.com')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    const emailError = touched.email && !isValidEmail(email) ? 'Enter a valid email' : ''
    const passwordError =
      touched.password && password.length < 8 ? 'Must be 8 characters' : ''
    const confirmError =
      touched.confirm && confirm !== password ? 'Passwords do not match' : ''
    return { email: emailError, password: passwordError, confirm: confirmError }
  }, [confirm, email, password, touched])

  const onSubmit = async () => {
    setTouched({ email: true, password: true, confirm: true })
    if (!isValidEmail(email) || password.length < 8 || confirm !== password) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsSubmitting(false)
    navigate('/sign-in-options')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Sign up
        </h1>

        <div className="mt-10 grid gap-5">
          <Input
            label="Email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            error={errors.email || undefined}
          />

          <Input
            label="Create a password"
            placeholder="must be 8 characters"
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

          <Input
            label="Confirm password"
            placeholder="repeat password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
            type={showConfirm ? 'text' : 'password'}
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
          />

          <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
            Log in
          </Button>

          <div className="mt-3 flex items-center gap-4">
            <div className="h-px flex-1 bg-black/10" />
            <div className="text-sm text-black/60">Or Register with</div>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="mt-2 flex items-center justify-center gap-4">
            <CenteredIconButton iconSrc="./assets/icons/facebook.svg" alt="Facebook" />
            <CenteredIconButton iconSrc="./assets/icons/google.svg" alt="Google" />
            <CenteredIconButton iconSrc="./assets/icons/apple.svg" alt="Apple" />
          </div>

          <div className="mt-10 text-center text-sm text-black/60">
            Already have an account?{' '}
            <Link to="/log-in/1" className="font-semibold text-black hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  )
}

