import { useEffect, useRef, useState } from 'react'

interface SkillCategory {
  title: string
  icon: string
  color: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data & Distributed Systems',
    icon: '🗄️',
    color: '#00c2ff',
    skills: [
      'Distributed Telemetry Ingestion',
      'Vehicle Sensor Telemetry Lakes',
      'Columnar Storage (Parquet)',
      'ETL / ELT Architecture',
      'Snowflake & dbt',
      'PostgreSQL & SQLite',
      'Metadata Cataloging',
      'Data Integrity & Recovery'
    ]
  },
  {
    title: 'Languages & Full-Stack',
    icon: '⚡',
    color: '#8b5cf6',
    skills: [
      'Python (Advanced / Async)',
      'TypeScript / JavaScript',
      'React & Next.js',
      'FastAPI & Express',
      'Advanced Analytical SQL',
      'Linux / Shell Scripting',
      'REST & SSE Streaming',
      'TailwindCSS & Modern UI'
    ]
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    icon: '🐳',
    color: '#10b981',
    skills: [
      'Docker & Containerization',
      'Kubernetes (Argo Workflows)',
      'AWS (S3, Glacier, IAM)',
      'Cloudflare Zero-Trust Tunnels',
      'Portainer & CI/CD Pipelines',
      'Prometheus & Grafana Telemetry',
      'Tailscale Mesh VPN',
      'Nginx & Traefik Reverse Proxies'
    ]
  },
  {
    title: 'Enterprise AI & Automation',
    icon: '🧠',
    color: '#f59e0b',
    skills: [
      'Conversational AI & PM Copilots',
      'Agentic Workflows & Runbooks',
      'Multi-Provider LLM Gateways',
      'Google Gemini, Claude, OpenAI',
      'Local Open Models (Ollama)',
      'Automated Incident & Telemetry Triage',
      'AI Ops & Workflow Automation',
      'Prompt Engineering & Tool Calling'
    ]
  },
  {
    title: 'Program Leadership & Strategy',
    icon: '🎯',
    color: '#ec4899',
    skills: [
      'Technical Program Management (TPM)',
      '30+ ADAS & AV Projects Delivery',
      'Automotive OEM & Tier-1 Delivery',
      '10-Gate Operational Readiness Protocols',
      'Cross-Functional Alignment (R&D / Systems)',
      'Decisive Naval Command (Captain Res.)',
      '1st 🏆 Valedictorian (Summa Cum Laude)',
      'Distributed Latency Cuts (98% Gain)',
      'Operational Cost Optimization ($1M+ ROI)'
    ]
  }
]

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stack" ref={ref} className={`skills-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="work-header">
          <div className="section-eyebrow">Core Competencies</div>
          <h2 className="section-title">
            <span className="gradient-text">Skills</span> & Technology Matrix
          </h2>
          <p className="section-subtitle">
            Comprehensive technical depth across data engineering, cloud infrastructure, AI systems, and technical program leadership.
          </p>
        </div>

        <div className="skills-category-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-category-card"
              style={{
                '--cat-color': cat.color,
                animationDelay: `${i * 0.1}s`
              } as React.CSSProperties}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <div className="skill-items-wrap">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-badge-item">
                    <span className="skill-bullet" style={{ background: cat.color }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
