const STEPS = [
  { num: '01', title: 'Discover', desc: 'We listen, research, and define the problem before touching a pixel.' },
  { num: '02', title: 'Design', desc: 'Concepts take shape through wireframes, prototypes, and visual systems.' },
  { num: '03', title: 'Develop', desc: 'Clean, performant code brings designs to life with pixel-perfect fidelity.' },
  { num: '04', title: 'Deliver', desc: 'Launch, measure, and iterate. The work is never truly done.' },
]

export default function Process() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Process
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {STEPS.map((s) => (
            <div key={s.num} className="bg-[#0a0a0a] p-8 sm:p-10">
              <span className="text-[48px] sm:text-[56px] text-white/10 block mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.num}
              </span>
              <h3 className="text-[20px] sm:text-[22px] text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/50">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
