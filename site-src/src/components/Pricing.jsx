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
    href: '#contact',
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹4,999',
    unit: '/mo care',
    desc: 'For a business that is actively growing and wants the site to keep pace.',
    features: ['Everything in Starter', 'Faster turnaround on content edits', 'Quarterly performance review call', 'Priority support'],
    cta: 'Get a Free Consultation',
    href: '#contact',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    unit: '',
    desc: 'For multiple sites, e-commerce, custom applications, or automation layered on top of the site.',
    features: ['Everything in Growth', 'Custom web apps & dashboards', 'AI & automation add-ons', 'Dedicated point of contact'],
    cta: "Let's discuss your requirements",
    href: '#contact',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-ink-alt py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-4 max-w-[52ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">08 — Pricing</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Simple pricing, built around care.
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-muted text-pretty">
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
              className={`relative flex flex-col rounded-xl border p-8 ${
                p.featured ? 'border-accent/50 bg-panel-alt shadow-[0_20px_60px_-25px_rgba(227,169,63,.35)]' : 'border-line bg-panel'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[.65rem] font-bold uppercase tracking-wide text-[#140e02]">
                  Most Popular
                </span>
              )}
              <div className="mb-2 font-display text-[1.06rem] font-semibold">{p.name}</div>
              <div className="font-display text-[2.3rem] font-bold tracking-tight">
                {p.price}
                <span className="text-[.88rem] font-normal text-muted">{p.unit}</span>
              </div>
              <p className="my-3 flex-1 text-[.88rem] leading-relaxed text-muted">{p.desc}</p>
              <ul className="mb-7 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[.86rem]">
                    <IconCheck width={15} height={15} className="mt-0.5 shrink-0 text-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`rounded-[3px] py-3 text-center text-[.9rem] font-semibold transition-colors ${
                  p.featured ? 'bg-accent text-[#140e02] hover:brightness-105' : 'border border-line text-fg hover:border-muted/40 hover:bg-white/5'
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
