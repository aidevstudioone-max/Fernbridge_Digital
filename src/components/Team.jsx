import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import ankitPhoto from '../assets/team/ankit.jpg'
import irfanPhoto from '../assets/team/irfan.jpg'
import bhuvaneshPhoto from '../assets/team/bhuvanesh.jpg'
import chandanPhoto from '../assets/team/chandan.jpg'

const TEAM = [
  { name: 'Ankit Prakash', role: 'Founder', bio: '11 years in operations and data across Yext and Amazon. Builds the dashboards and automation behind the scenes.', color: '#1D5C3C', photo: ankitPhoto },
  { name: 'Irfan Azmi', role: 'Director – Customer Success', bio: '8+ years across Amazon, HSBC, and Foundever. Owns client communication and the numbers behind it.', color: '#C4881A', photo: irfanPhoto },
  { name: 'Bhuvanesh Meethal', role: 'Director – Client Relations', bio: '5 years in finance and healthcare operations with a 98%+ client satisfaction record. Keeps delivery on schedule.', color: '#4F46E5', photo: bhuvaneshPhoto },
  { name: 'Chandan Jha', role: 'Chief Technology Officer', bio: '10+ years building Ruby on Rails platforms across Munich, Stuttgart, and Bengaluru. Leads the build — first line of code to what ships in production.', color: '#16150E', photo: chandanPhoto },
]

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('')
}

export default function Team() {
  return (
    <section id="team" className="py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[28ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">08 — Team</span>
          <h2 className="mb-4 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            Experts from Amazon, HSBC and Yext, now building for smaller businesses.
          </h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
            We spent our careers on the operations, data, and engineering side of companies you already know. Now we build for smaller ones.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <motion.article
              key={m.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-[18px] border border-ink/12 bg-surface p-7 text-center transition-colors hover:border-accent/50"
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full font-display text-[1.1rem] font-bold text-paper"
                  style={{ background: m.color }}
                >
                  {initials(m.name)}
                </div>
              )}
              <h3 className="font-display text-[1.1rem] font-semibold">{m.name}</h3>
              <p className="mb-3 font-mono text-[.7rem] uppercase tracking-[.06em] text-gold">{m.role}</p>
              <p className="text-[.85rem] text-muted">{m.bio}</p>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
