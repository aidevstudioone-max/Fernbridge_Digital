import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu, IconClose } from './Icons.jsx'
import LogoMark from './LogoMark.jsx'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#team', label: 'Team' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setScrolled(scrollTop > 8)
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAnd = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav
        className={`mt-[3px] border-b transition-colors duration-300 ${
          scrolled ? 'border-ink/12 bg-paper/90 shadow-[0_8px_30px_-18px_rgba(26,24,15,0.25)] backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-7 py-[15px]">
          <a href="#top" className="flex items-center gap-[11px] font-display text-[1.08rem] font-bold text-ink">
            <LogoMark />
            Fernbridge Digital
          </a>

          <ul className="hidden items-center gap-7 text-[.9rem] text-muted md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[.86rem] font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark md:inline-flex"
            >
              Get a Free Consultation
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink md:hidden"
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-b border-ink/12 bg-paper md:hidden"
          >
            <ul className="flex flex-col gap-1 px-7 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={closeAnd} className="block py-2 text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeAnd}
                  className="mt-2 block rounded-full bg-accent px-5 py-3 text-center text-[.86rem] font-semibold text-paper"
                >
                  Get a Free Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
