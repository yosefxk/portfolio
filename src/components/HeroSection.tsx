import { useEffect, useRef, useState } from 'react'

const DOMAINS = [
  'Data Infrastructure',
  'Autonomous Telemetry',
  'Technical Programs (TPM)',
  'Enterprise AI Systems',
  'Real-Time Platforms'
]

interface HeroSectionProps {
  onOpenContact: () => void
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const [domainIndex, setDomainIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const current = DOMAINS[domainIndex]
    const speed = isDeleting ? 25 : 60
    const pause = isDeleting ? 0 : 2200

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setDomainIndex(i => (i + 1) % DOMAINS.length)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, isDeleting, domainIndex])

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
          <span className="eyebrow-text">
            <strong>Mobileye</strong> Data Infra TPM · Ex-Amdocs · Ex-Intel · Valedictorian
          </span>
        </div>

        <h1 className="hero-heading">
          Engineering High-Scale
          <br className="heading-br" />
          <span className="typewriter-line">
            <span className="gradient-text">{displayed}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </span>
        </h1>

        <p className="hero-body">
          Data Infrastructure & Systems Engineer and Technical Program Manager. Proven track record directing <strong>18 concurrent automotive OEM programs</strong>, scaling telemetry lakes, cutting pipeline latency by <strong>98%</strong>, and architecting AI operations platforms.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Explore Systems & Apps
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="#experience" className="btn-secondary">
            Career Milestones
          </a>

          <button onClick={onOpenContact} className="btn-secondary btn-connect">
            <span className="connect-dot" />
            Get in Touch
          </button>
        </div>

        {/* Quantified impact badges */}
        <div className="hero-stats">
          {[
            { num: '18', label: 'OEM Programs (Mobileye)', sub: 'Automotive Data Delivery' },
            { num: '98%', label: 'Latency Cut', sub: '90s down to <2s' },
            { num: '$1M+', label: 'Annual Cost Savings', sub: 'Intel Analytics & Automation' },
            { num: '174k+', label: 'Real-Time Records', sub: 'Civil Defense Telemetry' },
            { num: '17+', label: 'Parallel Gov APIs', sub: 'Vehicle Intel Ingestion' },
            { num: '95.5', label: 'Valedictorian', sub: 'Summa Cum Laude (B.Sc.)' }
          ].map(({ num, label, sub }) => (
            <div key={label} className="hero-stat">
              <span className="hero-stat-num gradient-text">{num}</span>
              <span className="hero-stat-label">{label}</span>
              <span className="hero-stat-sub">{sub}</span>
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
