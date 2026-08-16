import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconArrowRight } from './Icons.jsx'

const CLIENTS = [
  { name: 'Pav Mantra', url: 'https://aidevstudioone-max.github.io/pav-mantra-site/', desc: 'Food brand site — menu, story, and ordering enquiries in one place.', tags: ['Menu', 'Brand story', 'Enquiries'] },
  { name: 'Apoorva Auto Parts', url: 'https://aidevstudioone-max.github.io/apoorva-auto-parts-site/', desc: 'Auto parts supplier — catalogue, coverage, and a direct enquiry line.', tags: ['Catalogue', 'Coverage area', 'Enquiries'] },
  { name: 'Hangout Cafe', url: 'https://aidevstudioone-max.github.io/hangout-cafe/', desc: 'Cafe & restaurant site — menu, location, and veg / non-veg dine-in details.', tags: ['Menu', 'Location', 'Dine-in info'] },
  { name: 'Srima Diagnostic & Medical', url: 'https://aidevstudioone-max.github.io/Srima/', desc: 'Diagnostic centre & pharmacy — testing, reports, and prescription counsel.', tags: ['Test listings', 'Reports', 'Pharmacy'] },
]

const PRODUCTS = [
  { name: 'Roomly', url: 'https://aidevstudioone-max.github.io/Roomly/', desc: 'Hotel room booking & management — real-time availability, instant bookings, occupancy dashboard.' },
  { name: 'Staffly', url: 'https://aidevstudioone-max.github.io/Staffly/', desc: 'Employee management — directory, attendance, and leave requests in one dashboard.' },
  { name: 'Orderly', url: 'https://aidevstudioone-max.github.io/Orderly/', desc: 'Restaurant point of sale — billing, tables, reservations, and daily reports in one dashboard.' },
  { name: 'Fernbridge Commerce AI', url: 'https://aidevstudioone-max.github.io/commerce-ai/', desc: 'AI-powered product listing tool — generates optimized titles & descriptions and scores every listing, alongside sales, review and health analytics.' },
]

function PreviewCard({ item, delay, tall }) {
  return (
    <motion.a
      variants={staggerItem}
      href={item.url}
      target="_blank"
      rel="noopener"
      whileHover={{ y: -6, borderColor: 'rgba(227,169,63,.45)' }}
      className="block overflow-hidden rounded-xl border border-line bg-panel text-inherit transition-colors"
    >
      <div className={`relative overflow-hidden border-b border-line bg-[#0b121c] ${tall ? 'h-[300px]' : 'h-[180px]'}`}>
        <iframe
          src={item.url}
          title={`${item.name} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[.25] border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b121cea]" />
        <span className="absolute bottom-3 left-4 font-mono text-[.66rem] text-fg">
          {item.url.replace('https://', '')}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-[.68rem] uppercase tracking-[.08em] text-green">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green" /> Live demo
        </div>
        <h3 className="mb-1.5 font-display text-[1.15rem] font-semibold">{item.name}</h3>
        <p className="mb-3 text-[.9rem] leading-relaxed text-muted">{item.desc}</p>
        {item.tags && (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[.65rem] text-muted">
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="inline-flex items-center gap-1.5 font-mono text-[.76rem] text-accent">
          Visit site <IconArrowRight width={13} height={13} />
        </span>
      </div>
    </motion.a>
  )
}

export default function Work() {
  return (
    <section id="work" className="border-b border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-[52ch]">
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">04 — Our work</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Sites we build and look after, and products we sell.
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-muted text-pretty">
            Every client project below is live and under an active care plan. Every product below is running — try it yourself.
          </p>
        </Reveal>

        <RevealStagger className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CLIENTS.map((c, i) => (
            <PreviewCard key={c.name} item={c} delay={i * 0.1} />
          ))}
        </RevealStagger>

        <Reveal className="mb-6 mt-16 max-w-[46ch]">
          <span className="mb-3 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">Products we've built</span>
          <h3 className="font-display text-[1.5rem] font-semibold tracking-tight">Software we've built — and sell.</h3>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <PreviewCard key={p.name} item={p} delay={i * 0.1} tall />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
