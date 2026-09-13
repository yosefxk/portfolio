import { useEffect, useRef, useState } from 'react'

const DOMAINS = [
  'Technical Programs (TPM)',
  'Generative AI & Agentic Ops',
  'Data Infrastructure',
  'Autonomous Telemetry',
  'Cross-Functional Delivery',
  'Distributed Systems'
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
            <strong>Mobileye</strong> Data Infra TPM · Dual US & Israeli Citizen · Ex-Amdocs · Ex-Intel · Valedictorian
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
          Technical Program Manager (TPM) & Data Infrastructure Systems Engineer. Proven track record directing <strong>30+ ADAS & AV projects from inception to data-collection readiness</strong>, scaling autonomous sensor telemetry lakes, architecting <strong>Generative AI copilots & agentic automation</strong> that offload support and cut cloud triage latency by <strong>98% (90s to &lt;2s)</strong> across 12,000+ recording datasets. Dual US & Israeli citizen actively exploring US relocation and high-impact TPM leadership roles.
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

        {/* Quantified impact clusters grouped by institutional origin */}
        <div className="hero-stat-clusters">
          {[
            {
              id: 'mobileye',
              origin: 'Mobileye',
              icon: '🚗',
              color: '#00c2ff',
              metrics: [
                {
                  num: '30+',
                  label: 'ADAS & AV Projects',
                  sub: 'Inception to Readiness & Delivery'
                },
                {
                  num: '98%',
                  label: 'Triage Latency Cut',
                  sub: '90s to <2s on Cloud Pipelines'
                }
              ]
            },
            {
              id: 'amdocs',
              origin: 'Amdocs',
              icon: '⚡',
              color: '#6366f1',
              metrics: [
                {
                  num: '10+',
                  label: 'Custom Streamlit Apps',
                  sub: 'Rapid User Prototyping & Delivery'
                }
              ]
            },
            {
              id: 'intel',
              origin: 'Intel',
              icon: '🔷',
              color: '#0284c7',
              metrics: [
                {
                  num: '$1M+',
                  label: 'Annual Cost Savings',
                  sub: 'Supply Chain ROI & Analytics'
                }
              ]
            },
            {
              id: 'homelab',
              origin: 'BaileyTV',
              icon: '🏠',
              color: '#10b981',
              metrics: [
                {
                  num: '5+',
                  label: 'Custom Apps Deployed',
                  sub: 'Containerized Microservices'
                }
              ]
            },
            {
              id: 'education',
              origin: 'Shenkar College',
              icon: '🎓',
              color: '#f59e0b',
              metrics: [
                {
                  num: '1st 🏆',
                  label: 'Valedictorian',
                  sub: 'Summa Cum Laude'
                }
              ]
            }
          ].map((cluster) => (
            <div
              key={cluster.id}
              className={`hero-stat-cluster cluster-${cluster.id}`}
              style={{ '--cluster-color': cluster.color } as React.CSSProperties}
            >
              <div className="cluster-accent-bar" style={{ background: cluster.color }} />
              
              <div className="cluster-header">
                <span
                  className="cluster-pill"
                  style={{
                    color: cluster.color,
                    borderColor: `${cluster.color}40`,
                    background: `${cluster.color}14`
                  }}
                >
                  <span className="cluster-icon">{cluster.icon}</span>
                  <span className="cluster-name">{cluster.origin}</span>
                </span>
              </div>

              <div className={`cluster-metrics-grid cluster-grid-${cluster.metrics.length}`}>
                {cluster.metrics.map((m) => (
                  <div key={m.label} className="cluster-metric-item">
                    <span className="cluster-metric-num" style={{ color: cluster.color }}>
                      {m.num}
                    </span>
                    <span className="cluster-metric-label">{m.label}</span>
                    <span className="cluster-metric-sub">{m.sub}</span>
                  </div>
                ))}
              </div>
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
