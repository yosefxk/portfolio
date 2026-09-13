export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  badge?: string
  color: string
  summary: string
  highlights: string[]
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'mobileye',
    company: 'Mobileye',
    role: 'Data Infrastructure Technical Program Manager (TPM)',
    period: '2025 – Present',
    location: 'Jerusalem, Israel',
    badge: 'Current',
    color: '#00c2ff',
    summary: 'Directing cross-functional technical program delivery for petabyte-scale autonomous vehicle sensor telemetry across 30+ ADAS & AV projects from inception to data-collection readiness.',
    highlights: [
      'Directed technical program delivery across 30+ ADAS & AV projects, taking them from initial inception through operational delivery and readiness for global data collection.',
      'Accelerated program onboarding from several months to 14 days by architecting a 10-gate operational readiness protocol and automated intake workflows.',
      'Diagnosed and resolved distributed cloud bottlenecks, cutting telemetry query and triage latency by 98% (from 90+ seconds down to under 2 seconds across 12,000+ recording datasets) for global engineering orgs.',
      'Authored 50+ internal automation modules and 40+ Python tools, eliminating manual triage overhead across 12,000+ production datasets.',
      'Orchestrated large-scale vehicle sensor telemetry rerun campaigns across distributed batch workers for up to 5,000 recording sessions per campaign.',
      'Established automated metadata cataloging and data integrity validations for petabyte-scale video and CAN bus recording lakes.'
    ],
    tags: ['TPM Delivery', '30+ ADAS & AV Projects', 'Distributed Telemetry', 'AWS S3 / Glacier', 'Kubernetes / Argo', '98% Latency Cut']
  },
  {
    id: 'amdocs',
    company: 'Amdocs',
    role: 'Data Engineer & Data Analyst',
    period: '2022 – 2025',
    location: 'Israel',
    color: '#6366f1',
    summary: 'Architected scalable ETL/ELT pipelines, transformation workflows, and analytical models for enterprise clients and AI initiatives.',
    highlights: [
      'Developed and rapidly deployed 10+ custom Streamlit data applications for internal business users, democratizing complex analytical querying and KPI tracking.',
      'Designed low-latency data infrastructure and transformation pipelines using Python and SQL (Snowflake/dbt) to power enterprise AI initiatives.',
      'Engineered scalable batch ingestion handling millions of structured transactional records with a 99.9% data delivery SLA.',
      'Developed automated data cleansing, validation, and transformation workflows, establishing engineering best practices across analytics pipelines.',
      'Authored advanced analytical SQL models and telemetry dashboards, delivering real-time operational visibility for enterprise client accounts.'
    ],
    tags: ['Streamlit', 'Snowflake', 'dbt', 'Python', 'Advanced SQL', 'ETL/ELT', '99.9% SLA', 'AI Pipelines']
  },
  {
    id: 'intel',
    company: 'Intel Corporation',
    role: 'Data Analyst',
    period: '2021 – 2022',
    location: 'Israel',
    color: '#0ea5e9',
    summary: 'Delivered measurable operational cost reductions through deep data analytics and custom Python/VBA automation.',
    highlights: [
      'Championed cost-optimization initiatives through data analytics and Python/VBA automation, delivering over $1,000,000 in annual operational savings.',
      'Constructed executive KPI reporting pipelines to streamline manufacturing and supply chain resource allocation.'
    ],
    tags: ['Cost Optimization', '$1M+ ROI', 'Python Automation', 'Supply Chain Analytics', 'Executive KPIs']
  },
  {
    id: 'navy',
    company: 'Israeli Navy',
    role: 'Captain (Res.)',
    period: '2014 – 2018',
    location: 'Israel',
    badge: 'Military Leadership',
    color: '#3b82f6',
    summary: 'Led high-stakes naval operations and cross-functional teams under intense, dynamic operational conditions.',
    highlights: [
      'Commanded naval teams in high-tempo operational environments, demonstrating decisive leadership, risk management, and mission-critical execution under intense pressure.'
    ],
    tags: ['Decisive Leadership', 'High-Stakes Decision Making', 'Crisis Management', 'Team Command']
  },
  {
    id: 'shenkar',
    company: 'Shenkar College of Engineering',
    role: 'B.Sc. in Industrial Engineering & Management',
    period: 'Class of 2022',
    location: 'Israel',
    badge: 'Valedictorian (Summa Cum Laude)',
    color: '#ec4899',
    summary: 'Graduated as Class Valedictorian with Summa Cum Laude honors, specializing in data systems, operations research, and software architecture.',
    highlights: [
      'Class Valedictorian — Summa Cum Laude honors.',
      'Specialized in distributed databases, algorithm design, statistical modeling, and data systems architecture.'
    ],
    tags: ['Valedictorian', 'Summa Cum Laude', 'Operations Research', 'Distributed Systems']
  }
]
