import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'

const TEAM = [
  { name: 'Ankit Prakash', role: 'Operations & Data', bio: '11 years in operations and data across Yext and Amazon. Builds the dashboards and automation behind the scenes.', color: '#E3A93F' },
  { name: 'Irfan Azmi', role: 'Client Success', bio: '8+ years across Amazon, HSBC, and Foundever. Owns client communication and the numbers behind it.', color: '#5FBF95' },
  { name: 'Bhuvanesh Meethal', role: 'Delivery', bio: '5 years in finance and healthcare operations with a 98%+ client satisfaction record. Keeps delivery on schedule.', color: '#93A2B5' },
  { name: 'Chandan Jha', role: 'Engineering Lead', bio: '10+ years building Ruby on Rails platforms across Munich, Stuttgart, and Bengaluru. Leads the build — first line of code to what ships in production.', color: '#7C93FC' },
]

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('')
}

export default function Team() {
  return (
    <section id="team" className="border-b border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-[52ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">06 — Team</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Ex-Amazon, HSBC and Yext operators, now building for smaller businesses.
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-muted text-pretty">
            We spent our careers on the operations, data, and engineering side of companies you already know. Now we build for smaller ones.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <motion.div
              key={m.name}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-line bg-panel p-6 text-center"
            >
              <div
                className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full font-display text-lg font-bold text-[#0a1018]"
                style={{ background: m.color }}
              >
                {initials(m.name)}
              </div>
              <h3 className="font-display text-[1.05rem] font-semibold">{m.name}</h3>
              <p className="mb-3 font-mono text-[.72rem] uppercase tracking-[.06em] text-accent">{m.role}</p>
              <p className="text-[.85rem] leading-relaxed text-muted">{m.bio}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
