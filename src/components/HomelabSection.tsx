import { useState, useEffect, useRef } from 'react'

export default function HomelabSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'architecture' | 'services' | 'specs'>('architecture')

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

  return (
    <section id="homelab" ref={ref} className={`homelab-showcase-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="work-header">
          <div className="section-eyebrow">Production Infrastructure</div>
          <h2 className="section-title">
            <span className="gradient-text">BaileyTV</span> Homelab & Zero-Trust Cloud
          </h2>
          <p className="section-subtitle">
            An enterprise-grade, zero-trust private cloud running production microservices, AI facial recognition, and continuous telemetry monitoring from home.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="homelab-nav-tabs">
          <button
            className={`hl-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            🛡️ Zero-Trust Architecture
          </button>
          <button
            className={`hl-tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            🐳 Self-Hosted Microservices
          </button>
          <button
            className={`hl-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            ⚡ Enterprise Observability & Specs
          </button>
        </div>

        <div className="homelab-card-surface">
          {activeTab === 'architecture' && (
            <div className="hl-arch-pane animate-fade-in">
              <div className="hl-flow-grid">
                <div className="hl-node-card">
                  <div className="hl-node-icon cloudflare">☁️</div>
                  <h4 className="hl-node-title">1. Cloudflare Edge</h4>
                  <p className="hl-node-desc">Encrypted HTTPS edge proxy with DDoS protection and DNS sinkholing.</p>
                  <span className="hl-badge">Zero Open Ports</span>
                </div>

                <div className="hl-arrow-connector">➔</div>

                <div className="hl-node-card">
                  <div className="hl-node-icon tunnel">🔒</div>
                  <h4 className="hl-node-title">2. Cloudflare Tunnel</h4>
                  <p className="hl-node-desc">Outbound-only daemon tunneling traffic securely to local bridge.</p>
                  <span className="hl-badge">Zero-Trust Auth</span>
                </div>

                <div className="hl-arrow-connector">➔</div>

                <div className="hl-node-card">
                  <div className="hl-node-icon proxy">⚡</div>
                  <h4 className="hl-node-title">3. Nginx / Traefik</h4>
                  <p className="hl-node-desc">Reverse proxy handling SSL termination, rate limits, and routing.</p>
                  <span className="hl-badge">Internal Network</span>
                </div>

                <div className="hl-arrow-connector">➔</div>

                <div className="hl-node-card highlight">
                  <div className="hl-node-icon docker">🐳</div>
                  <h4 className="hl-node-title">4. Docker Containers</h4>
                  <p className="hl-node-desc">Isolated application containers with persistent volume mounts.</p>
                  <span className="hl-badge green">Portainer CI/CD</span>
                </div>
              </div>

              <div className="hl-security-banner">
                <div className="sec-item">
                  <strong>🔒 100% Data Sovereignty:</strong> No external SaaS scans private family photos, logs, or personal documents.
                </div>
                <div className="sec-item">
                  <strong>💰 Cost Optimization:</strong> Replaces $4,000+/year in recurring cloud subscriptions with pennies in home electricity.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="hl-services-pane animate-fade-in">
              <div className="services-grid">
                {[
                  { name: 'Immich', icon: '📸', desc: 'Self-hosted Google Photos alternative with on-device ML facial recognition & object detection.' },
                  { name: 'Jellyfin & *arr Stack', icon: '🎬', desc: 'Automated 4K HDR media server integrated with Radarr and Sonarr automation.' },
                  { name: 'Prometheus & Grafana', icon: '📊', desc: 'Real-time telemetry scraping node metrics, container health, and latency.' },
                  { name: 'AdGuard Home', icon: '🛡️', desc: 'Network-wide DNS sinkholing blocking telemetry, malware, and ads for all home clients.' },
                  { name: 'Vaultwarden', icon: '🔑', desc: 'Lightweight Bitwarden backend keeping all encrypted master credentials 100% on-premise.' },
                  { name: 'Stirling PDF', icon: '📄', desc: 'Local private PDF manipulation and OCR processing engine.' }
                ].map(svc => (
                  <div key={svc.name} className="service-pill-card">
                    <span className="svc-icon">{svc.icon}</span>
                    <div>
                      <h4 className="svc-title">{svc.name}</h4>
                      <p className="svc-desc">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="hl-specs-pane animate-fade-in">
              <div className="specs-grid">
                <div className="spec-box">
                  <span className="spec-lbl">Compute & Virtualization</span>
                  <span className="spec-val">Intel Multi-Core · Docker Engine · Portainer EE</span>
                </div>
                <div className="spec-box">
                  <span className="spec-lbl">Storage Architecture</span>
                  <span className="spec-val">NVMe Fast Cache + Multi-TB RAID Storage Pools</span>
                </div>
                <div className="spec-box">
                  <span className="spec-lbl">Networking & Security</span>
                  <span className="spec-val">1 Gbps Symmetric Fiber · Cloudflare Zero-Trust · Tailscale Mesh</span>
                </div>
                <div className="spec-box">
                  <span className="spec-lbl">Backup & Disaster Recovery</span>
                  <span className="spec-val">Automated Daily Snapshots & Offsite Encrypted Mirrors</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
