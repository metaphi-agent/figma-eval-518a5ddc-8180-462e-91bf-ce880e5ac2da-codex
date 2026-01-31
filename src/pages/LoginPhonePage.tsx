import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { PhoneKeypadMock } from '../components/layout/PhoneKeypadMock'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Switch } from '../components/ui/Switch'

export default function LoginPhonePage() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [syncContacts, setSyncContacts] = useState(true)

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-0 pt-20">
        <TopCorners backHref="/screens" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Log in
        </h1>
        <p className="mt-2 max-w-[300px] text-[15px] leading-[20px] text-[var(--color-muted)]">
          Please confirm your country code and enter your phone number.
        </p>

        <div className="mt-8">
          <div className="border-t border-black/10" />
          <button
            type="button"
            className="flex w-full items-center gap-3 py-4 text-left"
          >
            <div className="text-xl">🇫🇷</div>
            <div className="text-[15px] font-medium text-black">France</div>
          </button>
          <div className="border-t border-black/10" />

          <div className="flex items-center gap-3 py-4">
            <div className="w-12 text-[15px] font-medium text-black">+33</div>
            <div className="h-5 w-px bg-black/15" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0 00 00 00 00"
              inputMode="tel"
              className="flex-1 bg-transparent text-[16px] text-black outline-none placeholder:text-black/40"
            />
          </div>
          <div className="border-t border-black/10" />

          <div className="flex items-center justify-between py-6">
            <div className="text-[15px] text-black">Sync Contacts</div>
            <Switch checked={syncContacts} onChange={setSyncContacts} />
          </div>

          <Button
            fullWidth
            onClick={() => navigate('/log-in/phone/code')}
            disabled={phone.trim().length < 6}
          >
            Continue
          </Button>
        </div>

        <PhoneKeypadMock />
      </div>
    </Screen>
  )
}

