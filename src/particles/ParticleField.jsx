import { useMemo, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { FORMATIONS } from './formations.js'

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;      // 0 -> aPos, 1 -> bPos
  uniform vec3  uMouse;      // world-space pointer
  uniform float uMouseForce;
  uniform float uSize;
  uniform float uDpr;

  attribute vec3  aPos;      // formation A
  attribute vec3  bPos;      // formation B
  attribute float aSeed;
  attribute vec3  aColor;

  varying vec3  vColor;
  varying float vFade;

  // cheap value noise
  float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }

  void main() {
    // stagger the morph per particle so it flows instead of snapping as one mass
    float delay = aSeed * 0.35;
    float t = clamp((uMorph - delay) / (1.0 - 0.35), 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);                    // smoothstep easing
    vec3 pos = mix(aPos, bPos, t);

    // organic drift — never fully still
    float n = hash(floor(pos * 2.0 + aSeed));
    pos.x += sin(uTime * 0.35 + aSeed * 6.28) * 0.045;
    pos.y += cos(uTime * 0.28 + aSeed * 5.13) * 0.045;
    pos.z += sin(uTime * 0.22 + n * 6.28) * 0.05;

    // mid-morph bloom: particles arc outward while travelling
    float travel = sin(t * 3.14159);
    pos += normalize(pos + 0.0001) * travel * 0.42 * (0.35 + aSeed * 0.65);

    // pointer repulsion
    vec3 d = pos - uMouse;
    d.z *= 0.35;
    float dist = length(d);
    float push = uMouseForce / (1.0 + dist * dist * 5.5);
    pos += normalize(d + 0.0001) * push;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = uSize * (0.45 + aSeed * 0.9);
    size *= 1.0 + travel * 0.7;                     // flare while morphing
    gl_PointSize = size * uDpr * (13.0 / -mv.z);

    vColor = aColor;
    vFade = smoothstep(15.0, 2.5, -mv.z) * (0.62 + 0.38 * aSeed);
  }
`

const FRAG = /* glsl */ `
  precision mediump float;
  varying vec3  vColor;
  varying float vFade;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = dot(c, c);
    if (d > 0.25) discard;                          // round points
    float alpha = smoothstep(0.25, 0.0, d);
    gl_FragColor = vec4(vColor, alpha * vFade);
  }
`

// Brand palette, weighted so gold reads as the accent rather than the field.
const PALETTE = [
  ['#e0b45c', 0.30],
  ['#c4881a', 0.22],
  ['#5fbf95', 0.16],
  ['#f6f3ea', 0.20],
  ['#1d5c3c', 0.12],
]

function pickColor(r) {
  let acc = 0
  for (const [hex, w] of PALETTE) {
    acc += w
    if (r <= acc) return new THREE.Color(hex)
  }
  return new THREE.Color(PALETTE[0][0])
}

export default function ParticleField({ count = 42000, formation = 0, pointerForce = 0.55, pointSize = 1, shiftX = 1.6, faceFront = false, rebuildKey = '' }) {
  const points = useRef()
  const mat = useRef()
  const { viewport } = useThree()

  const targets = useMemo(() => FORMATIONS.map((f) => f.build(count)), [count, rebuildKey])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const seeds = new Float32Array(count)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      seeds[i] = Math.random()
      const c = pickColor(Math.random())
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    g.setAttribute('position', new THREE.BufferAttribute(targets[0].slice(), 3))
    g.setAttribute('aPos', new THREE.BufferAttribute(targets[0].slice(), 3))
    g.setAttribute('bPos', new THREE.BufferAttribute(targets[0].slice(), 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))
    g.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))
    g.setDrawRange(0, count)
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 12)
    return g
  }, [count, targets])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 1 },
      uMouse: { value: new THREE.Vector3(999, 999, 0) },
      uMouseForce: { value: pointerForce },
      uSize: { value: pointSize },
      uDpr: { value: Math.min(window.devicePixelRatio || 1, 2) },
    }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  )

  // ponytail: field is `shown`, not `current` — `state.current` is the ref itself
  const state = useRef({ shown: 0, morph: 1, target: new THREE.Vector3(999, 999, 0) })

  // Kick off a morph whenever the requested formation changes.
  useEffect(() => {
    const s = state.current
    if (formation === s.shown) return
    const g = geo
    // freeze where we are into A, aim B at the new formation
    g.attributes.aPos.array.set(targets[s.shown])
    g.attributes.bPos.array.set(targets[formation])
    g.attributes.aPos.needsUpdate = true
    g.attributes.bPos.needsUpdate = true
    s.shown = formation
    s.morph = 0
    uniforms.uMorph.value = 0
  }, [formation, geo, targets, uniforms])

  // when the logo finishes decoding, swap whatever is showing for the new cloud
  useEffect(() => {
    const s = state.current
    geo.attributes.aPos.array.set(targets[s.shown])
    geo.attributes.bPos.array.set(targets[s.shown])
    geo.attributes.aPos.needsUpdate = true
    geo.attributes.bPos.needsUpdate = true
  }, [targets, geo])

  useEffect(() => { uniforms.uMouseForce.value = pointerForce }, [pointerForce, uniforms])
  useEffect(() => { uniforms.uSize.value = pointSize }, [pointSize, uniforms])

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      state.current.target.set((x * viewport.width) / 2 - shiftX, (y * viewport.height) / 2, 0)
    }
    function onLeave() { state.current.target.set(999, 999, 0) }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [viewport.width, viewport.height, shiftX])

  useFrame((_, dt) => {
    const s = state.current
    const d = Math.min(dt, 0.05)
    uniforms.uTime.value += d
    if (s.morph < 1) {
      s.morph = Math.min(1, s.morph + d * 0.62)
      uniforms.uMorph.value = s.morph
    }
    uniforms.uMouse.value.lerp(s.target, 0.12)
    if (points.current) {
      if (faceFront) {
        // words must read flat — ease the spin back to zero instead of stopping dead
        const y = points.current.rotation.y
        const wrapped = Math.atan2(Math.sin(y), Math.cos(y))
        points.current.rotation.y = wrapped * (1 - Math.min(1, d * 2.4))
      } else {
        points.current.rotation.y += d * 0.035
      }
    }
  })

  // Offset the whole field right of the headline; the points still spin in place.
  return (
    <group position={[shiftX, 0, 0]}>
      <points ref={points} geometry={geo} frustumCulled={false}>
        <shaderMaterial
          ref={mat}
          vertexShader={VERT}
          fragmentShader={FRAG}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}
