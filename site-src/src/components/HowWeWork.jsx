import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from './Reveal.jsx'

const STEPS = [
  { n: '01', title: 'Discovery', body: 'We understand your business, requirements and goals.' },
  { n: '02', title: 'Planning', body: 'We define the solution, features, timeline and cost.' },
  { n: '03', title: 'Design', body: 'We create the user experience and interface.' },
  { n: '04', title: 'Development', body: 'We build and test the solution, with check-ins along the way.' },
  { n: '05', title: 'Launch', body: 'We deploy the final product and make it available to your customers.' },
  { n: '06', title: 'Support', body: 'We keep monitoring, maintaining and reporting — ongoing, not a one-time handoff.' },
]

export default function HowWeWork() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 60%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })

  return (
    <section id="how-we-work" className="border-b border-line bg-ink-alt py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 max-w-[46ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">05 — How we work</span>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            From first call to a site that runs itself.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative">
          <div className="absolute left-0 right-0 top-[9px] hidden h-[2px] bg-line md:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-0 right-0 top-[9px] hidden h-[2px] origin-left bg-gradient-to-r from-accent to-green md:block"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pt-6"
              >
                <span className="absolute left-0 top-0 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-accent md:block" />
                <span className="mb-3 block font-mono text-[.74rem] text-accent">STEP {s.n}</span>
                <h3 className="mb-2 font-display text-[1.05rem] font-semibold">{s.title}</h3>
                <p className="text-[.88rem] leading-relaxed text-muted">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
