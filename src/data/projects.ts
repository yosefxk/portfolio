export interface Project {
  id: string
  name: string
  tagline: string
  category: 'data' | 'ai' | 'fullstack' | 'mobile' | 'infra'
  categories?: ('data' | 'ai' | 'fullstack' | 'mobile' | 'infra')[]
  categoryLabel: string
  description: string
  longDescription: string
  problem: string
  solution: string
  architecture: string
  stack: string[]
  color: string
  gradient: string
  liveUrl?: string
  githubUrl?: string
  icon: string
  thumbnail: string
  featured: boolean
  status: 'live' | 'public' | 'private' | 'wip'
  year: number
  metrics: { label: string; value: string }[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'mobileye-telemetry',
    name: 'Mobileye ADAS & AV Telemetry Platform',
    tagline: 'Autonomous Vehicle Sensor Ingestion, AI PM Copilot & 30+ Program Delivery',
    category: 'infra',
    categories: ['infra', 'ai'],
    categoryLabel: 'Enterprise TPM, Telemetry & AI',
    description: 'Direct technical program delivery for petabyte-scale autonomous vehicle sensor telemetry across 30+ ADAS/AV projects, deploying an embedded Generative AI PM Copilot, and engineering agentic triage automation.',
    longDescription: 'As Data Infrastructure Technical Program Manager at Mobileye, directing end-to-end program execution across Algorithm, Software, Hardware, and System Integration teams. Architect an intelligent conversational AI chatbot integrated into the PM Bringup Dashboard, enabling PMs to query blocker status, session diagnostics, and program ETAs in natural language while offering self-service guidance on complex telemetry tools and data schemas. Pioneer 50+ agent-native automation runbooks that accelerated customer program onboarding from months down to 14 days, and cut telemetry query triage latency by 98% (<2s) across 12,000+ recording datasets.',
    problem: 'Autonomous vehicle validation demands petabyte-scale multi-sensor data delivery (high-res camera feeds, radar, LiDAR, CAN bus telemetry) across dozens of automotive OEMs. Without standardized intake and automated triage, programs suffered from multi-month delays, high cloud query latency, and frequent support bottlenecks for non-technical PMs.',
    solution: 'Engineered a standardized 10-gate operational intake framework, built an embedded Generative AI PM Copilot for conversational status and telemetry queries, authored 50+ agent-native triage automation runbooks, and optimized cloud query paths to ensure continuous data integrity for machine learning and algorithm validation.',
    architecture: 'Vehicle Multi-Sensor Loggers (Camera/Radar/LiDAR/CAN) ➔ 10-Gate Intake & Verification Engine ➔ Cloud Ingestion Gateway ➔ Distributed Batch Processing (Kubernetes / Argo) ➔ Parquet Telemetry Lake (AWS S3 / Glacier) ➔ Embedded GenAI PM Copilot & Fast Triage (<2s Latency).',
    stack: ['Technical Program Management (TPM)', 'Generative AI & LLMs', 'Conversational AI Copilot', 'Agentic Automation', 'Autonomous Telemetry', 'AWS S3 / Glacier', 'Kubernetes / Argo', 'Python Automation'],
    color: '#00c2ff',
    gradient: 'linear-gradient(135deg, #00c2ff 0%, #0284c7 100%)',
    icon: '🚗',
    thumbnail: '/screenshots/thumb-mobileye.svg',
    featured: true,
    status: 'private',
    year: 2026,
    metrics: [
      { label: 'ADAS & AV Projects', value: '30+ Programs' },
      { label: 'AI PM Copilot', value: 'Self-Service Triage' },
      { label: '10-Gate Protocol', value: '14-Day Onboarding' },
      { label: 'Triage Latency Cut', value: '98% (90s ➔ <2s)' }
    ],
    highlights: [
      'Direct technical delivery across 30+ ADAS & AV projects from inception to collection readiness',
      'Engineer conversational AI chatbot in PM bringup dashboard to query blockers, session telemetry, and program ETAs',
      'Offload repetitive PM tool onboarding and explanations via automated, context-aware AI advisory workflows',
      'Architect 10-gate operational readiness protocol, reducing customer onboarding from months to 14 days',
      'Author 50+ agent-native automation and triage runbooks across 12,000+ production sensor datasets'
    ]
  },
  {
    id: 'career-quest',
    name: 'CareerQuest',
    tagline: 'High-Throughput Job Aggregator & Application Pipeline Engine',
    category: 'ai',
    categoryLabel: 'Distributed Scraping & AI',
    description: 'Containerized career discovery and application platform featuring asynchronous multi-portal scrapers (Greenhouse, Lever, Ashby), multi-provider LLM role evaluation, and real-time SSE telemetry.',
    longDescription: 'A private, self-hosted career operations engine built to automate high-volume technical job discovery and pipeline tracking. Features concurrent asynchronous scrapers extracting structured postings across Greenhouse, Lever, and Ashby portals, an intelligent multi-provider LLM evaluation gateway (Gemini, Claude, Ollama) that benchmarks role alignment, real-time Server-Sent Events (SSE) telemetry, and an isolated SQLite application ledger.',
    problem: 'Navigating hundreds of fragmented tech job openings across disparate ATS portals requires tedious manual searching, disjointed tracking, and reliance on commercial SaaS tools that capture and monetize personal career data.',
    solution: 'Engineered an automated private extraction pipeline combining asynchronous Python web scrapers, dynamic multi-LLM evaluation with automatic provider fallback, live SSE progress streaming, and a zero-telemetry local database.',
    architecture: 'FastAPI Async Gateway ➔ Parallel ATS Ingestion Workers (Greenhouse, Lever, Ashby) ➔ Multi-Provider LLM Evaluation Engine (Gemini / Claude / Ollama) ➔ Real-Time SSE Streamer ➔ Encrypted Local SQLite Vault.',
    stack: ['FastAPI', 'Python', 'TailwindCSS', 'AsyncIO', 'SSE', 'SQLite', 'Docker', 'Multi-Provider LLM Gateway'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    githubUrl: 'https://github.com/yosefxk/career-quest',
    icon: '⚡',
    thumbnail: '/screenshots/thumb-career-quest.png',
    featured: true,
    status: 'public',
    year: 2026,
    metrics: [
      { label: 'Scraping Throughput', value: '26+ Portals' },
      { label: 'Stream Telemetry', value: '<50ms SSE' },
      { label: 'Evaluation Gateway', value: 'Multi-LLM Fallback' },
      { label: 'Data Sovereignty', value: '100% Local Vault' }
    ],
    highlights: [
      'Concurrent asynchronous scrapers for Greenhouse, Lever, and Ashby',
      'Multi-provider LLM evaluation gateway with resilient auto-fallback',
      'Real-time Server-Sent Events (SSE) progress and status broadcasting',
      'Local containerized architecture ensuring zero third-party telemetry'
    ]
  },
  {
    id: 'nadlan-deals',
    name: 'Nadlan Deals Explorer',
    tagline: '3.8M+ Israeli Real Estate Transaction Warehouse & Geospatial Heatmap',
    category: 'data',
    categories: ['data', 'fullstack'],
    categoryLabel: 'Big Data & Geospatial',
    description: 'High-performance real estate exploration engine and interactive cadastral heatmap indexing 3.84M+ Israeli Tax Authority transactions across 1,300+ settlements with sub-100ms multi-dimensional filtering.',
    longDescription: 'A self-hosted, open-source real estate intelligence platform indexing the complete national database of 3.84 million real estate transactions reported to the Israel Tax Authority from 1998 to 2026. Features an asynchronous keyset-paginated ingestion engine with rate-limit backoff, multi-dimensional drill-down search (rooms, area, floor, year built, normalized price-per-sqm), an interactive national Leaflet heatmap covering 1,020+ settlements with dynamic price/volume color scales, multi-city longitudinal comparison charts, and on-demand cadastral parcel geolocation.',
    problem: 'Official tax authority data is fragmented, locked behind restrictive search quotas (150 results per query), and lacks macro-trend visualization, multi-city trend overlays, or responsive mobile navigation.',
    solution: 'Built a high-performance Python/FastAPI backend backed by a WAL-mode SQLite analytical store with custom C/Python median aggregates, combined with a responsive RTL React 18 frontend featuring Recharts and Leaflet geospatial clustering.',
    architecture: 'Open Data Keyset Ingestion Pipeline ➔ SQLite Analytical Store (3.84M Deals, WAL, Custom Median Aggregates) ➔ FastAPI Async REST API ➔ React 18 + Vite + Leaflet Heatmap + Recharts.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'Leaflet', 'Recharts', 'TailwindCSS', 'Docker'],
    color: '#4f46e5',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
    liveUrl: 'https://nadlan.baileytv.tech',
    githubUrl: 'https://github.com/yosefxk/nadlan-deals-dashboard',
    icon: '🏢',
    thumbnail: '/screenshots/thumb-nadlan.png',
    featured: true,
    status: 'live',
    year: 2026,
    metrics: [
      { label: 'Transactions Indexed', value: '3.84M+ Deals' },
      { label: 'Settlements Mapped', value: '1,020+ Cities' },
      { label: 'Query Latency', value: '<100ms Search' },
      { label: 'Temporal Coverage', value: '1998–2026 (28y)' }
    ],
    highlights: [
      'Complete national ingestion of 3.84M+ real estate records from open tax authority archives',
      'Dynamic national heatmap with color-coded price and transaction density metrics for 1,000+ towns',
      'Multi-dimensional drill-down filtering by city, rooms, area, year built, and normalized price-per-sqm',
      'Multi-settlement historical trend comparison with longitudinal Recharts visualization',
      'Cadastral block/parcel (גוש/חלקה) resolution and nearby deal spatial proximity analysis'
    ]
  },
  {
    id: 'tzeva-adom',
    name: 'Tzeva Adom',
    tagline: 'Real-Time Civil Defense Alert Streaming & Geospatial Analytics',
    category: 'data',
    categories: ['data', 'fullstack'],
    categoryLabel: 'Data & Real-Time',
    description: 'Full-stack civil defense alert streaming system featuring real-time Server-Sent Events, interactive geospatial heatmaps, and a 174k+ historical alert analytics warehouse.',
    longDescription: 'A mission-critical monitoring dashboard for Israeli civil defense alerts (Pikud HaOref). Engineered with live SSE streaming, interactive geospatial heatmaps, 174k+ historical records imported from open-source archives, and detailed city-level analytics with rollup support for multi-area municipalities. Fully trilingual: Hebrew, English, and Arabic.',
    problem: 'Civil defense alerts require zero-latency streaming during active events, alongside robust geospatial analytics across hundreds of thousands of historical incidents during severe traffic spikes.',
    solution: 'Designed an asynchronous Express ingestion pipeline backed by SQLite with indexed geospatial lookups, SSE real-time broadcasting, and client-side Recharts / Leaflet heatmaps.',
    architecture: 'Pikud HaOref API ➔ SSE Ingestion Worker ➔ SQLite Telemetry Lake (174k+ Records) ➔ Express Streaming API ➔ React Frontend (Heatmaps & Recharts).',
    stack: ['React', 'TypeScript', 'Express', 'SQLite', 'Recharts', 'Docker', 'SSE'],
    color: '#ff334b',
    gradient: 'linear-gradient(135deg, #ff334b 0%, #c41230 100%)',
    liveUrl: 'https://oref.BaileyTV.tech',
    githubUrl: 'https://github.com/yosefxk/tzeva-adom-dashboard',
    icon: '🚨',
    thumbnail: '/screenshots/thumb-tzeva-adom.png?v=2',
    featured: true,
    status: 'live',
    year: 2025,
    metrics: [
      { label: 'Historical Records', value: '174k+' },
      { label: 'Stream Latency', value: '<100ms SSE' },
      { label: 'Languages', value: 'Trilingual (HE/EN/AR)' },
      { label: 'System Uptime', value: '99.9% Reliable' }
    ],
    highlights: [
      'Live SSE streaming pipeline with sub-100ms update broadcasts',
      '174k+ historical records indexed for fast longitudinal analytics',
      'Trilingual interface with native RTL/LTR mirroring (HE/EN/AR)',
      'Interactive geospatial alert density and frequency heatmaps'
    ]
  },
  {
    id: 'lpp',
    name: 'Plate Finder',
    tagline: 'Sub-300ms Israeli Vehicle Intelligence Engine',
    category: 'data',
    categoryLabel: 'Data Ingestion & APIs',
    description: 'High-performance vehicle data engine that concurrently queries 17+ Ministry of Transport datasets in parallel to deliver instant vehicle histories, active recalls, and safety red flags.',
    longDescription: 'A high-concurrency vehicle intelligence platform built with Next.js and FastAPI. Concurrently queries 17+ Ministry of Transport government datasets using Python ThreadPoolExecutor, normalizing disparate schemas into a single structured response under 300ms. Features active recall tracking, structural modification inspection, handicapped permit verification, and an automated heuristic risk engine for compromised vehicles.',
    problem: 'Government transport datasets in Israel are fragmented across 17+ independent endpoints with varying response schemas, making complete vehicle background checks slow and tedious.',
    solution: 'Engineered a concurrent Python/FastAPI aggregation proxy utilizing multi-threaded worker pools to query all endpoints simultaneously, normalizing payloads into a single structured JSON response under 300ms.',
    architecture: 'Next.js Frontend ➔ FastAPI Gateway ➔ ThreadPoolExecutor (17+ Endpoints) ➔ Gov Open Data APIs (data.gov.il) ➔ Heuristic Risk Analyzer.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker', 'Gov Open Data'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    liveUrl: 'https://lp.BaileyTV.tech/',
    githubUrl: 'https://github.com/yosefxk/lpp_njs',
    icon: '🚗',
    thumbnail: '/screenshots/thumb-lpp.png?v=2',
    featured: false,
    status: 'live',
    year: 2024,
    metrics: [
      { label: 'Parallel Endpoints', value: '17+ Datasets' },
      { label: 'Query Latency', value: '<300ms' },
      { label: 'Risk Analysis', value: 'Automated Red Flags' },
      { label: 'Source Integrity', value: 'Ministry of Transport' }
    ],
    highlights: [
      'Concurrent multi-threaded ingestion across 17+ government endpoints',
      'Automated heuristic risk and safety red-flag evaluation engine',
      'Ownership timeline, recall status, and technical spec reconciliation',
      'Sub-300ms response time with clean responsive interface'
    ]
  },
  {
    id: 'flights-dashboard',
    name: 'TLV Flights',
    tagline: 'Real-Time Ben Gurion Airport Operations Dashboard',
    category: 'fullstack',
    categoryLabel: 'Real-Time Systems',
    description: 'Arrivals and departures operations dashboard for Ben Gurion Airport (TLV), powered by Israeli Airport Authority open data with automated 5-minute polling, dynamic multi-column filtering, and bidirectional Hebrew/English layout.',
    longDescription: 'Real-time flight operations board for Ben Gurion Airport (TLV) built with Next.js and FastAPI. Ingests official Israeli Airport Authority (IAA) open data through an automated 5-minute polling worker with in-memory caching. Features dynamic arrivals/departures switching, multi-column flight filtering, and a seamless Hebrew/English toggle with bidirectional RTL/LTR layout mirroring.',
    problem: 'Public flight portals often suffer from cumbersome mobile navigation, lack multi-column sorting, and fail to provide seamless bidirectional Hebrew/English interfaces.',
    solution: 'Built a lightweight Next.js dashboard backed by a cached FastAPI proxy, ensuring instant client-side sorting, responsive mobile layouts, and complete RTL/LTR layout transitions.',
    architecture: 'Next.js Frontend (Bidirectional RTL/LTR) ➔ FastAPI Gateway ➔ IAA Open Data API ➔ 5-Min Memory Cache.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker'],
    color: '#00c2ff',
    gradient: 'linear-gradient(135deg, #00c2ff 0%, #0070f3 100%)',
    liveUrl: 'https://flights.BaileyTV.tech',
    githubUrl: 'https://github.com/yosefxk/flights_dashboard',
    icon: '✈️',
    thumbnail: '/screenshots/thumb-flights.png?v=2',
    featured: false,
    status: 'live',
    year: 2025,
    metrics: [
      { label: 'Polling Cadence', value: '5-Min Interval' },
      { label: 'Localization', value: 'Full RTL / LTR' },
      { label: 'Data Ingestion', value: 'Airport Authority API' },
      { label: 'Sort & Filter', value: 'Multi-Column Dynamic' }
    ],
    highlights: [
      'Automated 5-minute polling worker with in-memory cache layer',
      'Seamless bidirectional Hebrew (RTL) and English (LTR) mirroring',
      'Multi-column dynamic filtering by carrier, flight number, and destination',
      'Mobile-first responsive interface with zero external ad bloat'
    ]
  },
  {
    id: 'tube-vault',
    name: 'TubeVault',
    tagline: 'Multi-Threaded Media Processing & Transcoding Engine',
    category: 'infra',
    categoryLabel: 'Media & Infrastructure',
    description: 'Self-hosted media extraction and transcoding service built with FastAPI, yt-dlp multi-fragment acceleration, automated FFmpeg encoding, and Portainer/Tailscale deployment.',
    longDescription: 'A containerized private media conversion service built for home servers and private networks. Features an asynchronous FastAPI backend utilizing yt-dlp with 8 concurrent worker streams (-N 8), automatic FFmpeg post-processing for high-bitrate MP3 (320kbps) and HD video, direct browser stream piping, and zero-trust private access via Tailscale and Cloudflare.',
    problem: 'Public online converters are laden with intrusive advertisements, throttle download bandwidth, and pose substantial privacy and security risks.',
    solution: 'Engineered a private containerized engine that harnesses multi-fragment downloading and FFmpeg transcoding, accessible securely via Tailscale mesh.',
    architecture: 'Dark Modern Frontend ➔ FastAPI Backend ➔ yt-dlp (8 Concurrent Streams) ➔ FFmpeg Transcoder ➔ Direct Stream Pipe & SQLite History.',
    stack: ['Python', 'FastAPI', 'yt-dlp', 'FFmpeg', 'Docker', 'Tailscale', 'Portainer'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    githubUrl: 'https://github.com/yosefxk/tube-vault',
    icon: '⚡',
    thumbnail: '/screenshots/thumb-tube-vault.png',
    featured: false,
    status: 'public',
    year: 2026,
    metrics: [
      { label: 'Concurrency', value: '8x Multi-Stream' },
      { label: 'Audio Quality', value: '320kbps MP3' },
      { label: 'Network Host', value: 'Tailscale Mesh / Docker' },
      { label: 'Ad Bloat', value: '0% (Ad-Free)' }
    ],
    highlights: [
      '8-thread concurrent multi-fragment media acceleration',
      'Automated FFmpeg transcoding for high-fidelity audio and video',
      'Direct browser stream piping without intermediate disk bloat',
      'Zero-trust private network deployment with persistent history'
    ]
  },
  {
    id: 'volleyball-scoreboard',
    name: 'Beach Volleyball Scoreboard',
    tagline: 'Sunlight-Optimized Outdoor Scoreboard with Hardware Bluetooth Input',
    category: 'mobile',
    categoryLabel: 'IoT & Mobile',
    description: 'High-contrast outdoor athletic scoreboard that intercepts physical Bluetooth camera clickers at the Android OS layer, featuring synthetic Text-to-Speech audio scoring.',
    longDescription: 'A ruggedized outdoor sports scoring system tailored for beach volleyball players. Available as a Web PWA and Native Android APK that intercepts physical hardware keystrokes (Volume Up/Down, Camera, Enter) from wireless Bluetooth selfie remotes (e.g. AB Shutter 3), enabling players to score points hands-free from across the sand without touching the phone screen. Features native Web Speech audio score announcements, double-tap undo protection, and court side-switch alerts.',
    problem: 'Scoring outdoor volleyball matches under direct sunlight with wet or sandy hands is impractical on touchscreens.',
    solution: 'Engineered an Android OS key-interception layer for Bluetooth input hardware, combined with an ultra-high-contrast interface and real-time Text-to-Speech audio feedback.',
    architecture: 'High-Contrast Web PWA ➔ Android Key Interception Driver (AB Shutter 3) ➔ Web Speech Synthesis ➔ Match State Machine & Side Switch Logic.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API', 'Android APK', 'Bluetooth IoT'],
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
    githubUrl: 'https://github.com/yosefxk/volleyball-scoreboard',
    icon: '🏐',
    thumbnail: '/screenshots/thumb-volleyball-scoreboard.png',
    featured: false,
    status: 'public',
    year: 2026,
    metrics: [
      { label: 'Input Interface', value: 'Bluetooth Hardware' },
      { label: 'Audio Engine', value: 'Text-to-Speech TTS' },
      { label: 'Visual Contrast', value: 'Sunlight-Optimized' },
      { label: 'Undo Protection', value: '<400ms Double-Tap' }
    ],
    highlights: [
      'Physical Bluetooth remote key interception at the Android OS level',
      'Synthesized voice announcements for current score and set status',
      'Sunlight-optimized high-contrast color scheme for outdoor visibility',
      'Automated court side-switch alerts and double-tap undo safeguards'
    ]
  }
]
