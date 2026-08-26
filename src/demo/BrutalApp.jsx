import { useEffect, useRef, useState } from 'react'
import * as D from '../data.js'
import './brutal.css'

/* Reveal — state lives in React so a re-render can't wipe it. */
function Rv({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return
    const box = el.getBoundingClientRect()
    if (box.top < window.innerHeight && box.bottom > 0) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShown(true) }, { rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [shown])
  return <Tag ref={ref} className={`rv${shown ? ' in' : ''}${className ? ' ' + className : ''}`} {...rest}>{children}</Tag>
}

/* Hero parallax — scale + fade on scroll, skipped when motion is reduced. */
function useParallax() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const y = Math.min(window.scrollY, 700)
        const t = y / 700
        el.style.transform = `scale(${1 + t * 0.28}) translateY(${t * -40}px)`
        el.style.opacity = String(1 - t * 0.85)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return ref
}

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#talk', label: 'Contact' },
]

export default function BrutalApp() {
  const heroRef = useParallax()
  const marquee = [...D.MARQUEE, ...D.MARQUEE]

  return (
    <>
      <header className="bnav">
        <div className="wrap bnav-in">
          <a href="#top" className="brand"><b>ठि</b>kaana</a>
          <nav className="bnav-links">
            {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <a href="#talk" className="btn btn-acid">Start a project</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <span className="label">AI systems in production — since 2026</span>
          <h1 ref={heroRef}>
            We build<br />
            things that<br />
            <em>don’t break.</em>
          </h1>
          <p className="hero-sub">
            Websites, custom web applications, AI tools and automation for startups and
            growing businesses. Built properly, then looked after.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-acid">See the work</a>
            <a href="#talk" className="btn">Talk to us</a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>

      <div className="stats">
        {D.STATS.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}<i>{s.unit}</i></b>
            <span className="label">{s.label}</span>
          </div>
        ))}
      </div>

      <section className="sec" id="work">
        <div className="wrap">
          <Rv className="sec-head">
            <span className="label">01 / Selected work</span>
            <h2>Live sites. Real businesses.</h2>
          </Rv>
        </div>
        <div className="wrap">
          <div className="work-grid">
            {D.CLIENTS.map((c) => (
              <a className="work" key={c.name} href={c.url} target="_blank" rel="noopener">
                <div className="work-shot">
                  <img src={c.shot} alt={`${c.name} homepage`} loading="lazy" width={800} height={500} />
                </div>
                <div className="work-meta">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <span className="work-go">Open →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap">
          <Rv className="sec-head">
            <span className="label">02 / What we do</span>
            <h2>Four things. Done properly.</h2>
          </Rv>
          <div className="rows">
            {D.SERVICES.map((s) => (
              <div className="row" key={s.title}>
                <span className="row-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p className="row-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="talk">
        <div className="wrap close">
          <Rv>
            <span className="label">03 / Next</span>
            <h2>Got something<br />that needs<br /><em>building?</em></h2>
            <div className="hero-cta" style={{ marginBottom: 0 }}>
              <a href={`mailto:${D.CONTACT.email}`} className="btn btn-acid">{D.CONTACT.email}</a>
              <a href={`https://wa.me/${D.CONTACT.whatsapp}`} target="_blank" rel="noopener" className="btn">WhatsApp</a>
            </div>
          </Rv>
        </div>
      </section>

      <div className="wrap">
        <div className="foot">
          <span className="label">© {new Date().getFullYear()} ठिkaana</span>
          <span className="label">Kinetic brutalism — concept</span>
        </div>
      </div>

      <span className="flag">Demo — not live</span>
    </>
  )
}
