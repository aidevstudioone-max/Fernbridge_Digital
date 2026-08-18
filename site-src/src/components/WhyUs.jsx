import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconCheck } from './Icons.jsx'

const REASONS = [
  { title: 'Business-Focused Solutions', body: 'We don’t just build software. We understand the business problem first and build the solution around it.' },
  { title: 'Custom, Not Template-Based', body: 'Every solution is designed according to your business requirements.' },
  { title: 'Modern Technology', body: 'We use modern web, AI and automation technologies to create scalable solutions.' },
  { title: 'Affordable for Growing Businesses', body: 'Professional digital solutions without the cost of a large agency.' },
  { title: 'Long-Term Support', body: 'We continue supporting your business after the project goes live.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-paper-alt py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[46ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">04 — Why us</span>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">Why Choose Thikaana?</h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map((r, i) => (
            <motion.article
              key={r.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border border-ink/12 bg-surface p-6 transition-colors hover:border-accent/50 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="mb-4 grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-accent/[0.09] text-accent">
                <IconCheck width={18} height={18} strokeWidth={2.2} />
              </div>
              <h3 className="mb-2 font-display text-[1.02rem] font-semibold leading-snug">{r.title}</h3>
              <p className="text-[.86rem] leading-relaxed text-muted">{r.body}</p>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
