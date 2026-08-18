import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const DEMOS = [
  {
    input: 'ss kitchen sink 24x18 with drain board — brand jindal? single bowl',
    title: 'Jindal Stainless Steel Kitchen Sink 24×18 in — Single Bowl with Drainboard',
    desc: 'Corrosion-resistant 304-grade stainless steel single-bowl sink with integrated drainboard. Satin finish, sound-dampened base, standard 3.5 in outlet. Fits 24×18 in countertop cut-outs.',
    chips: ['stainless steel sink', '24x18 single bowl', 'with drainboard', '304 grade'],
    score: 92,
    time: '1.8s',
  },
  {
    input: 'chrome finish bathroom tap wall mount long neck, warranty 5yr',
    title: 'Wall-Mounted Long-Neck Bathroom Tap — Chrome Finish, 5-Year Warranty',
    desc: 'Brass-body wall-mount basin tap with extended swan neck and mirror chrome plating. Ceramic quarter-turn cartridge rated for 5,00,000 cycles. Backed by a 5-year manufacturer warranty.',
    chips: ['wall mount tap', 'long neck', 'chrome finish', '5 year warranty'],
    score: 88,
    time: '2.1s',
  },
  {
    input: 'pvc pipe 1 inch 6m agri grade isi marked bundle of 10',
    title: 'ISI-Marked Agricultural PVC Pipe 1 in × 6 m — Bundle of 10',
    desc: 'ISI-certified agri-grade rigid PVC pipe, 1 in nominal bore, 6 m lengths, supplied in bundles of 10. UV-stabilised for open-field irrigation runs; solvent-weld compatible.',
    chips: ['pvc pipe 1 inch', 'agri grade', 'ISI marked', 'bundle of 10'],
    score: 90,
    time: '1.6s',
  },
]

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

export default function LiveDemo() {
  const [typed, setTyped] = useState('')
  const [dTitle, setDTitle] = useState('')
  const [dDesc, setDDesc] = useState('')
  const [dChips, setDChips] = useState([])
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [footL, setFootL] = useState('idle')
  const [footT, setFootT] = useState('1.9s')
  const aliveRef = useRef(true)

  useEffect(() => {
    aliveRef.current = true
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    async function cycle() {
      let i = 0
      while (aliveRef.current) {
        const d = DEMOS[i++ % DEMOS.length]
        setTyped('')
        setDTitle('')
        setDDesc('')
        setDChips([])
        setScore(0)
        setShowScore(false)
        setFootL('waiting for input')
        await wait(700)
        for (let c = 1; c <= d.input.length && aliveRef.current; c++) {
          setTyped(d.input.slice(0, c))
          await wait(d.input[c - 1] === ' ' ? 30 : 20)
        }
        await wait(420)
        setFootL('generating…')
        setFootT(d.time)
        const tw = d.title.split(' ')
        for (let a = 1; a <= tw.length && aliveRef.current; a++) {
          setDTitle(tw.slice(0, a).join(' '))
          await wait(50)
        }
        const dw = d.desc.split(' ')
        for (let b = 1; b <= dw.length && aliveRef.current; b++) {
          setDDesc(dw.slice(0, b).join(' '))
          await wait(24)
        }
        setDChips(d.chips)
        await wait(340)
        setScore(d.score)
        setShowScore(true)
        setFootL(`complete · score ${d.score}/100`)
        await wait(4600)
      }
    }

    if (reduce) {
      const d = DEMOS[0]
      setTyped(d.input)
      setDTitle(d.title)
      setDDesc(d.desc)
      setDChips(d.chips)
      setScore(d.score)
      setShowScore(true)
      setFootL(`complete · score ${d.score}/100`)
      setFootT(d.time)
    } else {
      cycle()
    }

    return () => {
      aliveRef.current = false
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      role="region"
      aria-label="Live demonstration of our AI listing generator"
      className="overflow-hidden rounded-[18px] border border-ink bg-dark text-dark-fg shadow-[0_40px_90px_-34px_rgba(26,24,15,0.55)]"
    >
      <div className="flex items-center gap-2 border-b border-dark-fg/10 px-[18px] py-[13px]">
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <span className="ml-2 font-mono text-[.72rem] text-dark-soft">commerce-ai — listing agent</span>
      </div>

      <div className="p-5">
        <span className="font-mono text-[.62rem] uppercase tracking-[.1em] text-dark-mute">Input — what the client actually typed</span>
        <div className="my-2 min-h-[3.4em] rounded-[10px] border border-dark-fg/10 bg-dark-2 px-[15px] py-[13px] font-mono text-[.84rem] leading-[1.55] text-[#D8D4C4]">
          {typed}
          <span className="inline-block w-2 animate-blink bg-gold">&nbsp;</span>
        </div>

        <span className="font-mono text-[.62rem] uppercase tracking-[.1em] text-dark-mute">Output — generated &amp; scored</span>
        <div className="min-h-[238px]" aria-live="polite">
          <div className="border-b border-dark-fg/10 py-[11px] text-[.88rem]">
            <span className="mb-1 block font-mono text-[.6rem] uppercase tracking-[.1em] text-dark-mute">Optimised title</span>
            <span className="leading-[1.5]">{dTitle}</span>
          </div>
          <div className="border-b border-dark-fg/10 py-[11px] text-[.88rem]">
            <span className="mb-1 block font-mono text-[.6rem] uppercase tracking-[.1em] text-dark-mute">Description</span>
            <span className="leading-[1.5] text-[#C9C5B4]">{dDesc}</span>
          </div>
          <div className="border-b border-dark-fg/10 py-[11px]">
            <span className="mb-1 block font-mono text-[.6rem] uppercase tracking-[.1em] text-dark-mute">Keywords</span>
            <div className="flex min-h-[24px] flex-wrap gap-1.5">
              {dChips.map((chip) => (
                <span key={chip} className="rounded-full border border-dark-fg/18 px-2.5 py-1 font-mono text-[.66rem] text-[#C9C5B4]">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="py-[11px]">
            <span className="mb-1 block font-mono text-[.6rem] uppercase tracking-[.1em] text-dark-mute">Listing quality score</span>
            <div className="mt-1 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-dark-fg/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-positive to-gold transition-[width] duration-[900ms] ease-out"
                  style={{ width: `${showScore ? score : 0}%` }}
                />
              </div>
              <span className="min-w-[3.4ch] text-right font-mono text-[.82rem] text-gold-light">{showScore ? score : 0}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-dark-fg/10 px-5 py-3 font-mono text-[.7rem] text-dark-mute">
        <span>{footL}</span>
        <span>
          avg <b className="font-medium text-positive">{footT}</b> per listing
        </span>
      </div>
    </motion.div>
  )
}
