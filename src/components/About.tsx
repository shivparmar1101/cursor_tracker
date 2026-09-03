export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          About
        </p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] text-white font-normal" style={{ fontFamily: 'var(--font-heading)' }}>
            We craft digital experiences that move people and markets.
          </h2>
          <div className="flex flex-col gap-6 text-[16px] sm:text-[18px] leading-[1.6] text-white/60">
            <p>
              Mainframe is a creative agency built for brands that refuse to blend in. We combine strategy, design, and technology to create work that resonates.
            </p>
            <p>
              From early-stage startups to global enterprises, we partner with teams who want to make a lasting impression. No templates. No shortcuts. Just thoughtful, intentional craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
