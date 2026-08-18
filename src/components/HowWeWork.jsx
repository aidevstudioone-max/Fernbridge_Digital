import { motion } from 'framer-motion'
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
  return (
    <section id="how-we-work" className="bg-paper-alt py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[26ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">06 — How we work</span>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            From first call to a site that runs itself.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <div key={s.n}>
              <div className="mb-4 flex items-center gap-3.5">
                <motion.span
                  initial={{ borderColor: 'rgba(26,24,15,.25)', backgroundColor: 'rgba(0,0,0,0)', color: '#6F6A59' }}
                  whileInView={{ borderColor: '#1D5C3C', backgroundColor: '#1D5C3C', color: '#F6F3EA' }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.38 }}
                  className="grid h-9 w-9 flex-none place-items-center rounded-full border-2 font-mono text-[.74rem] font-semibold"
                >
                  {s.n}
                </motion.span>
                <span className="block h-0.5 flex-1 overflow-hidden rounded-full bg-ink/12">
                  <motion.i
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.38 + 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                    style={{ transformOrigin: 'left' }}
                    className="block h-full bg-gradient-to-r from-accent to-gold"
                  />
                </span>
              </div>
              <span className="mb-2 block font-mono text-[.7rem] uppercase tracking-[.08em] text-gold">Step {s.n}</span>
              <h3 className="mb-2 font-display text-[1.1rem] font-semibold">{s.title}</h3>
              <p className="max-w-[34ch] text-[.88rem] text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
