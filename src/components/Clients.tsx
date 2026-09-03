const CLIENTS = ['Google', 'Spotify', 'Stripe', 'Notion', 'Figma', 'Linear', 'Vercel', 'Arc']

export default function Clients() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Trusted By
        </p>
      </div>
      <div className="flex gap-12 sm:gap-16 md:gap-20 items-center justify-center flex-wrap max-w-6xl mx-auto opacity-40">
        {CLIENTS.map((name) => (
          <span
            key={name}
            className="text-[20px] sm:text-[24px] md:text-[28px] text-white whitespace-nowrap"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
