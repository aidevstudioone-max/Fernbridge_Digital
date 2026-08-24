// Target point clouds the particle field morphs between.
// Every generator returns a Float32Array of length count*3, so the shader can
// blend any formation into any other by index.

const TAU = Math.PI * 2

function rand(seed) {
  // ponytail: tiny deterministic PRNG so formations look identical every reload
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

/** The 4-square brand mark: 2x2 tiles, one of them an outline. */
export function logoMark(count, size = 3.4) {
  const out = new Float32Array(count * 3)
  const r = rand(7)
  const gap = size * 0.09
  const tile = (size - gap) / 2
  const tiles = [
    { x: -1, y: 1, outline: false },
    { x: 1, y: 1, outline: false },
    { x: -1, y: -1, outline: false },
    { x: 1, y: -1, outline: true },
  ]
  for (let i = 0; i < count; i++) {
    const t = tiles[i % 4]
    const cx = t.x * (tile / 2 + gap / 2)
    const cy = t.y * (tile / 2 + gap / 2)
    let px, py
    if (t.outline) {
      // points along the tile border
      const e = Math.floor(r() * 4)
      const u = (r() - 0.5) * tile
      const half = tile / 2
      if (e === 0) { px = u; py = half }
      else if (e === 1) { px = u; py = -half }
      else if (e === 2) { px = half; py = u }
      else { px = -half; py = u }
      const w = (r() - 0.5) * tile * 0.06
      px += w; py += w
    } else {
      px = (r() - 0.5) * tile
      py = (r() - 0.5) * tile
    }
    out[i * 3] = cx + px
    out[i * 3 + 1] = cy + py
    out[i * 3 + 2] = (r() - 0.5) * 0.16
  }
  return out
}

/** Fibonacci sphere — "reach". */
export function sphere(count, radius = 2.3) {
  const out = new Float32Array(count * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))
  const r = rand(11)
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const rad = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    const jitter = 1 + (r() - 0.5) * 0.05
    out[i * 3] = Math.cos(theta) * rad * radius * jitter
    out[i * 3 + 1] = y * radius * jitter
    out[i * 3 + 2] = Math.sin(theta) * rad * radius * jitter
  }
  return out
}

/** Clustered nodes joined by edges — "systems in production". */
export function network(count, spread = 3.0) {
  const out = new Float32Array(count * 3)
  const r = rand(23)
  const NODES = 26
  const nodes = []
  for (let n = 0; n < NODES; n++) {
    nodes.push([
      (r() - 0.5) * spread * 2,
      (r() - 0.5) * spread * 1.25,
      (r() - 0.5) * spread * 0.9,
    ])
  }
  // edges between reasonably close nodes
  const edges = []
  for (let a = 0; a < NODES; a++) {
    for (let b = a + 1; b < NODES; b++) {
      const dx = nodes[a][0] - nodes[b][0]
      const dy = nodes[a][1] - nodes[b][1]
      const dz = nodes[a][2] - nodes[b][2]
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < spread * 0.72) edges.push([a, b])
    }
  }
  for (let i = 0; i < count; i++) {
    if (i % 5 === 0 || edges.length === 0) {
      // dense blob at a node
      const n = nodes[i % NODES]
      const rr = 0.10 + r() * 0.05
      out[i * 3] = n[0] + (r() - 0.5) * rr
      out[i * 3 + 1] = n[1] + (r() - 0.5) * rr
      out[i * 3 + 2] = n[2] + (r() - 0.5) * rr
    } else {
      const e = edges[i % edges.length]
      const a = nodes[e[0]]
      const b = nodes[e[1]]
      const t = r()
      const w = 0.02
      out[i * 3] = a[0] + (b[0] - a[0]) * t + (r() - 0.5) * w
      out[i * 3 + 1] = a[1] + (b[1] - a[1]) * t + (r() - 0.5) * w
      out[i * 3 + 2] = a[2] + (b[2] - a[2]) * t + (r() - 0.5) * w
    }
  }
  return out
}

/** Flat lattice — "structure / the grid". */
export function grid(count, size = 5.2) {
  const out = new Float32Array(count * 3)
  const side = Math.ceil(Math.sqrt(count))
  const r = rand(31)
  for (let i = 0; i < count; i++) {
    const gx = i % side
    const gy = Math.floor(i / side)
    const x = (gx / (side - 1) - 0.5) * size
    const y = (gy / (side - 1) - 0.5) * size * 0.56
    out[i * 3] = x
    out[i * 3 + 1] = y
    // gentle ripple so it reads as a surface, not a plane
    out[i * 3 + 2] = Math.sin(x * 1.6) * Math.cos(y * 1.9) * 0.34 + (r() - 0.5) * 0.02
  }
  return out
}

/** Loose ambient cloud — the resting state. */
export function nebula(count, spread = 5.5) {
  const out = new Float32Array(count * 3)
  const r = rand(47)
  for (let i = 0; i < count; i++) {
    const theta = r() * TAU
    const rad = Math.pow(r(), 0.55) * spread * 0.5
    out[i * 3] = Math.cos(theta) * rad * 1.5
    out[i * 3 + 1] = (r() - 0.5) * spread * 0.5
    out[i * 3 + 2] = Math.sin(theta) * rad
  }
  return out
}

/**
 * Sample an image's opaque pixels into a point cloud.
 * Used for the brand mark: the logo PNG is white-on-transparent, so alpha
 * is the ink channel.
 */
export function imageCloud(count, img, { worldWidth = 3.8, alphaCut = 110 } = {}) {
  const out = new Float32Array(count * 3)

  // downscale first — we only need enough resolution to scatter points over
  const W = 360
  const H = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * W))
  const cv = document.createElement('canvas')
  cv.width = W
  cv.height = H
  const ctx = cv.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, W, H)

  const data = ctx.getImageData(0, 0, W, H).data
  const inked = []
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4 + 3] > alphaCut) inked.push(x, y)
    }
  }
  const hits = inked.length / 2
  if (hits === 0) return nebula(count)

  const r = rand(83)
  const scale = worldWidth / W
  for (let i = 0; i < count; i++) {
    const j = Math.floor(r() * hits) * 2
    const x = inked[j] + (r() - 0.5) * 1.35
    const y = inked[j + 1] + (r() - 0.5) * 1.35
    out[i * 3] = (x - W / 2) * scale
    out[i * 3 + 1] = -(y - H / 2) * scale
    out[i * 3 + 2] = (r() - 0.5) * 0.2
  }
  return out
}

// The brand mark is an image, so it can only be sampled once the file has
// decoded. Until then the mark formation falls back to the abstract tiles.
let logoImg = null
export function setLogoImage(img) { logoImg = img }
export function hasLogoImage() { return !!logoImg }

/**
 * Sample the glyphs of `lines` into a point cloud.
 * Draws the text to an offscreen canvas, then scatters particles across the
 * pixels that got inked — so any string becomes a formation.
 */
export function textCloud(count, lines, { worldWidth = 6.4, font = '700 128px "Instrument Sans", sans-serif' } = {}) {
  const out = new Float32Array(count * 3)
  const rows = Array.isArray(lines) ? lines : [lines]

  const W = 1400
  const lineH = 168
  const H = Math.max(240, rows.length * lineH + 80)
  const cv = document.createElement('canvas')
  cv.width = W
  cv.height = H
  const ctx = cv.getContext('2d', { willReadFrequently: true })
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  rows.forEach((row, i) => {
    // shrink to fit the canvas width
    let px = 128
    ctx.font = font.replace(/\d+px/, `${px}px`)
    while (ctx.measureText(row).width > W - 90 && px > 22) {
      px -= 4
      ctx.font = font.replace(/\d+px/, `${px}px`)
    }
    const y = H / 2 + (i - (rows.length - 1) / 2) * lineH
    ctx.fillText(row, W / 2, y)
  })

  const data = ctx.getImageData(0, 0, W, H).data
  const inked = []
  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      if (data[(y * W + x) * 4 + 3] > 128) inked.push(x, y)
    }
  }

  const r = rand(59)
  const scale = worldWidth / W
  const hits = inked.length / 2
  if (hits === 0) return nebula(count)

  for (let i = 0; i < count; i++) {
    const j = Math.floor(r() * hits) * 2
    const x = inked[j] + (r() - 0.5) * 1.6
    const y = inked[j + 1] + (r() - 0.5) * 1.6
    out[i * 3] = (x - W / 2) * scale
    out[i * 3 + 1] = -(y - H / 2) * scale
    out[i * 3 + 2] = (r() - 0.5) * 0.13
  }
  return out
}

const SERVICES = [
  ['Website', 'Development'],
  ['Custom Web', 'Applications'],
  ['AI &', 'Automation'],
  ['Data & Business', 'Solutions'],
]

export const FORMATIONS = [
  { key: 'mark', label: 'Brand mark', build: (n) => (logoImg ? imageCloud(n, logoImg) : logoMark(n)) },
  ...SERVICES.map((lines, i) => ({
    key: `svc${i}`,
    label: lines.join(' '),
    service: true,
    build: (n) => textCloud(n, lines),
  })),
  { key: 'network', label: 'Systems', build: network },
  { key: 'sphere', label: 'Reach', build: sphere },
  { key: 'grid', label: 'Structure', build: grid },
  { key: 'nebula', label: 'Nebula', build: nebula },
]
