import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const BARS = [
  { h: 38, gold: true },
  { h: 54, gold: true },
  { h: 46, gold: true },
  { h: 68, gold: true },
  { h: 60, gold: true },
  { h: 86, gold: false },
  { h: 76, gold: true },
]

const CHECKS = [
  'Uptime and performance monitored continuously',
  'Security updates and backups handled for you',
  'A plain-language report every month',
  'A real person to call, not a ticket into the void',
]

export default function Approach() {
  const now = new Date()
  const reportMonth = `${now.toLocaleString('en-GB', { month: 'long' }).toLowerCase()} ${now.getFullYear()}`

  return (
    <section id="approach" className="bg-paper-alt py-[104px]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-[52px] px-7 lg:grid-cols-2">
        <Reveal>
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">09 — Our approach</span>
          <h2 className="mb-4 max-w-[24ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            A website that is actually looked after.
          </h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted text-pretty">
            We work closely with our clients to understand their requirements and build practical digital solutions that solve real business problems — then we keep looking after what we build.
          </p>
          <ul className="mt-[26px] grid gap-3">
            {CHECKS.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[.98rem]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1D5C3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-none">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ rotateX: -2, rotateY: 3 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="overflow-hidden rounded-[18px] border border-ink bg-dark text-dark-fg shadow-[0_30px_70px_-30px_rgba(26,24,15,.5)]"
          >
            <div className="flex items-center gap-2 border-b border-dark-fg/12 px-[18px] py-[13px]">
              <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
              <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
              <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
              <span className="ml-2 font-mono text-[.72rem] text-dark-soft">
                site-report — {reportMonth}<span className="animate-blink">_</span>
              </span>
            </div>
            <div className="p-5">
              {[
                ['Uptime', '99.98%', 'text-positive'],
                ['Avg. load time', '1.1s', 'text-positive'],
                ['Security updates applied', '4', 'text-positive'],
                ['Broken links found & fixed', '2', 'text-gold-light'],
              ].map(([label, val, cls]) => (
                <div key={label} className="flex justify-between border-b border-dark-fg/10 py-3 text-[.9rem] last:border-b-0">
                  <span className="text-dark-soft">{label}</span>
                  <span className={`font-mono ${cls}`}>{val}</span>
                </div>
              ))}
              <div className="my-5 flex h-[82px] items-end gap-1.5">
                {BARS.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
                    style={{
                      height: `${b.h}%`,
                      transformOrigin: 'bottom',
                      background: b.gold ? 'linear-gradient(180deg, #C4881A, rgba(196,136,26,.15))' : 'linear-gradient(180deg, #5FBF95, rgba(95,191,149,.15))',
                    }}
                    className="flex-1 rounded-t-[3px]"
                  />
                ))}
              </div>
              <div className="flex justify-between text-[.9rem]">
                <span className="text-dark-soft">Visitors this month</span>
                <span className="font-mono text-positive">↑ 18%</span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
