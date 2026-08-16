import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { IconWhatsapp, IconPhone, IconMail, IconArrowRight } from './Icons.jsx'

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-panel-alt to-ink-alt p-10 text-center md:p-16">
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(227,169,63,.16), rgba(227,169,63,0) 65%)' }}
          />
          <h2 className="relative mb-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight">
            Have a Business Idea?
          </h2>
          <p className="relative mb-3 font-display text-[1.2rem] font-semibold text-accent">
            Let's Turn It Into a Digital Solution.
          </p>
          <p className="relative mx-auto mb-9 max-w-[52ch] text-[1rem] leading-relaxed text-muted">
            Whether you need a website, custom application, automation or AI solution, let's discuss what you're trying to achieve.
          </p>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-[3px] bg-accent px-8 py-4 font-bold text-[#140e02] transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation <IconArrowRight width={17} height={17} />
          </a>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-[.82rem] text-muted">
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <IconWhatsapp width={16} height={16} /> WhatsApp
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <IconPhone width={16} height={16} /> Call
            </a>
            <a href="mailto:hello@fernbridgedigital.com" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <IconMail width={16} height={16} /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
