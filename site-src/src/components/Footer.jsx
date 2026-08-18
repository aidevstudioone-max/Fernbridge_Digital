import LogoMark from './LogoMark.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-ink/12 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-7 text-center">
        <a href="#top" className="flex items-center gap-[11px] font-display text-[1.05rem] font-bold text-ink">
          <LogoMark size={24} />
          Fernbridge Digital
        </a>
        <p className="max-w-[52ch] text-[.86rem] leading-relaxed text-muted">
          We build professional websites, custom web applications, AI-powered solutions and business automation for startups and growing businesses.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[.8rem] text-muted">
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#work" className="hover:text-ink">Work</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </div>
        <p className="mt-2 text-[.76rem] text-muted-dim">© {new Date().getFullYear()} Fernbridge Digital. All rights reserved.</p>
      </div>
    </footer>
  )
}
