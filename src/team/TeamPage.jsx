import * as D from '../data.js'
import logoIcon from '../assets/logo-icon-white.png'

export default function TeamPage() {
  return (
    <div className="page">
      <header className="page-bar">
        <div className="wrap page-bar-in">
          <a href="/" className="brand">
            <span className="brand-logo" style={{ '--logo': `url(${logoIcon})` }} aria-hidden="true"><span className="brand-mark" /></span>
            ठिkaana
          </a>
          <a href="/" className="page-back">← Back to site</a>
        </div>
      </header>

      <main className="wrap page-main">
        <span className="eyebrow">Know Our Team</span>
        <h1>The people behind the systems.</h1>
        <p className="lede">
          Thirty-four years running production systems at scale — engineering from Munich,
          Stuttgart and Bengaluru, operations and data, and client success with a 98%+
          satisfaction record across finance and healthcare.
        </p>

        <div className="grid-4 team-grid">
          {D.TEAM.map((m) => (
            <a className="card member" key={m.id} href={`about.html?m=${m.id}`}>
              <img src={m.photo} alt={m.name} loading="lazy" />
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p className="member-bio">{m.bio}</p>
              <span className="visit">About {m.name.split(' ')[0]} <i>→</i></span>
            </a>
          ))}
        </div>
      </main>

      <footer className="page-foot">
        <div className="wrap page-foot-in">
          <a href="/" className="page-back">← Back to site</a>
          <small>© {new Date().getFullYear()} ठिkaana. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}
