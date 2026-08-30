import * as D from '../data.js'
import logoIcon from '../assets/logo-icon-white.png'

const params = new URLSearchParams(window.location.search)
const member = D.TEAM.find((m) => m.id === params.get('m')) || D.TEAM[0]

export default function AboutPage() {
  const m = member
  const story = m.about ?? [m.bio]

  return (
    <div className="page">
      <header className="page-bar">
        <div className="wrap page-bar-in">
          <a href="/" className="brand">
            <span className="brand-logo" style={{ '--logo': `url(${logoIcon})` }} aria-hidden="true"><span className="brand-mark" /></span>
            ठिkaana
          </a>
          <a href="team.html" className="page-back">← Back to team</a>
        </div>
      </header>

      <main className="wrap page-main about">
        <div className="about-head">
          <img className="about-photo" src={m.photo} alt={m.name} />
          <div>
            <span className="eyebrow">About Me</span>
            <h1>{m.name}</h1>
            <p className="role">{m.role}</p>
            {m.location && <p className="about-loc">{m.location}</p>}
          </div>
        </div>

        <div className="about-story">
          {story.map((para, i) => (
            <p key={i} className={i === story.length - 1 ? 'about-close' : undefined}>{para}</p>
          ))}
        </div>
      </main>

      <footer className="page-foot">
        <div className="wrap page-foot-in">
          <a href="team.html" className="page-back">← Back to team</a>
          <small>© {new Date().getFullYear()} ठिkaana. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}
