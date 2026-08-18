import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { IconChevronDown } from './Icons.jsx'

const FAQS = [
  { q: 'How much does a website cost?', a: 'Website builds start from ₹35,000, depending on the number of pages, functionality and integrations required. Ongoing care plans start from ₹1,999/month. Contact us for a free consultation and an exact quote.' },
  { q: 'How long does a website take?', a: 'Most business websites are completed within a few weeks, depending on requirements and how quickly content and feedback come back to us.' },
  { q: 'Do you provide maintenance?', a: 'Yes. Every project can go under one of our care plans — monitoring, backups, security updates and a monthly report, so nothing goes stale after launch.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We can redesign existing websites and improve their performance, usability and appearance without starting from zero.' },
  { q: 'Do you build custom software?', a: 'Yes. Beyond websites, we build custom web applications, dashboards, AI tools and business automation — see our Custom Web Applications and AI & Automation services above.' },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/16">
      <button onClick={onToggle} className="flex min-h-11 w-full items-center justify-between gap-4 py-[22px] text-left">
        <span className="font-display text-[1.05rem] font-semibold">{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-gold">
          <IconChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-[22px] pr-8 text-[.94rem] leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-paper-alt py-[104px]">
      <div className="mx-auto max-w-[820px] px-7">
        <Reveal className="mb-10">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">10 — FAQ</span>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">Common questions.</h2>
        </Reveal>
        <Reveal delay={0.1} className="border-t border-ink/16">
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
