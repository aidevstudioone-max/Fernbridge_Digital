import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'

const AUDIENCES = [
  { n: '/01', title: 'Small Businesses', body: 'Websites, automation and digital tools to help businesses operate more efficiently.' },
  { n: '/02', title: 'Startups', body: 'MVP development, landing pages and custom applications.' },
  { n: '/03', title: 'Restaurants & Food Businesses', body: 'Websites, ordering systems and business management tools.' },
  { n: '/04', title: 'Professional Services', body: 'Websites, appointment systems and lead-generation solutions.' },
  { n: '/05', title: 'Retail & Local Businesses', body: 'Digital presence, customer management and automation.' },
  { n: '/06', title: 'Growing Businesses', body: 'Custom software and dashboards to streamline operations.' },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[46ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">03 — Who we help</span>
          <h2 className="mb-4 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">We Work With</h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
            Not "everyone" — specific kinds of businesses, so you know we understand yours.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map(({ n, title, body }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-ink/12 bg-surface p-6 transition-colors hover:border-gold/55"
            >
              <span className="mb-3 inline-block font-mono text-[.68rem] text-gold">{n}</span>
              <h3 className="mb-2 font-display text-[1.04rem] font-semibold leading-snug">{title}</h3>
              <p className="text-[.87rem] leading-relaxed text-muted">{body}</p>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
