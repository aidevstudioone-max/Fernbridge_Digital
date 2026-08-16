import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import Reveal from './Reveal.jsx'
import successCheck from '../lottie/success-check.json'
import { IconWhatsapp, IconPhone, IconMail } from './Icons.jsx'

const WEB3FORMS_KEY = 'fdfb11bc-7730-4553-8e45-d661c0e86318'
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'

const BUSINESS_TYPES = ['Restaurant', 'Retail', 'Professional Services', 'Startup', 'Real Estate', 'Other']
const NEEDS = ['Website', 'Web Application', 'AI Solution', 'Automation', 'Dashboard', 'Other']

const inputCls =
  'w-full rounded-md border border-line bg-ink px-4 py-3 text-[.95rem] text-fg outline-none transition-colors focus:border-accent'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | unconfigured
  const [needs, setNeeds] = useState([])

  const toggleNeed = (n) => setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]))

  async function onSubmit(e) {
    e.preventDefault()
    if (WEB3FORMS_KEY === 'YOUR_ACCESS_KEY') {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('what_they_need', needs.join(', '))
    data.append('subject', `New enquiry from ${data.get('name') || 'website visitor'}`)
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
        setNeeds([])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-b border-line py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <span className="mb-4 block font-mono text-[.72rem] uppercase tracking-[.12em] text-accent">10 — Contact</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.12] tracking-tight">
            Want to Improve Your Business Online?
          </h2>
          <p className="mb-8 max-w-[42ch] text-[1.02rem] leading-relaxed text-muted text-pretty">
            Tell us about your business and we'll suggest the right digital solution for you — no obligation.
          </p>
          <div className="flex flex-col gap-4 font-mono text-[.9rem]">
            <a href="https://wa.me/919022683699" target="_blank" rel="noopener" className="inline-flex items-center gap-3 transition-colors hover:text-accent">
              <IconWhatsapp width={18} height={18} /> WhatsApp Us
            </a>
            <a href="tel:+919022683699" className="inline-flex items-center gap-3 transition-colors hover:text-accent">
              <IconPhone width={18} height={18} /> Call Us
            </a>
            <a href="mailto:hello@fernbridgedigital.com" className="inline-flex items-center gap-3 transition-colors hover:text-accent">
              <IconMail width={18} height={18} /> hello@fernbridgedigital.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative rounded-2xl border border-line bg-panel p-7 md:p-9">
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="h-28 w-28">
                  <Lottie animationData={successCheck} loop={false} />
                </div>
                <h3 className="mb-2 font-display text-[1.3rem] font-semibold">Thanks — message sent.</h3>
                <p className="max-w-[32ch] text-[.92rem] text-muted">We'll get back to you shortly. You can also reach us on WhatsApp for a faster reply.</p>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="business">Business Name</label>
                    <input id="business" name="business" type="text" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" name="phone" type="tel" required className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="business_type">Business Type</label>
                  <select id="business_type" name="business_type" className={inputCls}>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="mb-2 block text-[.85rem] text-muted">What do you need?</span>
                  <div className="flex flex-wrap gap-2">
                    {NEEDS.map((n) => {
                      const active = needs.includes(n)
                      return (
                        <button
                          type="button"
                          key={n}
                          onClick={() => toggleNeed(n)}
                          className={`rounded-full border px-3.5 py-1.5 text-[.82rem] transition-colors ${
                            active ? 'border-accent bg-accent/15 text-accent' : 'border-line text-muted hover:border-muted/40'
                          }`}
                        >
                          {n}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[.85rem] text-muted" htmlFor="message">Tell us about your requirement</label>
                  <textarea id="message" name="message" rows={4} required className={`${inputCls} resize-y`} />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 rounded-[3px] bg-accent py-3.5 font-bold text-[#140e02] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Request a Free Consultation'}
                </button>

                {status === 'unconfigured' && (
                  <p className="text-center text-[.82rem] text-accent">
                    Form not connected yet — add a real Web3Forms access key in ContactForm.jsx before this goes live.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-[.82rem] text-red-400">Something went wrong — please try WhatsApp or email instead.</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
