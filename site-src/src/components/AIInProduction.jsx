import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import TerminalLog from './TerminalLog.jsx'
import { IconCheck } from './Icons.jsx'

const CARDS = [
  { tag: '01 / listing-agent', title: 'Listing & content generation', body: 'Feed it a messy product name. Get an optimised title, a description, keyword tags and a quality score you can sort a whole catalogue by.', note: '→ 4 hrs of copywriting becomes 6 minutes' },
  { tag: '02 / extraction-agent', title: 'Document & catalogue extraction', body: 'PDF price lists, scanned invoices, supplier catalogues — pulled into clean structured rows with a confidence score on every field.', note: '→ only the uncertain rows reach a human' },
  { tag: '03 / reporting-agent', title: 'Reporting agents', body: 'An agent that reads your sales, traffic and review data weekly and writes the summary your manager would have written — anomalies first.', note: '→ a Monday report that writes itself' },
  { tag: '04 / workflow-runner', title: 'Workflow automation', body: 'The connective tissue: form to sheet to WhatsApp to invoice. Triggered, retried, logged. The steps your team currently does by copy-paste at 6pm.', note: '→ zero copy-paste, full audit trail' },
]

const CHECKS = [
  'Confidence score on every extracted field',
  'Low-confidence rows routed to a human review queue',
  'Full run log — input, output, model, cost, duration',
  'A plain-language monthly report, and a real person to call',
]

export default function AIInProduction() {
  return (
    <section id="ai" className="bg-dark py-[104px] text-dark-fg">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-[52px] max-w-[46ch]">
          <span className="mb-3.5 block font-mono text-[.72rem] uppercase tracking-[.12em] text-indigo-soft">02 — AI in production</span>
          <h2 className="mb-4 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            AI that does the work, not AI that talks about it.
          </h2>
          <p className="max-w-[56ch] text-[1.02rem] leading-relaxed text-dark-soft">
            Four AI systems we run today. Each one takes an input, does the tedious part, and hands back something a human can check.
          </p>
        </Reveal>

        <RevealStagger className="mb-[60px] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CARDS.map(({ tag, title, body, note }) => (
            <motion.article
              key={tag}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="rounded-[18px] border border-indigo-soft/22 bg-dark-alt p-7 transition-colors duration-300 hover:border-indigo-soft/55"
            >
              <span className="mb-3.5 block font-mono text-[.68rem] text-indigo-soft">{tag}</span>
              <h3 className="mb-2.5 font-display text-[1.16rem] font-semibold">{title}</h3>
              <p className="text-[.92rem] text-dark-soft">{body}</p>
              <p className="mt-4 border-t border-dark-fg/10 pt-4 font-mono text-[.8rem] text-positive">{note}</p>
            </motion.article>
          ))}
        </RevealStagger>

        <div className="grid grid-cols-1 items-center gap-[52px] lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 font-display text-[1.5rem] font-semibold">Every run is logged, scored, and checkable.</h3>
            <p className="max-w-[56ch] text-dark-soft">
              Most AI pilots die because nobody can tell whether the output was right. Ours report confidence per field, escalate what they're unsure about, and keep a log you can audit months later.
            </p>
            <ul className="mt-[26px] grid gap-3">
              {CHECKS.map((k) => (
                <li key={k} className="flex items-start gap-3 text-[.96rem]">
                  <IconCheck width={17} height={17} className="mt-1 shrink-0 text-positive" strokeWidth={2.4} />
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>

          <TerminalLog />
        </div>
      </div>
    </section>
  )
}
