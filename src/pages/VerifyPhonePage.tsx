import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { PhoneKeypadMock } from '../components/layout/PhoneKeypadMock'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { OtpInput } from '../components/ui/OtpInput'

export default function VerifyPhonePage() {
  const navigate = useNavigate()
  const [code, setCode] = useState('25017')
  const [seconds, setSeconds] = useState(20)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-0 pt-20">
        <TopCorners backHref="/log-in/phone/code" showStar />

        <h1 className="text-center font-display text-[28px] font-bold leading-[34px] tracking-[-0.2px] text-black">
          Verify your phone
          <br />
          number
        </h1>
        <p className="mt-3 text-center text-[15px] leading-[20px] text-[var(--color-muted)]">
          We’ve sent an SMS with an activation code to your phone{' '}
          <span className="text-black">+33 2 94 27 84 11</span>
        </p>

        <div className="mt-8 flex justify-center">
          <OtpInput length={5} value={code} onChange={setCode} />
        </div>

        <div className="mt-8 text-center text-sm text-black/60">
          I didn’t receive a code{' '}
          <button
            type="button"
            className="font-semibold text-black hover:underline"
            disabled={seconds !== 0}
            onClick={() => setSeconds(20)}
          >
            Resend
          </button>
        </div>

        <div className="mt-8">
          <Button
            fullWidth
            onClick={() => navigate('/choose-language')}
            disabled={code.replace(/\D/g, '').length !== 5}
          >
            Verify
          </Button>
        </div>

        <PhoneKeypadMock />
      </div>
    </Screen>
  )
}

