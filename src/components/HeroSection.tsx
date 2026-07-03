import { useEffect, useRef, useState } from 'react'

const WORDS = ['production apps', 'real APIs', 'live data', 'Docker containers', 'open data']

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const current = WORDS[wordIndex]
    const speed = isDeleting ? 40 : 80
    const pause = isDeleting ? 0 : 1800

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex(i => (i + 1) % WORDS.length)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, isDeleting, wordIndex])

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-eyebrow">
          <span className="live-dot" />
          <span>Open to collabs · Building in Israel</span>
        </div>

        <h1 className="hero-heading">
          I build things with
          <span className="typewriter-wrap">
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </span>
        </h1>

        <p className="hero-body">
          Full-stack developer focused on data-heavy apps and live monitoring systems. Every project here is deployed, real, and solves an actual problem.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            See the work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="https://github.com/yosefxk" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/JosephLampert" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn
          </a>
          <a href="mailto:josephnlampert@gmail.com" className="btn-secondary">
            Message Me
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '4', label: 'Apps deployed' },
            { num: '174k+', label: 'DB records' },
            { num: '17+', label: 'APIs wired' },
            { num: '3', label: 'Languages' },
          ].map(({ num, label }) => (
            <div key={label} className="hero-stat">
              <span className="hero-stat-num">{num}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="hero-scroll-hint"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to projects"
      >
        <div className="scroll-chevrons">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>
    </section>
  )
}
