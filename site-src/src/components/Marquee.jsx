const ITEMS = ['Websites', 'Web Applications', 'AI Agents', 'Automation', 'Dashboards', 'Care Plans', 'E-commerce', 'MVP Builds']

function Track() {
  return (
    <div className="flex items-center">
      {ITEMS.map((m) => (
        <span key={m} className="inline-flex items-center gap-[22px] whitespace-nowrap px-[22px] font-display text-[.95rem] font-semibold">
          {m}
          <i className="h-1.5 w-1.5 rounded-full bg-gold" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/12 bg-surface py-[18px]">
      <div className="flex w-max animate-marquee gap-0">
        <Track />
        <Track aria-hidden="true" />
      </div>
    </div>
  )
}
