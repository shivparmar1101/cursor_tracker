export default function Contact() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white/40 mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Contact
        </p>
        <h2 className="text-[32px] sm:text-[44px] md:text-[56px] text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Let&rsquo;s build something<br />remarkable together.
        </h2>
        <a
          href="mailto:hello@mainframe.co"
          className="inline-flex items-center justify-center bg-white text-black rounded-full text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-4 hover:bg-white/80 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          hello@mainframe.co
        </a>
      </div>
    </section>
  )
}
