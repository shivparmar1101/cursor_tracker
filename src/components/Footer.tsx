export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] px-5 sm:px-8 md:px-10 py-10 sm:py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span
            className="text-[18px] sm:text-[20px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe&reg;
          </span>
          <span className="text-[20px] sm:text-[22px] text-white select-none" style={{ letterSpacing: '-0.02em' }}>
            &#10038;
          </span>
        </div>
        <div className="flex items-center gap-6 text-[14px] text-white/50">
          <a href="#" className="hover:text-white transition-colors duration-200">Labs</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Studio</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Openings</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Shop</a>
        </div>
        <p className="text-[13px] text-white/30">
          &copy; {new Date().getFullYear()} Mainframe. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
