import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { PhoneKeypadMock } from '../components/layout/PhoneKeypadMock'
import { TopCorners } from '../components/layout/TopCorners'
import { OtpInput } from '../components/ui/OtpInput'

export default function EnterCodePhonePage() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [seconds, setSeconds] = useState(20)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (code.replace(/\D/g, '').length === 5) {
      const id = setTimeout(() => navigate('/log-in/phone/code-2'), 450)
      return () => clearTimeout(id)
    }
  }, [code, navigate])

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-0 pt-20">
        <TopCorners backHref="/log-in/phone" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Enter code
        </h1>
        <p className="mt-2 max-w-[320px] text-[15px] leading-[20px] text-[var(--color-muted)]">
          We’ve sent an SMS with an activation code to your phone{' '}
          <span className="text-black">+33 2 94 27 84 11</span>
        </p>

        <div className="mt-8">
          <OtpInput length={5} value={code} onChange={setCode} autoFocus />
        </div>

        <div className="mt-14 text-center text-sm text-black/60">
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

