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

export default function SignUpPage2() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [accepted, setAccepted] = useState(true)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    return {
      username: touched.username && username.trim().length < 2 ? 'Enter a username' : '',
      email: touched.email && !isValidEmail(email) ? 'Enter a valid email' : '',
      password:
        touched.password && password.length < 8 ? 'Password must be 8 characters' : '',
      accepted: touched.accepted && !accepted ? 'Please accept the terms' : ''
    }
  }, [accepted, email, password, touched, username])

  const onSubmit = async () => {
    setTouched({ username: true, email: true, password: true, accepted: true })
    if (
      username.trim().length < 2 ||
      !isValidEmail(email) ||
      password.length < 8 ||
      !accepted
    ) {
      return
    }
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSubmitting(false)
    navigate('/choose-language')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Create account
        </h1>

        <div className="mt-10 grid gap-5">
          <Input
            label="Username"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, username: true }))}
            error={errors.username || undefined}
            autoComplete="username"
          />

          <Input
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            error={errors.email || undefined}
            inputMode="email"
            autoComplete="email"
          />

          <Input
            label="Password"
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
          />

          <Checkbox
            checked={accepted}
            onChange={(v) => {
              setAccepted(v)
              setTouched((t) => ({ ...t, accepted: true }))
            }}
            label="I accept the terms and privacy policy"
          />
          {errors.accepted ? (
            <div className="mt-[-10px] text-sm text-[var(--color-danger)]">
              {errors.accepted}
            </div>
          ) : null}

          <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
            Log in
          </Button>

          <div className="mt-16 text-center text-sm text-black/60">
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

