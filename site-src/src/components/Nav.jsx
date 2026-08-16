import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu, IconClose } from './Icons.jsx'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#team', label: 'Team' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

function LogoMark() {
  return (
    <span className="relative grid h-[26px] w-[26px] grid-cols-2 grid-rows-2 gap-[3px] transition-transform duration-500 group-hover:rotate-90">
      <span className="rounded-[1px] bg-accent" />
      <span className="rounded-[1px] bg-green" />
      <span className="rounded-[1px] bg-muted" />
      <span className="rounded-[1px] border border-line bg-panel-alt" />
    </span>
  )
}

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
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-green shadow-[0_0_14px_rgba(227,169,63,0.55)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav
        className={`border-b transition-colors duration-300 ${
          scrolled ? 'border-line bg-ink/80 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="group flex items-center gap-[11px] font-display text-[1.05rem] font-bold tracking-tight text-fg">
            <LogoMark />
            Fernbridge Digital
          </a>

          <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-[3px] bg-accent px-5 py-2.5 text-sm font-bold text-[#140e02] shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-[0_10px_26px_rgba(227,169,63,0.32)] md:inline-block"
            >
              Get a Free Consultation
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-md border border-line text-fg md:hidden"
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
            className="overflow-hidden border-b border-line bg-ink md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={closeAnd} className="block py-2 text-muted transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeAnd}
                  className="mt-2 block rounded-[3px] bg-accent px-5 py-3 text-center text-sm font-bold text-[#140e02]"
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
