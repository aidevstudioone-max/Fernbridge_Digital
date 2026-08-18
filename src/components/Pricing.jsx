import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconCheck } from './Icons.jsx'

const PLANS = [
  {
    name: 'Starter',
    price: '₹1,999',
    unit: '/mo care',
    desc: 'For a single small-business site that needs to stay up and current.',
    features: ['Website build quoted separately, from ₹35,000', 'Uptime & performance monitoring', 'Security updates & backups', 'Monthly plain-language report'],
    cta: 'Get a Free Consultation',
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹4,999',
    unit: '/mo care',
    desc: 'For a business that is actively growing and wants the site to keep pace.',
    features: ['Everything in Starter', 'Faster turnaround on content edits', 'Quarterly performance review call', 'Priority support'],
    cta: 'Get a Free Consultation',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    unit: '',
    desc: 'For multiple sites, e-commerce, custom applications, or automation layered on top of the site.',
    features: ['Everything in Growth', 'Custom web apps & dashboards', 'AI & automation add-ons', 'Dedicated point of contact'],
    cta: "Let's discuss your requirements",
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-[104px]">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-4 max-w-[26ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">09 — Pricing</span>
          <h2 className="mb-4 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            Simple pricing, built around care.
          </h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
            Every plan includes monitoring and a real person to call. Start with a build, or bring an existing site under care.
          </p>
        </Reveal>
        <p className="mb-10 font-mono text-[.74rem] text-muted-dim">
          Care-plan rates shown, billed monthly. Website builds are quoted separately, starting from ₹35,000.
        </p>

        <RevealStagger className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-[18px] p-8 ${
                p.featured ? 'border-[1.5px] border-accent/60 bg-surface shadow-[0_24px_60px_-28px_rgba(29,92,60,.4)]' : 'border border-ink/12 bg-surface'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-[13px] left-8 rounded-full bg-accent px-3 py-1 font-mono text-[.65rem] font-bold uppercase tracking-wide text-paper">
                  Most Popular
                </span>
              )}
              <div className="mb-2 font-display text-[1.06rem] font-semibold">{p.name}</div>
              <div className="font-display text-[2.3rem] font-bold tracking-tight">
                {p.price}
                <small className="text-[.88rem] font-normal text-muted">{p.unit}</small>
              </div>
              <p className="my-3 flex-1 text-[.88rem] leading-relaxed text-muted">{p.desc}</p>
              <ul className="mb-7 grid gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[.86rem]">
                    <IconCheck width={15} height={15} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.6} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`rounded-full py-3.5 text-center text-[.9rem] font-semibold transition-colors ${
                  p.featured ? 'bg-accent text-paper hover:bg-accent-dark' : 'border-[1.5px] border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.04]'
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
