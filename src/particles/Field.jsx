import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField.jsx'
import { FORMATIONS } from './formations.js'

// Lazy-loaded so three.js lands in its own chunk and never blocks first paint.
export default function Field({ formation, narrow }) {
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
      />
    </Canvas>
  )
}
