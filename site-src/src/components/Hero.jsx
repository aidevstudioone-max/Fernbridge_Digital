import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Counter from './Counter.jsx'
import LiveDemo from './LiveDemo.jsx'
import { IconArrowRight, IconBriefcase } from './Icons.jsx'

const rise = (delay) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] },
})

export default function Hero() {
  const blobRef = useRef(null)
  const blob2Ref = useRef(null)

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, { x: 28, y: -22, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }
    if (blob2Ref.current) {
      gsap.to(blob2Ref.current, { x: -20, y: 18, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={blobRef}
          className="absolute -right-40 -top-[260px] h-[640px] w-[640px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(29,92,60,.10), rgba(29,92,60,0) 65%)' }}
        />
        <div
          ref={blob2Ref}
          className="absolute -left-60 top-[340px] h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(196,136,26,.10), rgba(196,136,26,0) 65%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-7 pb-16 pt-[168px] md:pt-[168px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <div>
            <motion.span
              {...rise(0.05)}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.07] px-[15px] py-[7px] font-mono text-[.7rem] uppercase tracking-[.1em] text-accent"
            >
              <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-accent" />
              AI systems in production — Aug 2026
            </motion.span>

            <h1 className="mb-0 max-w-[19ch] font-display text-[clamp(2.5rem,5.2vw,4.3rem)] font-extrabold leading-[1.04] tracking-tight text-balance">
              <motion.span {...rise(0.1)} className="block">We build digital</motion.span>
              <motion.span {...rise(0.22)} className="block">solutions that</motion.span>
              <motion.span {...rise(0.34)} className="block text-accent">
                help businesses <span className="relative inline-block whitespace-nowrap">
                  grow.
                  <motion.i
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1, ease: [0.2, 0.7, 0.2, 1] }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute inset-x-[2%] bottom-[.02em] h-[.12em] rounded-full bg-gradient-to-r from-gold to-accent"
                  />
                </span>
              </motion.span>
            </h1>

            <motion.p {...rise(0.44)} className="mt-6 max-w-[52ch] text-[1.12rem] leading-relaxed text-muted text-pretty">
              Professional websites, custom web applications, AI-powered tools and business automation for startups and growing businesses. Here's one of our AI tools running live.
            </motion.p>

            <motion.div {...rise(0.56)} className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-[30px] py-[15px] text-[.98rem] font-bold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_14px_34px_rgba(29,92,60,0.28)]"
              >
                Get a Free Consultation <IconArrowRight width={16} height={16} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink/25 px-7 py-[15px] text-[.95rem] font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/[0.04]"
              >
                <IconBriefcase width={16} height={16} /> View Our Work
              </a>
            </motion.div>
          </div>

          <LiveDemo />
        </div>

        <motion.div
          {...rise(0.7)}
          className="mt-[60px] grid grid-cols-2 overflow-hidden rounded-[14px] border border-ink/[0.13] bg-surface sm:grid-cols-4"
        >
          {[
            { label: 'Team experience', value: <><Counter to={24} />+ yrs</> },
            { label: 'Uptime we hold', value: <><Counter to={99.9} decimals={1} />%</> },
            { label: 'Live client sites', value: <><Counter to={4} /></> },
            { label: 'Products we built', value: <><Counter to={4} /></> },
          ].map((s, i) => (
            <div key={s.label} className={`px-6 py-[22px] ${i < 3 ? 'border-r border-ink/[0.09]' : ''}`}>
              <div className="mb-2.5 flex items-center gap-2 font-mono text-[.62rem] uppercase tracking-[.08em] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {s.label}
              </div>
              <div className="font-display text-[1.75rem] font-bold tracking-tight">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
