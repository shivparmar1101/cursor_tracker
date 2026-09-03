const SERVICES = [
  { title: 'Brand Identity', desc: 'Visual systems, logos, and guidelines that define how the world sees you.' },
  { title: 'Web Design & Dev', desc: 'High-performance websites and digital products built with precision.' },
  { title: 'Creative Strategy', desc: 'Positioning, messaging, and roadmaps that drive real business outcomes.' },
  { title: 'Motion & Content', desc: 'Video, animation, and editorial content that captures attention.' },
]

export default function Services() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Services
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-[#0a0a0a] p-8 sm:p-10 md:p-12 group hover:bg-white/[0.03] transition-colors duration-300">
              <h3 className="text-[22px] sm:text-[26px] text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-white/50 group-hover:text-white/70 transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
