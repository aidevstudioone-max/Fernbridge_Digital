import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { IconWhatsapp, IconPhone, IconMail, IconArrowRight } from './Icons.jsx'

export default function FinalCTA() {
  return (
    <section className="py-[88px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="relative overflow-hidden rounded-[24px] bg-dark p-10 text-center text-dark-fg md:p-[68px]">
          <motion.div
            aria-hidden
            animate={{ x: [0, 10, 0], y: [0, -14, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-[90px] -top-[90px] h-[280px] w-[280px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(196,136,26,.25), rgba(196,136,26,0) 65%)' }}
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -bottom-[100px] -left-[70px] h-[300px] w-[300px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(29,92,60,.35), rgba(29,92,60,0) 65%)' }}
          />
          <h2 className="relative mb-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">Have a Business Idea?</h2>
          <p className="relative mb-3.5 font-display text-[1.25rem] font-semibold text-gold-light">Let's Turn It Into a Digital Solution.</p>
          <p className="relative mx-auto mb-8 max-w-[52ch] text-[1rem] leading-relaxed text-dark-soft">
            Whether you need a website, custom application, automation or AI solution, let's discuss what you're trying to achieve.
          </p>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2.5 rounded-full bg-gold px-[30px] py-[15px] font-bold text-dark transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation <IconArrowRight width={17} height={17} />
          </a>
          <div className="relative mt-[30px] flex flex-wrap items-center justify-center gap-6 font-mono text-[.82rem] text-dark-soft">
            <a href="https://wa.me/919022683699" target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition-colors hover:text-dark-fg">
              <IconWhatsapp width={16} height={16} /> WhatsApp
            </a>
            <a href="tel:+919022683699" className="inline-flex items-center gap-2 transition-colors hover:text-dark-fg">
              <IconPhone width={16} height={16} /> Call
            </a>
            <a href="mailto:hello@thikaana.com" className="inline-flex items-center gap-2 transition-colors hover:text-dark-fg">
              <IconMail width={16} height={16} /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
