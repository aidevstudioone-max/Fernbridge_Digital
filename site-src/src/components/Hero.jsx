import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Counter from './Counter.jsx'
import { IconArrowRight, IconBriefcase } from './Icons.jsx'

const rise = (delay) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] },
})

export default function Hero() {
  const blobRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        y: 24,
        x: -14,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '80px 80px',
        duration: 22,
        repeat: -1,
        ease: 'none',
      })
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(201,214,232,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(201,214,232,.09)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_0%,#000_5%,transparent_72%)]"
      />
      <div
        ref={blobRef}
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full blur-[8px]"
        style={{ background: 'radial-gradient(circle, rgba(227,169,63,.18), rgba(227,169,63,0) 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-36">
        <motion.span
          {...rise(0)}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-[.72rem] uppercase tracking-[.09em] text-accent"
        >
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-green" />
          Taking on new clients — Aug 2026
        </motion.span>

        <h1 className="mb-6 max-w-3xl font-display text-[clamp(2.3rem,6vw,4.6rem)] font-bold leading-[1.04] tracking-tight text-balance">
          <motion.span {...rise(0.06)} className="block">We Build Digital Solutions</motion.span>
          <motion.span {...rise(0.16)} className="block">
            That Help <span className="relative whitespace-nowrap text-accent">Businesses Grow
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                style={{ transformOrigin: 'left' }}
                className="absolute inset-x-0 bottom-[.06em] h-[3px] bg-gradient-to-r from-accent to-accent/0"
              />
            </span>.
          </motion.span>
        </h1>

        <motion.p {...rise(0.28)} className="mb-9 max-w-[52ch] text-[1.1rem] leading-relaxed text-muted text-pretty">
          We build professional websites, custom web applications, AI-powered solutions and business automation tools for startups and growing businesses.
        </motion.p>

        <motion.div {...rise(0.38)} className="mb-16 flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-[3px] bg-accent px-7 py-3.5 text-[.98rem] font-bold text-[#140e02] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(227,169,63,0.3)]"
          >
            <span className="relative z-10 inline-flex items-center gap-2">Get a Free Consultation <IconArrowRight width={16} height={16} /></span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] skew-x-[-18deg] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition-transform duration-700 group-hover:translate-x-[420%]" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[3px] border border-line px-7 py-3.5 text-[.98rem] font-semibold text-fg transition-colors duration-200 hover:border-muted/40 hover:bg-white/5"
          >
            <IconBriefcase width={17} height={17} /> View Our Work
          </a>
        </motion.div>

        <motion.div
          {...rise(0.48)}
          className="grid grid-cols-2 overflow-hidden rounded-[10px] border border-line bg-gradient-to-b from-panel-alt/90 to-ink-alt/90 sm:grid-cols-4"
        >
          {[
            { label: 'Team experience', value: <><Counter to={24} />+ yrs</> },
            { label: 'Uptime we hold', value: <><Counter to={99.9} decimals={1} />%</> },
            { label: 'Live client sites', value: <><Counter to={4} /></> },
            { label: 'Products we built', value: <><Counter to={4} /></> },
          ].map((s, i) => (
            <div key={s.label} className={`px-6 py-6 ${i < 3 ? 'border-r border-line' : ''}`}>
              <div className="mb-2.5 flex items-center gap-2 font-mono text-[.66rem] uppercase tracking-[.08em] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
                {s.label}
              </div>
              <div className="font-display text-[1.7rem] font-bold tracking-tight">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
