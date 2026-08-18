import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'

// Counts up once when scrolled into view. GSAP drives the tween (a plain
// object proxy), React only re-renders the formatted text on each tick.
export default function Counter({ to, decimals = 0, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const obj = { v: 0 }
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: 'power2.out',
      onUpdate: () => setValue(obj.v),
    })
    return () => tween.kill()
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
