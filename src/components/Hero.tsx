import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const TYPEWRITER_TEXT = 'Glad you stopped in. Good taste tends to find us. Now, what are we building?'

const PILLS = [
  { label: 'Pitch us an idea', filled: true },
  { label: 'Come work here', filled: true },
  { label: 'Send a brief hello', filled: true },
  { label: 'See how we operate', filled: true },
]

const EMAIL = 'hello@mainframe.co'

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600)
  const [pillsVisible, setPillsVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
  }

  return (
    <section className="relative z-1 h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-xl relative z-10">
        {/* Blurred intro */}
        <div className="pointer-events-none select-none mb-5 sm:mb-6" style={{ filter: 'blur(4px)' }}>
          <p className="text-white leading-[1.3] font-normal" style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}>
            Hey there, meet A.R.I.A,<br />
            Mainframe&rsquo;s Adaptive Response Interface Agent
          </p>
        </div>

        {/* Typewriter */}
        <p
          className="text-white mb-5 sm:mb-6 leading-[1.35] font-normal min-h-[54px]"
          style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] cursor-blink" />
          )}
        </p>

        {/* Action pills */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {PILLS.map((pill) => (
            <button
              key={pill.label}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
            >
              {pill.label}
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 gap-2 sm:gap-3"
          >
            <span>
              Reach us: <span className="underline underline-offset-1">{EMAIL}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
