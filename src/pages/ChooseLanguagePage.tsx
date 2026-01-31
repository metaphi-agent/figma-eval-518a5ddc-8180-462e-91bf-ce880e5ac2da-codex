import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/layout/Screen'
import { TopCorners } from '../components/layout/TopCorners'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

const allLanguages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italian', flag: '🇮🇹' },
  { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺' }
]

export default function ChooseLanguagePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('en')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allLanguages
    return allLanguages.filter((l) => l.label.toLowerCase().includes(q))
  }, [query])

  return (
    <Screen>
      <div className="relative min-h-[852px] px-5 pb-10 pt-20">
        <TopCorners backHref="/screens" showStar />

        <h1 className="font-display text-[30px] font-bold tracking-[-0.3px] text-black">
          Choose the language
        </h1>
        <p className="mt-2 max-w-[340px] text-[15px] leading-[20px] text-[var(--color-muted)]">
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </p>

        <div className="mt-10">
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 opacity-70">
              <Icon src="./assets/icons/search.svg" alt="" className="h-5 w-5" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="h-14 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white pl-12 pr-4 text-[16px] text-black outline-none placeholder:text-black/40 focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="relative mt-4">
            <div className="max-h-[320px] overflow-auto pr-2">
              {filtered.map((l) => {
                const active = l.code === selected
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setSelected(l.code)}
                    className="w-full text-left"
                  >
                    <div
                      className={
                        active
                          ? 'flex items-center gap-4 rounded-[10px] bg-[var(--color-panel)] px-4 py-3'
                          : 'flex items-center gap-4 px-4 py-3'
                      }
                    >
                      <div className="text-xl">{l.flag}</div>
                      <div className="flex-1 text-[15px] font-medium text-black/70">
                        {l.label}
                      </div>
                      {active ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                          <Icon
                            src="./assets/icons/checkbox-on.svg"
                            alt=""
                            className="h-4 w-4 invert"
                          />
                        </div>
                      ) : null}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="pointer-events-none absolute right-0 top-2 h-[77px] w-[3px] rounded-full bg-black/50" />
          </div>

          <div className="mt-10">
            <Button fullWidth onClick={() => navigate('/choose-plan')}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </Screen>
  )
}

