import { motion } from 'framer-motion'

// The 4-square brand mark. Continuously rotates and each tile cycles
// through the brand colors on a staggered offset, so the color "travels"
// around the grid rather than all four tiles flashing in sync.
const COLORS = ['#1D5C3C', '#C4881A', '#1D5C3C', '#1D5C3C']
const CYCLE = 3.2

function Tile({ delay, outline = false }) {
  const colorProp = outline ? 'borderColor' : 'backgroundColor'
  return (
    <motion.span
      className={`rounded-[2px] ${outline ? 'border-2' : ''}`}
      animate={{ [colorProp]: COLORS }}
      transition={{ duration: CYCLE, repeat: Infinity, ease: 'linear', times: [0, 0.33, 0.66, 1], delay }}
    />
  )
}

export default function LogoMark({ size = 26 }) {
  return (
    <motion.span
      className="relative grid grid-cols-2 grid-rows-2 gap-[3px]"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <Tile delay={0} />
      <Tile delay={CYCLE * 0.25} />
      <Tile delay={CYCLE * 0.5} />
      <Tile delay={CYCLE * 0.75} outline />
    </motion.span>
  )
}
