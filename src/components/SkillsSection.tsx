import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

const TECH_ICONS: Record<string, string> = {
  'React': '⚛️', 'TypeScript': '🔷', 'Express': '🟩',
  'SQLite': '🗄️', 'Recharts': '📊', 'Docker': '🐳',
  'Next.js': '▲', 'FastAPI': '⚡', 'Python': '🐍',
  'OAuth': '🔐', 'Streamlit': '🎈',
}

export default function SkillsSection({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

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

  const techCounts = projects.flatMap(p => p.stack).reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] || 0) + 1; return acc
  }, {})
  const techs = Object.entries(techCounts).sort((a, b) => b[1] - a[1])

  return (
    <section id="stack" ref={ref} className={`skills-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="work-header">
          <h2 className="section-title">
            <span className="gradient-text">Tech</span> Stack
          </h2>
          <p className="section-subtitle">Everything powering these projects.</p>
        </div>

        <div className="skills-grid">
          {techs.map(([tech, count], i) => (
            <div
              key={tech}
              className="skill-card"
              style={{ animationDelay: visible ? `${i * 0.06}s` : '0s' }}
            >
              <span className="skill-icon">{TECH_ICONS[tech] || '🔧'}</span>
              <span className="skill-name">{tech}</span>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar"
                  style={{ width: `${(count / projects.length) * 100}%` }}
                />
              </div>
              <span className="skill-count">{count}/{projects.length} projects</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
