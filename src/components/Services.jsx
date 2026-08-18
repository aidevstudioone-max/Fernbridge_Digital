import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconGlobe, IconLaptop, IconBot, IconChart } from './Icons.jsx'

const SERVICES = [
  {
    icon: IconGlobe,
    title: 'Website Development',
    body: 'Business websites, landing pages, corporate sites, portfolios, restaurant sites, e-commerce and full redesigns.',
    benefit: 'Build a professional online presence that helps customers discover and trust your business.',
    tone: 'accent',
  },
  {
    icon: IconLaptop,
    title: 'Custom Web Applications',
    body: 'Business dashboards, customer management systems, order management, booking systems, CRMs and custom portals.',
    benefit: 'We build custom web applications around the way your business actually works.',
    tone: 'accent',
  },
  {
    icon: IconBot,
    title: 'AI & Automation',
    body: 'AI-powered tools, workflow automation, data automation, report generation, AI assistants and repetitive-task automation.',
    benefit: 'Reduce manual work and automate repetitive business processes with AI and modern automation tools.',
    tone: 'indigo',
  },
  {
    icon: IconChart,
    title: 'Data & Business Solutions',
    body: 'Dashboards, reporting systems, business analytics, data processing and Google Sheets / Excel automation.',
    benefit: 'Turn your business data into simple dashboards and actionable insights.',
    tone: 'accent',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[46ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">01 — What we do</span>
          <h2 className="mb-4 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            Four services. Built to solve real business problems.
          </h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
            Not a pile of technologies — four clear ways we help a business run better online.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, body, benefit, tone }) => {
            const isIndigo = tone === 'indigo'
            return (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className={`group rounded-[18px] border bg-surface p-[30px] transition-colors duration-300 ${
                  isIndigo ? 'border-indigo/28 hover:border-indigo/55' : 'border-ink/12 hover:border-accent/50'
                }`}
              >
                <div
                  className={`mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                    isIndigo ? 'bg-indigo/[0.09] text-indigo' : 'bg-accent/[0.09] text-accent'
                  }`}
                >
                  <Icon width={22} height={22} strokeWidth={1.7} />
                </div>
                <h3 className="mb-2.5 font-display text-[1.2rem] font-semibold">{title}</h3>
                <p className="text-[.93rem] leading-relaxed text-muted">{body}</p>
                <p className="mt-4 border-t border-ink/10 pt-4 text-[.88rem] font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
