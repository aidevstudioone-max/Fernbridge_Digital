export default function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <a href="#top" className="font-display text-[1rem] font-bold text-fg">Fernbridge Digital</a>
        <p className="max-w-[52ch] text-[.86rem] leading-relaxed text-muted">
          We build professional websites, custom web applications, AI-powered solutions and business automation for startups and growing businesses.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[.8rem] text-muted">
          <a href="#services" className="hover:text-fg">Services</a>
          <a href="#work" className="hover:text-fg">Work</a>
          <a href="#pricing" className="hover:text-fg">Pricing</a>
          <a href="#contact" className="hover:text-fg">Contact</a>
        </div>
        <p className="mt-4 text-[.76rem] text-muted-dim">© 2026 Fernbridge Digital. All rights reserved.</p>
      </div>
    </footer>
  )
}
