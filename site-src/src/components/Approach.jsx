import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const BARS = [38, 54, 46, 68, 60, 86, 76]

export default function Approach() {
  return (
    <section id="approach" className="border-b border-line bg-ink-alt py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">07 — Our approach</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            A website that is actually looked after.
          </h2>
          <p className="max-w-[48ch] text-[1.02rem] leading-relaxed text-muted text-pretty">
            We work closely with our clients to understand their requirements and build practical digital solutions that solve real business problems — then we keep looking after what we build.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              'Uptime and performance monitored continuously',
              'Security updates and backups handled for you',
              'A plain-language report every month',
              'A real person to call, not a ticket into the void',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[.98rem]">
                <span className="font-bold text-green">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} data-tilt>
          <motion.div
            whileHover={{ rotateX: -2, rotateY: 3 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="overflow-hidden rounded-xl border border-line bg-[#101b29] shadow-[0_40px_80px_-30px_rgba(0,0,0,.75)]"
          >
            <div className="flex items-center gap-2 border-b border-line bg-panel-alt px-[18px] py-[13px]">
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="ml-2.5 font-mono text-[.72rem] text-muted">
                site-report — august 2026<span className="animate-blink">_</span>
              </span>
            </div>
            <div className="p-6">
              {[
                ['Uptime', '99.98%', 'text-green'],
                ['Avg. load time', '1.1s', 'text-green'],
                ['Security updates applied', '4', 'text-green'],
                ['Broken links found & fixed', '2', 'text-accent'],
              ].map(([label, val, cls], i) => (
                <div key={label} className={`flex justify-between py-3 text-[.9rem] ${i < 3 ? 'border-b border-line' : ''}`}>
                  <span className="text-muted">{label}</span>
                  <span className={`font-mono ${cls}`}>{val}</span>
                </div>
              ))}
              <div className="my-5 flex h-[82px] items-end gap-1.5">
                {BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
                    style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                    className={`flex-1 rounded-t-[3px] ${i === 5 ? 'bg-gradient-to-b from-green to-green/20' : 'bg-gradient-to-b from-accent to-accent/20'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[.88rem]">
                <span className="text-muted">Visitors this month</span>
                <span className="font-mono text-green">↑ 18%</span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
