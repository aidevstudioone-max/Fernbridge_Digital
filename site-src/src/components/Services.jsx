import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconGlobe, IconLaptop, IconBot, IconChart } from './Icons.jsx'

const SERVICES = [
  {
    icon: IconGlobe,
    title: 'Website Development',
    body: 'Business websites, landing pages, corporate sites, portfolios, restaurant sites, e-commerce and full redesigns.',
    benefit: 'Build a professional online presence that helps customers discover and trust your business.',
  },
  {
    icon: IconLaptop,
    title: 'Custom Web Applications',
    body: 'Business dashboards, customer management systems, order management, booking systems, CRMs and custom portals.',
    benefit: 'We build custom web applications around the way your business actually works.',
  },
  {
    icon: IconBot,
    title: 'AI & Automation',
    body: 'AI-powered tools, workflow automation, data automation, report generation, AI assistants and repetitive-task automation.',
    benefit: 'Reduce manual work and automate repetitive business processes with AI and modern automation tools.',
  },
  {
    icon: IconChart,
    title: 'Data & Business Solutions',
    body: 'Dashboards, reporting systems, business analytics, data processing and Google Sheets / Excel automation.',
    benefit: 'Turn your business data into simple dashboards and actionable insights.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-[46ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">01 — What we do</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Four services. Built to solve real business problems.
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-muted text-pretty">
            Not a pile of technologies — four clear ways we help a business run better online.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, body, benefit }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group rounded-xl border border-line bg-panel p-8 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-line bg-panel-alt text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon />
              </div>
              <h3 className="mb-2.5 font-display text-[1.2rem] font-semibold">{title}</h3>
              <p className="mb-4 text-[.94rem] leading-relaxed text-muted">{body}</p>
              <p className="border-t border-line pt-4 text-[.88rem] font-medium leading-relaxed text-fg/90">{benefit}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
