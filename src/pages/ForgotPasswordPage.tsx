import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const error = useMemo(() => {
    if (!touched) return ''
    return isValidEmail(email) ? '' : 'Enter a valid email'
  }, [email, touched])

  const onSubmit = async () => {
    setTouched(true)
    if (!isValidEmail(email)) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSubmitting(false)
    navigate('/forgot-password/code')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners backHref="/log-in/1" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Forgot password?
        </h1>
        <p className="mt-2 max-w-[340px] text-[15px] leading-[20px] text-[var(--color-muted)]">
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </p>

        <div className="mt-10 grid gap-5">
          <Input
            label="Email address"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            error={error || undefined}
            inputMode="email"
            autoComplete="email"
          />

          <Button fullWidth onClick={onSubmit} isLoading={isSubmitting}>
            Send code
          </Button>
        </div>

        <div className="mt-auto pt-24 text-center text-sm text-black/60">
          Remember password?{' '}
          <Link to="/log-in/1" className="font-semibold text-black hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </Screen>
  )
}

