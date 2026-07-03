import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Staggered letter animation
    if (!titleRef.current) return
    const chars = titleRef.current.querySelectorAll('.char')
    chars.forEach((char, i) => {
      ;(char as HTMLElement).style.animationDelay = `${i * 0.06}s`
    })
  }, [])

  const title = "My Projects"

  return (
    <section className="hero">
      {/* Animated grid lines background */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Radial glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for collaboration
        </div>

        <h1 className="hero-title" ref={titleRef} aria-label={title}>
          {title.split('').map((char, i) => (
            <span key={i} className={`char ${char === ' ' ? 'space' : ''}`}>
              {char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          A collection of real-world apps — from security monitoring to government data APIs.
          <br />
          Built for production. Deployed in Docker. Shipped.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Live Apps</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">174k+</span>
            <span className="stat-label">DB Records</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">17+</span>
            <span className="stat-label">APIs Integrated</span>
          </div>
        </div>

        <a href="#projects" className="hero-cta">
          See the work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
