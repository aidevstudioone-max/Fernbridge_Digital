import { motion } from 'framer-motion'

const LOGS = [
  { t: '00:00', m: 'connect   supplier-catalogue-q3.pdf (48 pages)', c: '', col: '#D8D4C4' },
  { t: '00:03', m: 'split     48 pages → 48 tasks', c: '', col: '#D8D4C4' },
  { t: '00:07', m: 'extract   page 1–12  · 61 rows', c: '99%', col: '#D8D4C4' },
  { t: '00:14', m: 'extract   page 13–28 · 74 rows', c: '97%', col: '#D8D4C4' },
  { t: '00:22', m: 'extract   page 29–41 · 58 rows', c: '94%', col: '#D8D4C4' },
  { t: '00:29', m: 'extract   page 42–48 · 25 rows', c: '88%', col: '#D8D4C4' },
  { t: '00:33', m: 'flag      6 rows below threshold → review queue', c: '', col: '#D8D4C4' },
  { t: '00:36', m: 'normalise dimensions → mm · prices → paise', c: '', col: '#D8D4C4' },
  { t: '00:41', m: 'commit    218 rows · 0 duplicates', c: '', col: '#5FBF95' },
]

export default function TerminalLog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className="overflow-hidden rounded-[18px] border border-dark-fg/14 bg-dark-2"
    >
      <div className="flex items-center gap-2 border-b border-dark-fg/12 px-[18px] py-[13px]">
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <i className="h-[9px] w-[9px] rounded-full bg-dark-fg/20" />
        <span className="ml-2 font-mono text-[.72rem] text-dark-soft">extraction-agent — run #4417</span>
      </div>
      <div className="p-5">
        <div className="font-mono text-[.76rem] leading-[1.7]">
          {LOGS.map((l, i) => (
            <motion.div
              key={l.t + l.m}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.19 }}
              className="flex gap-3 py-[5px]"
            >
              <span className="flex-none text-dark-mute">{l.t}</span>
              <span style={{ color: l.col }} className="whitespace-pre">{l.m}</span>
              <span className="ml-auto flex-none text-indigo-soft">{l.c}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-[18px] flex justify-between gap-3 border-t border-dark-fg/12 pt-4 font-mono text-[.8rem] font-medium">
          <span>218 rows extracted · 6 flagged</span>
          <span className="text-positive">done in 41s</span>
        </div>
      </div>
    </motion.div>
  )
}
