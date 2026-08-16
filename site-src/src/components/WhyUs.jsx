import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconBriefcase, IconLayers, IconBot, IconTag, IconShield } from './Icons.jsx'

const REASONS = [
  { icon: IconBriefcase, title: 'Business-Focused Solutions', body: 'We don’t just build software. We understand the business problem first and build the solution around it.' },
  { icon: IconLayers, title: 'Custom, Not Template-Based', body: 'Every solution is designed according to your business requirements.' },
  { icon: IconBot, title: 'Modern Technology', body: 'We use modern web, AI and automation technologies to create scalable solutions.' },
  { icon: IconTag, title: 'Affordable for Growing Businesses', body: 'Professional digital solutions without the cost of a large agency.' },
  { icon: IconShield, title: 'Long-Term Support', body: 'We continue supporting your business after the project goes live.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="border-b border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-[46ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">03 — Why us</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Why Choose Fernbridge Digital?
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl border border-line bg-panel p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-green/10 text-green">
                <Icon width={19} height={19} />
              </div>
              <h3 className="mb-2 font-display text-[.98rem] font-semibold leading-snug">{title}</h3>
              <p className="text-[.86rem] leading-relaxed text-muted">{body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
