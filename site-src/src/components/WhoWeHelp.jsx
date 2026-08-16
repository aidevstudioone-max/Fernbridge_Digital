import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconBriefcase, IconRocket, IconBuildingStore, IconUsers, IconChart, IconLayers } from './Icons.jsx'

const AUDIENCES = [
  { icon: IconBriefcase, title: 'Small Businesses', body: 'Websites, automation and digital tools to help businesses operate more efficiently.' },
  { icon: IconRocket, title: 'Startups', body: 'MVP development, landing pages and custom applications.' },
  { icon: IconBuildingStore, title: 'Restaurants & Food Businesses', body: 'Websites, ordering systems and business management tools.' },
  { icon: IconUsers, title: 'Professional Services', body: 'Websites, appointment systems and lead-generation solutions.' },
  { icon: IconChart, title: 'Retail & Local Businesses', body: 'Digital presence, customer management and automation.' },
  { icon: IconLayers, title: 'Growing Businesses', body: 'Custom software and dashboards to streamline operations.' },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="border-b border-line bg-ink-alt py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-[46ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">02 — Who we help</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            We Work With
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-muted text-pretty">
            Not "everyone" — specific kinds of businesses, so you know we understand yours.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4, borderColor: 'rgba(227,169,63,.4)' }}
              className="rounded-xl border border-line bg-panel p-6 transition-colors"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon width={19} height={19} />
              </div>
              <h3 className="mb-2 font-display text-[1.02rem] font-semibold">{title}</h3>
              <p className="text-[.88rem] leading-relaxed text-muted">{body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
