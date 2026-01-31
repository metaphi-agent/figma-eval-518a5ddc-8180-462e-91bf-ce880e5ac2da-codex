import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const ScreensIndexPage = lazy(() => import('./pages/ScreensIndexPage'))

const OpeningPage = lazy(() => import('./pages/OpeningPage'))
const LoginPage1 = lazy(() => import('./pages/LoginPage1'))
const LoginPage2 = lazy(() => import('./pages/LoginPage2'))

const SignUpPage1 = lazy(() => import('./pages/SignUpPage1'))
const SignUpPage2 = lazy(() => import('./pages/SignUpPage2'))
const SignUpPage3 = lazy(() => import('./pages/SignUpPage3'))
const SignUpPage4 = lazy(() => import('./pages/SignUpPage4'))
const SignUpPage5 = lazy(() => import('./pages/SignUpPage5'))
const SignUpPage6 = lazy(() => import('./pages/SignUpPage6'))

const SignInOptionsPage = lazy(() => import('./pages/SignInOptionsPage'))

const LoginPhonePage = lazy(() => import('./pages/LoginPhonePage'))
const EnterCodePhonePage = lazy(() => import('./pages/EnterCodePhonePage'))
const WrongCodePhonePage = lazy(() => import('./pages/WrongCodePhonePage'))
const VerifyPhonePage = lazy(() => import('./pages/VerifyPhonePage'))

const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))
const ForgotPasswordCodePage = lazy(() => import('./pages/ForgotPasswordCodePage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))
const PasswordChangedPage = lazy(() => import('./pages/PasswordChangedPage'))

const ChooseLanguagePage = lazy(() => import('./pages/ChooseLanguagePage'))
const ChoosePlanPage = lazy(() => import('./pages/ChoosePlanPage'))
const ComponentsPage = lazy(() => import('./pages/ComponentsPage'))

function Loading() {
  return (
    <div className="min-h-screen bg-neutral-100 px-4 py-8">
      <div className="mx-auto w-full max-w-[393px] bg-white px-5 py-6 sm:rounded-[28px] sm:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
        <div className="h-4 w-24 animate-pulse rounded bg-black/10" />
        <div className="mt-4 h-10 w-full animate-pulse rounded bg-black/10" />
        <div className="mt-3 h-10 w-full animate-pulse rounded bg-black/10" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/opening" replace />} />
        <Route path="/screens" element={<ScreensIndexPage />} />

        <Route path="/opening" element={<OpeningPage />} />
        <Route path="/log-in/1" element={<LoginPage1 />} />
        <Route path="/log-in/2" element={<LoginPage2 />} />

        <Route path="/sign-up/1" element={<SignUpPage1 />} />
        <Route path="/sign-up/2" element={<SignUpPage2 />} />
        <Route path="/sign-up/3" element={<SignUpPage3 />} />
        <Route path="/sign-up/4" element={<SignUpPage4 />} />
        <Route path="/sign-up/5" element={<SignUpPage5 />} />
        <Route path="/sign-up/6" element={<SignUpPage6 />} />

        <Route path="/sign-in-options" element={<SignInOptionsPage />} />

        <Route path="/log-in/phone" element={<LoginPhonePage />} />
        <Route path="/log-in/phone/code" element={<EnterCodePhonePage />} />
        <Route path="/log-in/phone/code-wrong" element={<WrongCodePhonePage />} />
        <Route path="/log-in/phone/code-2" element={<VerifyPhonePage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/forgot-password/code" element={<ForgotPasswordCodePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password-changed" element={<PasswordChangedPage />} />

        <Route path="/choose-language" element={<ChooseLanguagePage />} />
        <Route path="/choose-plan" element={<ChoosePlanPage />} />
        <Route path="/components" element={<ComponentsPage />} />

        <Route path="*" element={<Navigate to="/screens" replace />} />
      </Routes>
    </Suspense>
  )
}
