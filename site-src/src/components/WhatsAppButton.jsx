import { motion } from 'framer-motion'
import { IconWhatsapp } from './Icons.jsx'

// Single floating action, bottom-right — per PDF guidance, one is enough.
export default function WhatsAppButton({ phone = '910000000000', message = "Hi Fernbridge Digital, I'd like to know more about your services." }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" style={{ animationDuration: '2.4s' }} />
      <IconWhatsapp width={26} height={26} className="relative" />
    </motion.a>
  )
}
