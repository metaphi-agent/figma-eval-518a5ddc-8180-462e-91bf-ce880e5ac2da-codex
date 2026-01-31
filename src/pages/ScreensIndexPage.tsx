import { Link } from 'react-router-dom'
import { screens } from '../app/screens'
import { Screen } from '../components/layout/Screen'

export default function ScreensIndexPage() {
  return (
    <Screen>
      <div className="px-5 py-6">
        <h1 className="font-display text-[28px] font-bold tracking-[-0.3px] text-black">
          Screens
        </h1>
        <p className="mt-2 text-sm text-black/60">
          Navigate the full signup/login flow.
        </p>

        <div className="mt-6 grid gap-3">
          {screens.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              className="flex items-center justify-between rounded-[14px] border border-[var(--color-border)] bg-white px-4 py-4 transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]"
            >
              <div className="text-[15px] font-semibold text-black">{s.name}</div>
              <div className="text-sm text-black/40">→</div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-sm text-black/60">
          Tip: routes use HashRouter, so deep links look like{' '}
          <span className="font-mono">#/opening</span>.
        </div>
      </div>
    </Screen>
  )
}

