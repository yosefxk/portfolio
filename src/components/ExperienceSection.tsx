import { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/experience'

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedExp, setSelectedExp] = useState<string>(experiences[0].id)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const active = experiences.find(e => e.id === selectedExp) || experiences[0]

  return (
    <section id="experience" ref={ref} className={`experience-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="work-header">
          <div className="section-eyebrow">Track Record & Proven Impact</div>
          <h2 className="section-title">
            <span className="gradient-text">Career</span> Milestones
          </h2>
          <p className="section-subtitle">
            Leading high-scale automotive telemetry, distributed pipelines, enterprise AI, and mission-critical operations.
          </p>
        </div>

        <div className="experience-container">
          {/* Company selector tabs */}
          <div className="experience-tabs" role="tablist" aria-label="Work Experience Companies">
            {experiences.map(exp => (
              <button
                key={exp.id}
                role="tab"
                aria-selected={selectedExp === exp.id}
                className={`exp-tab-btn ${selectedExp === exp.id ? 'active' : ''}`}
                onClick={() => setSelectedExp(exp.id)}
                style={{ '--tab-color': exp.color } as React.CSSProperties}
              >
                <div className="tab-indicator" />
                <div className="tab-text-wrap">
                  <span className="tab-company">{exp.company}</span>
                  <span className="tab-role-brief">{exp.role}</span>
                </div>
                {exp.badge && <span className="tab-badge">{exp.badge}</span>}
              </button>
            ))}
          </div>

          {/* Active experience content panel */}
          <div
            className="experience-panel"
            style={{ '--active-color': active.color } as React.CSSProperties}
          >
            <div className="exp-panel-header">
              <div className="exp-header-left">
                <span className="exp-company-tag" style={{ color: active.color }}>
                  {active.company}
                </span>
                <h3 className="exp-role-title">{active.role}</h3>
                <div className="exp-meta-row">
                  <span className="exp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {active.period}
                  </span>
                  <span className="exp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {active.location}
                  </span>
                  {active.badge && <span className="exp-pill-badge">{active.badge}</span>}
                </div>
              </div>
            </div>

            <p className="exp-summary-text">{active.summary}</p>

            <div className="exp-highlights-box">
              <h4 className="exp-box-title">Key Accomplishments & Verified Metrics</h4>
              <ul className="exp-bullets-list">
                {active.highlights.map((h, i) => (
                  <li key={i} className="exp-bullet-item">
                    <span className="bullet-arrow" style={{ color: active.color }}>▹</span>
                    <span className="bullet-text">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-tags-row">
              {active.tags.map(t => (
                <span key={t} className="exp-tag-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
