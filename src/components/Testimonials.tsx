const TESTIMONIALS = [
  { quote: 'Mainframe transformed our digital presence entirely. The attention to craft is unmatched.', name: 'Sarah Chen', role: 'CEO, Luminary' },
  { quote: 'They dont just design, they think. Every decision was intentional and backed by strategy.', name: 'Marcus Webb', role: 'CTO, Vortex Labs' },
  { quote: 'Working with Mainframe felt like adding a core team member, not hiring an agency.', name: 'Priya Sharma', role: 'Founder, Aether' },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Testimonials
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#0a0a0a] p-8 sm:p-10 flex flex-col justify-between">
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/70 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[15px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</p>
                <p className="text-[13px] text-white/40 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
