import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

type Plan = {
  id: 'monthly' | 'annual' | 'trial'
  title: string
  subtitle: string
}

const plans: Plan[] = [
  { id: 'monthly', title: 'Monthly', subtitle: '$29,99 / mo' },
  { id: 'annual', title: 'Annual', subtitle: '$15,99 / mo ($192 / year)' },
  { id: 'trial', title: 'Free trial', subtitle: '1 month free' }
]

function PlanRow({
  plan,
  selected,
  onSelect
}: {
  plan: Plan
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button type="button" onClick={onSelect} className="w-full text-left">
      <div
        className={
          selected
            ? 'flex items-center justify-between rounded-[15px] border border-black px-5 py-4'
            : 'flex items-center justify-between rounded-[15px] border border-[var(--color-border)] px-5 py-4'
        }
      >
        <div>
          <div className="text-[15px] font-semibold text-black">{plan.title}</div>
          <div className="mt-1 text-[15px] text-black/60">{plan.subtitle}</div>
        </div>
        <Icon
          src={
            selected ? './assets/icons/radio-on.svg' : './assets/icons/radio-off.svg'
          }
          alt=""
          className="h-5 w-5"
        />
      </div>
    </button>
  )
}

export default function ChoosePlanPage() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState<Plan['id']>('monthly')

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners backHref="/choose-language" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Choose your plan
        </h1>
        <p className="mt-2 max-w-[340px] text-[15px] leading-[20px] text-[var(--color-muted)]">
          To complete the sign up process, please make the payment
        </p>

        <div className="mt-10 grid gap-4">
          {plans.map((p) => (
            <PlanRow
              key={p.id}
              plan={p}
              selected={p.id === selectedId}
              onSelect={() => setSelectedId(p.id)}
            />
          ))}
        </div>

        <div className="mt-44">
          <Button fullWidth onClick={() => navigate('/log-in/phone/code')}>
            Send code
          </Button>
        </div>
      </div>
    </Screen>
  )
}

