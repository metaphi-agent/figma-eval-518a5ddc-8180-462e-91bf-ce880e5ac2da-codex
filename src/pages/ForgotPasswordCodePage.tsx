import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { PhoneKeypadMock } from '../components/layout/PhoneKeypadMock'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { OtpInput } from '../components/ui/OtpInput'

export default function ForgotPasswordCodePage() {
  const navigate = useNavigate()
  const [code, setCode] = useState('822')
  const [seconds, setSeconds] = useState(20)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-0 pt-20">
        <TopCorners backHref="/forgot-password" showStar />

        <h1 className="font-display text-[30px] font-bold leading-[34px] tracking-[-0.3px] text-black">
          Please check your
          <br />
          email
        </h1>
        <p className="mt-3 text-[15px] leading-[20px] text-[var(--color-muted)]">
          We’ve sent a code to <span className="font-medium text-black">helloworld@gmail.com</span>
        </p>

        <div className="mt-10 flex justify-center">
          <OtpInput length={4} value={code} onChange={setCode} autoFocus />
        </div>

        <div className="mt-8">
          <Button
            fullWidth
            onClick={() => navigate('/reset-password')}
            disabled={code.replace(/\D/g, '').length !== 4}
          >
            Verify
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-black/60">
          <button
            type="button"
            className="font-medium text-black/70 hover:text-black"
            disabled={seconds !== 0}
            onClick={() => setSeconds(20)}
          >
            Send code again
          </button>{' '}
          <span className="text-black/50">
            {String(Math.floor(seconds / 60)).padStart(2, '0')}:
            {String(seconds % 60).padStart(2, '0')}
          </span>
        </div>

        <PhoneKeypadMock />
      </div>
    </Screen>
  )
}

