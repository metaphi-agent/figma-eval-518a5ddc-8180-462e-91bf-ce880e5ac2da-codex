import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    const passwordError =
      touched.password && password.length < 8 ? 'Must be 8 characters' : ''
    const confirmError =
      touched.confirm && confirm !== password ? 'Passwords do not match' : ''
    return { password: passwordError, confirm: confirmError }
  }, [confirm, password, touched])

  const onSubmit = async () => {
    setTouched({ password: true, confirm: true })
    if (password.length < 8 || confirm !== password) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsSubmitting(false)
    navigate('/password-changed')
  }

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners backHref="/forgot-password/code" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Reset password
        </h1>
        <p className="mt-2 text-[15px] leading-[20px] text-[var(--color-muted)]">
          Please type something you’ll remember
        </p>

        <div className="mt-10 grid gap-5">
          <Input
            label="New password"
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
            label="Confirm new password"
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
            Reset password
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

