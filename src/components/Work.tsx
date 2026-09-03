const WORK = [
  { title: 'Luminary', category: 'Brand Identity', color: '#1a1a2e' },
  { title: 'Vortex Labs', category: 'Web Design', color: '#16213e' },
  { title: 'Aether', category: 'Creative Campaign', color: '#0f3460' },
  { title: 'Nova Studio', category: 'Product Design', color: '#1a1a2e' },
  { title: 'Pulse Media', category: 'Motion Design', color: '#16213e' },
  { title: 'Echo Systems', category: 'Full Stack Dev', color: '#0f3460' },
]

export default function Work() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
            Selected Work
          </p>
          <a href="#" className="text-[14px] text-white/40 underline underline-offset-2 hover:text-white transition-colors duration-200">
            View all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK.map((w) => (
            <a
              key={w.title}
              href="#"
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              style={{ backgroundColor: w.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[12px] uppercase tracking-[0.15em] text-white/60 mb-1">{w.category}</p>
                <p className="text-[18px] sm:text-[20px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>{w.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
