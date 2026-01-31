import { useState } from 'react'
import { Screen } from '../components/layout/Screen'
import { Button } from '../components/ui/Button'
import { CenteredIconButton } from '../components/ui/CenteredIconButton'
import { Checkbox } from '../components/ui/Checkbox'
import { Icon } from '../components/ui/Icon'
import { Input } from '../components/ui/Input'
import { Switch } from '../components/ui/Switch'

export default function ComponentsPage() {
  const [checked, setChecked] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Screen>
      <div className="min-h-[852px] px-5 pb-10 pt-10">
        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Components
        </h1>
        <p className="mt-2 text-sm text-black/60">
          Design-system primitives used across screens.
        </p>

        <div className="mt-10 grid gap-6">
          <Button fullWidth>Button</Button>
          <Button fullWidth variant="secondary">
            Button
          </Button>

          <div className="flex gap-4">
            <CenteredIconButton iconSrc="./assets/icons/facebook.svg" alt="Facebook" />
            <CenteredIconButton iconSrc="./assets/icons/google.svg" alt="Google" />
            <CenteredIconButton iconSrc="./assets/icons/apple.svg" alt="Apple" />
          </div>

          <div className="grid gap-4">
            <Input placeholder="Search" />
            <Input
              label="title"
              placeholder="Text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-black/[0.04] active:bg-black/[0.08]"
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
          </div>

          <div className="flex items-center justify-between">
            <Checkbox checked={checked} onChange={setChecked} label="Checkbox" />
            <Switch checked={toggle} onChange={setToggle} />
          </div>
        </div>
      </div>
    </Screen>
  )
}

