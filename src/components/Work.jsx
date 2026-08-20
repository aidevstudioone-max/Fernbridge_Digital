import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'

import pavMantraShot from '../assets/previews/pav-mantra.webp'
import apoorvaShot from '../assets/previews/apoorva.webp'
import hangoutShot from '../assets/previews/hangout-cafe.webp'
import srimaShot from '../assets/previews/srima.webp'
import shreeGiftShot from '../assets/previews/shree-gift.webp'
import shibpurShot from '../assets/previews/shibpur-school.webp'
import roomlyShot from '../assets/previews/roomly.webp'
import stafflyShot from '../assets/previews/staffly.webp'
import orderlyShot from '../assets/previews/orderly.webp'
import commerceAiShot from '../assets/previews/commerce-ai.webp'

const CLIENTS = [
  { name: 'Pav Mantra', shot: pavMantraShot, url: 'https://aidevstudioone-max.github.io/pav-mantra-site/', host: 'aidevstudioone-max.github.io/pav-mantra-site/', desc: 'Food brand site — menu, story, and ordering enquiries in one place.', chips: ['Menu', 'Brand story', 'Enquiries'] },
  { name: 'Apoorva Auto Parts', shot: apoorvaShot, url: 'https://aidevstudioone-max.github.io/apoorva-auto-parts-site/', host: 'aidevstudioone-max.github.io/apoorva-auto-parts-site/', desc: 'Auto parts supplier — catalogue, coverage, and a direct enquiry line.', chips: ['Catalogue', 'Coverage area', 'Enquiries'] },
  { name: 'Hangout Cafe', shot: hangoutShot, url: 'https://aidevstudioone-max.github.io/hangout-cafe/', host: 'aidevstudioone-max.github.io/hangout-cafe/', desc: 'Cafe & restaurant site — menu, location, and veg / non-veg dine-in details.', chips: ['Menu', 'Location', 'Dine-in info'] },
  { name: 'Srima Diagnostic & Medical', shot: srimaShot, url: 'https://aidevstudioone-max.github.io/Srima/', host: 'aidevstudioone-max.github.io/Srima/', desc: 'Diagnostic centre & pharmacy — testing, reports, and prescription counsel.', chips: ['Test listings', 'Reports', 'Pharmacy'] },
  { name: 'Sri Ram Gift Emporium', shot: shreeGiftShot, url: 'https://aidevstudioone-max.github.io/shree_gift_hub/', host: 'aidevstudioone-max.github.io/shree_gift_hub/', desc: 'Gift & home décor retailer — collections, store story, and visit planning for a Mughalsarai storefront.', chips: ['Collections', 'Store story', 'Visit info'] },
  { name: 'Shibpur Hindu Girls High School', shot: shibpurShot, url: 'https://aidevstudioone-max.github.io/ShibpurHinduGirlsHighSchool/', host: 'aidevstudioone-max.github.io/ShibpurHinduGirlsHighSchool/', desc: 'School information site — about, school life, facilities, and contact with maps and directions.', chips: ['About', 'School life', 'Directions'] },
]

const PRODUCTS = [
  { name: 'Roomly', shot: roomlyShot, url: 'https://aidevstudioone-max.github.io/Roomly/', host: 'aidevstudioone-max.github.io/Roomly/', desc: 'Hotel room booking & management — real-time availability, instant bookings, occupancy dashboard.' },
  { name: 'Staffly', shot: stafflyShot, url: 'https://aidevstudioone-max.github.io/Staffly/', host: 'aidevstudioone-max.github.io/Staffly/', desc: 'Employee management — directory, attendance, and leave requests in one dashboard.' },
  { name: 'Orderly', shot: orderlyShot, url: 'https://aidevstudioone-max.github.io/Orderly/', host: 'aidevstudioone-max.github.io/Orderly/', desc: 'Restaurant point of sale — billing, tables, reservations, and daily reports in one dashboard.' },
  { name: 'Fernbridge Commerce AI', shot: commerceAiShot, url: 'https://aidevstudioone-max.github.io/commerce-ai/', host: 'aidevstudioone-max.github.io/commerce-ai/', desc: 'AI-powered product listing tool — generates optimized titles & descriptions and scores every listing, alongside sales, review and health analytics.' },
]

function Card({ item, indigo }) {
  return (
    <motion.a
      variants={staggerItem}
      href={item.url}
      target="_blank"
      rel="noopener"
      whileHover={{ y: -5 }}
      className={`block overflow-hidden rounded-[18px] border border-ink/12 bg-surface text-inherit no-underline transition-colors ${
        indigo ? 'hover:border-indigo/50' : 'hover:border-accent/55'
      }`}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-ink/10"
        style={{ background: indigo ? 'linear-gradient(135deg, #2A2670 0%, #16150E 90%)' : 'linear-gradient(135deg, #1D5C3C 0%, #16150E 90%)' }}
      >
        <img
          src={item.shot}
          alt={`${item.name} homepage`}
          width={800}
          height={500}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-2.5 pt-8 font-mono text-[.64rem] text-paper/90">
          {item.host}
        </span>
      </div>
      <div className="p-6">
        <span className={`mb-2.5 inline-flex items-center gap-2 font-mono text-[.66rem] uppercase tracking-[.08em] ${indigo ? 'text-indigo' : 'text-accent'}`}>
          <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${indigo ? 'bg-indigo' : 'bg-accent'}`} />
          {indigo ? 'Live AI demo' : 'Live demo'}
        </span>
        <h3 className="mb-2 font-display text-[1.18rem] font-semibold">{item.name}</h3>
        <p className="text-[.9rem] text-muted">{item.desc}</p>
        {item.chips && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {item.chips.map((c) => (
              <span key={c} className="rounded-full border border-ink/14 px-2.5 py-1 font-mono text-[.66rem] text-muted">
                {c}
              </span>
            ))}
          </div>
        )}
        <p className="mt-4 border-t border-ink/10 pt-3.5 text-[.86rem] font-semibold text-gold">Visit site →</p>
      </div>
    </motion.a>
  )
}

export default function Work() {
  return (
    <>
      <section id="work" className="py-[104px]">
        <div className="mx-auto max-w-6xl px-7">
          <Reveal className="mb-[52px] max-w-[52ch]">
            <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">05 — Sites we build and maintain</span>
            <h2 className="mb-4 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
              Sites we build and look after.
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
              Every client project below is live and under an active care plan.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {CLIENTS.map((c) => (
              <Card key={c.name} item={c} />
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="products" className="py-[104px]">
        <div className="mx-auto max-w-6xl px-7">
          <Reveal className="mb-[52px] max-w-[52ch]">
            <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-gold">06 — Products we sell</span>
            <h2 className="mb-4 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
              Software we've built — and sell.
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-muted">
              Every product below is running — try it yourself.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <Card key={p.name} item={p} indigo />
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  )
}
