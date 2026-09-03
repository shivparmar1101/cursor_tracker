import { useState } from 'react'

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-white select-none" style={{ letterSpacing: '-0.02em' }}>
            &#10038;
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center text-[23px] text-white">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex items-center">
              <a href="#" className="hover:opacity-60 transition-opacity">{link}</a>
              {i < NAV_LINKS.length - 1 && <span className="mx-1">,</span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#"
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-9 bg-black/90 backdrop-blur-md flex flex-col justify-center px-8 gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
