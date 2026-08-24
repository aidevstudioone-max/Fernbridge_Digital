import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField.jsx'
import { FORMATIONS, setLogoImage } from './formations.js'
import logoIcon from '../assets/logo-icon-white.png'

// The brand-mark formation is sampled from the logo PNG, so it can only be
// built once the file has decoded. Until then the field shows the fallback.
function useLogo() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.src = logoIcon
    img.decode()
      .then(() => {
        if (cancelled) return
        setLogoImage(img)
        setReady(true)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])
  return ready
}

// Lazy-loaded so three.js lands in its own chunk and never blocks first paint.
export default function Field({ formation, narrow }) {
  const logoReady = useLogo()
  return (
    <Canvas
      camera={{ position: [0, 0, 7.4], fov: 52 }}
      dpr={[1, 2]}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
    >
      <ParticleField
        count={narrow ? 9000 : 38000}
        formation={formation}
        pointerForce={narrow ? 0.3 : 0.55}
        pointSize={narrow ? 0.8 : 0.95}
        shiftX={narrow ? 0 : 2.1}
        faceFront={!!FORMATIONS[formation]?.service}
        rebuildKey={logoReady ? 'logo' : 'base'}
      />
    </Canvas>
  )
}
