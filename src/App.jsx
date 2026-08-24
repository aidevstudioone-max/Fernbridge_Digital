import { useEffect, useRef, useState, lazy, Suspense } from 'react'

const Field = lazy(() => import('./particles/Field.jsx'))
import * as D from './data.js'
import logoIcon from './assets/logo-icon-white.png'
import './index.css'

/* ------------------------------------------------------------------ utils */

function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('.rv')]
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('in')
          io.unobserve(e.target)
        }),
      { rootMargin: '0px 0px -40px 0px', threshold: 0 },
    )
    els.forEach((el) => io.observe(el))

    // ponytail: fast scrolling and #anchor jumps can outrun the observer —
    // sweep anything already on screen so nothing is left invisible.
    const sweep = () => {
      for (const el of els) {
        if (el.classList.contains('in')) continue
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('in')
          io.unobserve(el)
        }
      }
    }
    let tick
    const onScroll = () => {
      clearTimeout(tick)
      tick = setTimeout(sweep, 90)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    sweep()

    return () => {
      io.disconnect()
      clearTimeout(tick)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

function Rv({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  return (
    <Tag className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

const Check = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
const Chevron = (p) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

function SecHead({ n, kicker, title, lede }) {
  return (
    <Rv className="sec-head">
      <span className="eyebrow">{n} — {kicker}</span>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Rv>
  )
}

/* -------------------------------------------------------------------- nav */

function Nav() {
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`nav ${stuck ? 'stuck' : ''}`}>
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          <span className="brand-mark"><img src={logoIcon} alt="" /></span>
          ठिkaana
        </a>
        <nav className="nav-links">
          {D.NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a href="#contact" className="btn btn-solid">Get a Free Consultation</a>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------- hero */

const HERO_CYCLE = [0, 1, 2, 3, 4, 5]

function useIsNarrow(bp = 900) {
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.innerWidth < bp)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp - 1}px)`)
    const on = () => setNarrow(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [bp])
  return narrow
}

// Only render the field where it will actually work and be welcome.
function useWebglOk() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    try {
      const c = document.createElement('canvas')
      setOk(!!(c.getContext('webgl2') || c.getContext('webgl')))
    } catch {
      setOk(false)
    }
  }, [])
  return ok
}

function Hero() {
  const [formation, setFormation] = useState(0)
  const narrow = useIsNarrow()
  const webgl = useWebglOk()
  const i = useRef(0)
  useEffect(() => {
    if (!webgl) return
    const id = setInterval(() => {
      i.current = (i.current + 1) % HERO_CYCLE.length
      setFormation(HERO_CYCLE[i.current])
    }, 4600)
    return () => clearInterval(id)
  }, [webgl])

  return (
    <section id="top" className="hero">
      <div className="hero-canvas" aria-hidden="true">
        {webgl ? (
          <Suspense fallback={<span className="hero-fallback" />}>
            <Field formation={formation} narrow={narrow} />
          </Suspense>
        ) : (
          <span className="hero-fallback" />
        )}
      </div>

      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Rv><span className="pill"><i />AI systems in production</span></Rv>
            <Rv delay={60}>
              <h1>We build systems that <span>hold up</span> under real load.</h1>
            </Rv>
            <Rv delay={120}>
              <p className="sub">
                Websites, custom web applications, AI tools and automation for startups and
                growing businesses — built properly, then looked after.
              </p>
            </Rv>
            <Rv delay={180}>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-solid btn-lg">Get a Free Consultation</a>
                <a href="#work" className="btn btn-ghost btn-lg">View Our Work</a>
              </div>
            </Rv>
          </div>
          <div />
        </div>

        <Rv className="stats" delay={240}>
          {D.STATS.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}<em>{s.unit}</em></b>
              <span>{s.label}</span>
            </div>
          ))}
        </Rv>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...D.MARQUEE, ...D.MARQUEE]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((m, i) => <span key={i}>{m}<i /></span>)}
      </div>
    </div>
  )
}

/* --------------------------------------------------------------- sections */

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SecHead n="01" kicker="What we do" title="Four services. Built to solve real business problems."
          lede="Not a pile of technologies — four clear ways we help a business run better online." />
        <div className="grid-2">
          {D.SERVICES.map((s, i) => (
            <Rv as="article" className="card" key={s.title} delay={i * 70}>
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <p className="benefit">{s.benefit}</p>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

function AiSection() {
  return (
    <section id="ai" className="tint">
      <div className="wrap">
        <SecHead n="02" kicker="AI in production" title="AI that does the work, not AI that talks about it."
          lede="Four AI systems we run today. Each one takes an input, does the tedious part, and hands back something a human can check." />
        <div className="grid-2" style={{ marginBottom: 56 }}>
          {D.AI_CARDS.map((c, i) => (
            <Rv as="article" className="card ai-card" key={c.tag} delay={i * 70}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <p className="note">→ {c.note}</p>
            </Rv>
          ))}
        </div>

        <div className="contact-grid" style={{ alignItems: 'center' }}>
          <Rv>
            <h3 style={{ fontSize: '1.45rem' }}>Every run is logged, scored, and checkable.</h3>
            <p className="lede">
              Most AI pilots die because nobody can tell whether the output was right. Ours report
              confidence per field, escalate what they're unsure about, and keep a log you can audit
              months later.
            </p>
            <ul className="checks">
              {D.AI_CHECKS.map((k) => <li key={k}><Check />{k}</li>)}
            </ul>
          </Rv>
          <Rv delay={120}>
            <div className="terminal">
              <div className="bar"><i /><i /><i /><b>commerce-ai — listing agent</b></div>
              <div className="body">
                <div>
                  <span className="k">Input — what the client typed</span>
                  <div className="in" style={{ marginTop: 8 }}>ss kitchen sink 24x18 drain board jindal single bowl</div>
                </div>
                <div>
                  <span className="k">Optimised title</span>
                  <p className="v">Jindal Stainless Steel Kitchen Sink 24×18 in — Single Bowl with Drainboard</p>
                </div>
                <div>
                  <span className="k">Listing quality score</span>
                  <div className="bars" style={{ marginTop: 10 }}>
                    {[38, 54, 46, 68, 60, 86, 76].map((h, i) => (
                      <i key={i} className={h === 86 ? 'hot' : ''} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-3)', fontSize: '0.7rem' }}>
                  <span>complete · score 90/100</span>
                  <span>avg 1.6s per listing</span>
                </div>
              </div>
            </div>
          </Rv>
        </div>
      </div>
    </section>
  )
}

function WhoWeHelp() {
  return (
    <section id="who-we-help">
      <div className="wrap">
        <SecHead n="03" kicker="Who we help" title="We work with"
          lede={'Not "everyone" — specific kinds of businesses, so you know we understand yours.'} />
        <div className="grid-3">
          {D.AUDIENCES.map((a, i) => (
            <Rv as="article" className="card" key={a.title} delay={i * 50}>
              <span className="num">{a.n}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="why-us" className="tint">
      <div className="wrap">
        <SecHead n="04" kicker="Why us" title="Why choose ठिkaana?" />
        <div className="grid-3">
          {D.REASONS.map((r, i) => (
            <Rv as="article" className="card" key={r.title} delay={i * 50}>
              <span style={{ color: 'var(--mint)', display: 'block', marginBottom: 14 }}><Check width="18" height="18" /></span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ item, i, interactive3d }) {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    const rx = (-py * 10).toFixed(2)
    const ry = (px * 10).toFixed(2)
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`
    el.style.boxShadow = `${(-px * 26).toFixed(0)}px ${(22 - py * 12).toFixed(0)}px 40px -16px rgba(0,0,0,0.55)`
  }
  function handleLeave() {
    const el = ref.current
    el.style.transform = ''
    el.style.boxShadow = ''
  }

  const body = (
    <>
      <div className="shot">
        <img src={item.shot} alt={`${item.name} homepage`} loading="lazy" width={800} height={500} />
        <span className="host">{item.host}</span>
      </div>
      <span className="live"><i />Live</span>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      {item.chips && <div className="chips">{item.chips.map((c) => <span key={c}>{c}</span>)}</div>}
      <span className="visit">Visit site <i>→</i></span>
    </>
  )

  if (interactive3d) {
    return (
      <Rv as="div" className="card-3d-outer" delay={i * 60}>
        <a ref={ref} className="card card-3d" href={item.url} target="_blank" rel="noopener"
          onMouseMove={handleMove} onMouseLeave={handleLeave}>
          {body}
        </a>
      </Rv>
    )
  }

  return (
    <Rv as="a" className="card" href={item.url} target="_blank" rel="noopener" delay={i * 60}>
      {body}
    </Rv>
  )
}

const CAROUSEL_INTERVAL_MS = 3000

function Carousel({ items, sectionId, tint, n: sectionNum, kicker, title, lede, navLabel }) {
  const firstCardRef = useRef(null)
  const count = items.length
  const trackItems = [...items, ...items, ...items]
  const [pos, setPos] = useState(count)
  const [instant, setInstant] = useState(false)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(400)

  useEffect(() => {
    function measure() {
      if (firstCardRef.current) setStep(firstCardRef.current.getBoundingClientRect().width + 20)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  function go(dir) {
    setPos((p) => p + dir)
  }

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setPos((p) => p + 1), CAROUSEL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => {
    if (!instant) return
    const id = setTimeout(() => setInstant(false), 20)
    return () => clearTimeout(id)
  }, [instant])

  useEffect(() => {
    if (pos > 0 && pos < 2 * count) return
    const id = setTimeout(() => {
      setInstant(true)
      setPos((p) => (p >= 2 * count ? p - count : p + count))
    }, 720)
    return () => clearTimeout(id)
  }, [pos, count])

  return (
    <section id={sectionId} className={tint ? 'tint' : undefined}>
      <div className="wrap">
        <div className="sec-head-row">
          <SecHead n={sectionNum} kicker={kicker} title={title} lede={lede} />
          <div className="carousel-nav">
            <button type="button" aria-label={`Previous ${navLabel}`} onClick={() => go(-1)}><Chevron style={{ transform: 'rotate(90deg)' }} /></button>
            <button type="button" aria-label={`Next ${navLabel}`} onClick={() => go(1)}><Chevron style={{ transform: 'rotate(-90deg)' }} /></button>
          </div>
        </div>
        <div
          className="carousel-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${pos * step}px)`, transition: instant ? 'none' : undefined }}
          >
            {trackItems.map((p, i) => (
              <div className="carousel-slide" ref={i === 0 ? firstCardRef : null} key={p.name + '-' + i}>
                <WorkCard item={p} i={i} interactive3d />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <Carousel
      items={D.CLIENTS}
      sectionId="work"
      n="05"
      kicker="Sites we build and maintain"
      title="Sites we build and look after."
      lede="Every client project below is live and under an active care plan."
      navLabel="site"
    />
  )
}

function Products() {
  return (
    <Carousel
      items={D.PRODUCTS}
      sectionId="products"
      tint
      n="06"
      kicker="Products we sell"
      title="Software we've built — and sell."
      lede="Every product below is running — try it yourself."
      navLabel="product"
    />
  )
}

function HowWeWork() {
  const [on, setOn] = useState(-1)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      D.STEPS.forEach((_, i) => setTimeout(() => setOn(i), i * 260))
      io.disconnect()
    }, { threshold: 0.25 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <section id="how-we-work">
      <div className="wrap">
        <SecHead n="07" kicker="How we work" title="From first call to a site that runs itself." />
        <div className="steps" ref={ref}>
          {D.STEPS.map((s, i) => (
            <div className={`step ${i <= on ? 'on' : ''}`} key={s.n}>
              <div className="dot"><b>{s.n}</b><span><i /></span></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function teamOffset(i, active, n) {
  let d = i - active
  if (d > n / 2) d -= n
  if (d < -n / 2) d += n
  return d
}

function TeamSlide({ m, offset, onSelect }) {
  const active = offset === 0
  const far = Math.abs(offset) > 1
  const style = { '--offset': offset, '--abs-offset': Math.abs(offset), pointerEvents: far ? 'none' : 'auto' }
  return (
    <div
      className={`team-slide${active ? ' active' : ''}`}
      style={style}
      onClick={active ? undefined : onSelect}
      aria-hidden={!active}
    >
      <div className="card member">
        <img src={m.photo} alt={m.name} loading="lazy" />
        <h3>{m.name}</h3>
        <p className="role">{m.role}</p>
        {active && <p style={{ marginTop: 0 }}>{m.bio}</p>}
      </div>
    </div>
  )
}

function Team() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = D.TEAM.length

  function go(dir) {
    setActive((i) => ((i + dir) % n + n) % n)
  }

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => go(1), CAROUSEL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="team" className="tint">
      <div className="wrap">
        <SecHead n="08" kicker="Team" title="Experts from Amazon, HSBC and Yext, now building for smaller businesses."
          lede="We spent our careers on the operations, data, and engineering side of companies you already know. Now we build for smaller ones." />
        <div
          className="team-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <button type="button" className="slider-arrow left" aria-label="Previous team member" onClick={() => go(-1)}><Chevron style={{ transform: 'rotate(90deg)' }} /></button>
          <div className="team-stage">
            {D.TEAM.map((m, i) => (
              <TeamSlide m={m} offset={teamOffset(i, active, n)} onSelect={() => setActive(i)} key={m.name} />
            ))}
          </div>
          <button type="button" className="slider-arrow right" aria-label="Next team member" onClick={() => go(1)}><Chevron style={{ transform: 'rotate(-90deg)' }} /></button>
        </div>
        <div className="slider-dots">
          {D.TEAM.map((m, i) => (
            <button type="button" key={m.name} className={i === active ? 'on' : ''} aria-label={`Show ${m.name}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach">
      <div className="wrap contact-grid" style={{ alignItems: 'center' }}>
        <Rv>
          <span className="eyebrow">09 — Our approach</span>
          <h2>A website that is actually looked after.</h2>
          <p className="lede">
            We work closely with our clients to understand their requirements and build practical
            digital solutions that solve real business problems — then we keep looking after what we build.
          </p>
          <ul className="checks">
            {D.CARE_CHECKS.map((c) => <li key={c}><Check />{c}</li>)}
          </ul>
        </Rv>
        <Rv delay={120}>
          <div className="terminal">
            <div className="bar"><i /><i /><i /><b>care-report — this month</b></div>
            <div className="body">
              <div><span className="k">Uptime</span><p className="v" style={{ color: 'var(--mint)' }}>99.98% · no incidents</p></div>
              <div>
                <span className="k">Page speed, last 7 days</span>
                <div className="bars" style={{ marginTop: 10 }}>
                  {[38, 54, 46, 68, 60, 86, 76].map((h, i) => (
                    <i key={i} className={h === 86 ? 'hot' : ''} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div><span className="k">Backups</span><p className="v">7 / 7 verified</p></div>
            </div>
          </div>
        </Rv>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="tint">
      <div className="wrap">
        <SecHead n="10" kicker="Pricing" title="Simple pricing, built around care."
          lede="Builds are quoted per project. Care plans keep what we build healthy after launch." />
        <div className="grid-3">
          {D.PLANS.map((p, i) => (
            <Rv as="article" className={`card plan ${p.featured ? 'featured' : ''}`} key={p.name} delay={i * 70} style={{ position: 'relative' }}>
              {p.featured && <span className="tagline">Most chosen</span>}
              <h3>{p.name}</h3>
              <div className="price">{p.price} <em>{p.unit}</em></div>
              <p>{p.desc}</p>
              <ul>{p.features.map((f) => <li key={f}><Check />{f}</li>)}</ul>
              <a href="#contact" className={`btn ${p.featured ? 'btn-solid' : 'btn-ghost'}`}>{p.cta}</a>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <SecHead n="11" kicker="FAQ" title="Common questions." />
        {D.FAQS.map((f, i) => (
          <Rv className={`faq-item ${open === i ? 'open' : ''}`} key={f.q} delay={i * 40}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              {f.q}<Chevron />
            </button>
            <div className="faq-a" style={{ height: open === i ? 'auto' : 0 }}>
              <p>{f.a}</p>
            </div>
          </Rv>
        ))}
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section style={{ paddingBlock: 'clamp(40px,7vh,80px)' }}>
      <div className="wrap">
        <Rv className="cta-band">
          <span className="glow g1" /><span className="glow g2" />
          <h2>Have a business idea?</h2>
          <p className="accent">Let's turn it into a digital solution.</p>
          <p className="body">
            Whether you need a website, custom application, automation or AI solution,
            let's discuss what you're trying to achieve.
          </p>
          <div className="row">
            <a href="#contact" className="btn btn-solid btn-lg">Get a Free Consultation</a>
            <a href={`https://wa.me/${D.CONTACT.whatsapp}`} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">WhatsApp us</a>
          </div>
        </Rv>
      </div>
    </section>
  )
}

const WEB3FORMS_KEY = '304a7442-2694-4a4e-81c6-4bedd4cce531'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [needs, setNeeds] = useState([])
  const toggle = (n) => setNeeds((c) => (c.includes(n) ? c.filter((x) => x !== n) : [...c, n]))

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('what_they_need', needs.join(', '))
    data.append('replyto', data.get('email') || '')
    data.append('subject', `New enquiry from ${data.get('name') || 'website visitor'}`)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setStatus('sent'); form.reset(); setNeeds([]) } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="tint">
      <div className="wrap contact-grid">
        <Rv>
          <span className="eyebrow">12 — Contact</span>
          <h2>Want to improve your business online?</h2>
          <p className="lede">
            Tell us about your business and we'll suggest the right digital solution for you —
            no obligation.
          </p>
          <div className="contact-links">
            <a href={`https://wa.me/${D.CONTACT.whatsapp}`} target="_blank" rel="noopener">→ WhatsApp us</a>
            <a href={`tel:${D.CONTACT.phone}`}>→ Call us</a>
            <a href={`mailto:${D.CONTACT.email}`}>→ {D.CONTACT.email}</a>
          </div>
        </Rv>

        <Rv delay={100}>
          <div className="form">
            {status === 'sent' ? (
              <div className="sent">
                <div className="tick"><Check width="28" height="28" /></div>
                <h3>Thanks — message sent.</h3>
                <p style={{ color: 'var(--fg-2)', marginTop: 8 }}>
                  We'll get back to you shortly. WhatsApp is usually faster.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="row2">
                  <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
                  <div className="field"><label htmlFor="business">Business name</label><input id="business" name="business" autoComplete="organization" /></div>
                </div>
                <div className="row2">
                  <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
                  <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
                </div>
                <div className="field">
                  <label htmlFor="business_type">Business type</label>
                  <select id="business_type" name="business_type">
                    {D.BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>What do you need?</label>
                  <div className="need">
                    {D.NEEDS.map((n) => (
                      <button type="button" key={n} className={needs.includes(n) ? 'on' : ''} onClick={() => toggle(n)}>{n}</button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Tell us about your requirement</label>
                  <textarea id="message" name="message" required />
                </div>
                {status === 'error' && <p className="err">Something went wrong. Please WhatsApp us instead.</p>}
                <button className="btn btn-solid btn-lg" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Request a free consultation'}
                </button>
              </form>
            )}
          </div>
        </Rv>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <a href="#top" className="brand" style={{ justifyContent: 'center' }}>
          <span className="brand-mark"><img src={logoIcon} alt="" /></span>ठिkaana
        </a>
        <p className="lede" style={{ margin: '14px auto 0', textAlign: 'center' }}>
          We build professional websites, custom web applications, AI-powered solutions and
          business automation for startups and growing businesses.
        </p>
        <address className="foot-address">
          <strong>Contact Us</strong><br />
          144/2, Mahatma Gandhi Road<br />
          Thakurpukur, Kolkata – 700063<br />
          West Bengal, India
        </address>
        <div className="links">
          {D.NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact">Contact</a>
        </div>
        <small>© {new Date().getFullYear()} ठिkaana. All rights reserved.</small>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------- app */

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <AiSection />
        <WhoWeHelp />
        <WhyUs />
        <Work />
        <Products />
        <HowWeWork />
        <Team />
        <Approach />
        <Pricing />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <a className="fab" href={`https://wa.me/${D.CONTACT.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.4-.1-.6.1s-.7.9-.9 1.1c-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2s0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.2-.6-1.5-.8-2s-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2z"/></svg>
      </a>
    </>
  )
}
