import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import * as D from '../data.js'
import './galaxy.css'

const Spline = lazy(() => import('@splinetool/react-spline'))
const SCENE = 'https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#portal', label: 'Portal' },
  { href: '#talk', label: 'Contact' },
]

/* The scene is ~2MB and interactive. Skip it entirely on small screens and
   when motion is reduced — the pattern calls for a mobile fallback, and a
   phone should not download a WebGL galaxy to read a headline. */
function useHeavySceneAllowed() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 820px)').matches
    const gl = (() => {
      try {
        const c = document.createElement('canvas')
        return !!(c.getContext('webgl2') || c.getContext('webgl'))
      } catch { return false }
    })()
    setOk(!reduce && !small && gl)
  }, [])
  return ok
}

function Stage() {
  const allowed = useHeavySceneAllowed()
  const [loaded, setLoaded] = useState(false)
  const copyRef = useRef(null)

  // fade the copy out as the visitor scrolls past the scene
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = copyRef.current
        if (!el) return
        el.style.opacity = String(1 - Math.min(window.scrollY / 420, 1))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="stage" id="top">
      <div className="spline-wrap" aria-hidden="true">
        {allowed ? (
          <Suspense fallback={<div className="stage-fallback" />}>
            <Spline scene={SCENE} onLoad={() => setLoaded(true)} />
          </Suspense>
        ) : (
          <div className="stage-fallback" />
        )}
      </div>
      <div className="scrim" aria-hidden="true" />

      {allowed && !loaded && (
        <div className="loading" role="status" aria-live="polite">
          <i />Loading the scene
        </div>
      )}

      <div className="hero-copy" ref={copyRef}>
        <div className="wrap"><div className="inner">
          <span className="kicker"><i />AI systems in production</span>
          <h1>We build systems that <span>hold up</span> under real load.</h1>
          <p>
            Websites, custom web applications, AI tools and automation for startups and
            growing businesses — built properly, then looked after.
          </p>
          <div className="hero-actions">
            <a href="#talk" className="gbtn gbtn-solid">Get a free consultation</a>
            <a href="#work" className="gbtn gbtn-glass">See our work</a>
            </div>
          </div>
        </div>
      </div>

      <a className="skip" href="#work">Skip the intro <i aria-hidden="true">↓</i></a>
    </section>
  )
}

export default function GalaxyApp() {
  const frameRef = useRef(null)

  // gentle parallax lift on the framed panel
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = frameRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const seen = Math.min(Math.max((window.innerHeight - r.top) / window.innerHeight, 0), 1)
        el.style.transform = `translateY(${(1 - seen) * 40}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const featured = D.CLIENTS[0]

  return (
    <>
      <nav className="gnav">
        <div className="wrap gnav-in">
          <a href="#top" className="gbrand"><b>ठि</b>kaana</a>
          <div className="gnav-links">
            {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <a href="#talk" className="gbtn gbtn-solid">Get a free consultation</a>
        </div>
      </nav>

      <Stage />

      <div className="after">
        <div className="wrap">
          <div className="frame" ref={frameRef}>
            <div className="frame-bar"><i /><i /><i /><b>{featured.host}</b></div>
            <img src={featured.shot} alt={`${featured.name} homepage`} width={800} height={500} loading="lazy" />
          </div>
        </div>

        <section className="sec" id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">01 — What we do</span>
              <h2>Four services. Built to solve real business problems.</h2>
              <p>Not a pile of technologies — four clear ways we help a business run better online.</p>
            </div>
            <div className="grid">
              {D.SERVICES.map((s) => (
                <article className="tile" key={s.title}>
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="work">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">02 — Selected work</span>
              <h2>Sites we build and look after.</h2>
            </div>
            <div className="grid">
              {D.CLIENTS.slice(0, 4).map((c) => (
                <a className="tile" key={c.name} href={c.url} target="_blank" rel="noopener">
                  <span className="n">{c.host}</span>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="talk">
          <div className="wrap sec-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">03 — Next</span>
            <h2>Want to improve your business online?</h2>
            <p>Tell us about your business and we&rsquo;ll suggest the right digital solution — no obligation.</p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a className="gbtn gbtn-solid" href={`mailto:${D.CONTACT.email}`}>{D.CONTACT.email}</a>
              <a className="gbtn gbtn-ghost" href={`https://wa.me/${D.CONTACT.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </section>

        <div className="wrap gfoot">© {new Date().getFullYear()} ठिkaana — Spline hero concept</div>
      </div>

      <span className="flag">Demo 2 — not live</span>
    </>
  )
}
