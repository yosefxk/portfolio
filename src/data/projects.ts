export interface Project {
  id: string
  name: string
  tagline: string
  category: 'data' | 'ai' | 'fullstack' | 'mobile' | 'infra'
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
    id: 'career-quest',
    name: 'CareerQuest',
    tagline: 'Enterprise-Grade AI Career Intelligence & ATS Resume Studio',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    description: 'Self-hosted AI career intelligence platform with multi-portal parallel job scrapers, ATS compliance scoring, and headless Chromium single-page PDF compiler.',
    longDescription: 'CareerQuest unifies the entire career operations lifecycle into a private, containerized workspace. It combines high-throughput parallel scrapers for Greenhouse and Ashby, a multi-provider LLM gateway (Gemini, Claude, GPT, Groq, Ollama), an interactive experience bullet pool bank, a deterministic 0-100% ATS compliance auditor, and pixel-perfect headless Chromium PDF compilation enforcing strict 1-page length budgets.',
    problem: 'Modern technical job applications require extreme precision: matching job descriptions to verified career impact, adhering to strict single-page ATS formatting constraints, and crafting targeted outreach pitches without leaking candidate data to third-party SaaS.',
    solution: 'Engineered a private self-hosted platform with multi-provider LLM fallback, deterministic keyword density auditing, Playwright headless PDF generation, and multi-portal automated scraping with live SSE telemetry.',
    architecture: 'SPA (Tailwind + Alpine.js) ➔ FastAPI Backend ➔ Multi-Provider LLM Gateway (Gemini/Claude/GPT/Ollama) ➔ Jinja2 Template Engine ➔ Headless Chromium (Playwright) ➔ SQLite Snapshot Vault.',
    stack: ['FastAPI', 'Python', 'TailwindCSS', 'Playwright', 'Alpine.js', 'SQLite', 'Docker', 'Gemini / Claude / OpenAI'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    githubUrl: 'https://github.com/yosefxk/career-quest',
    icon: '⚡',
    thumbnail: '/screenshots/thumb-career-quest.png',
    featured: true,
    status: 'public',
    year: 2026,
    metrics: [
      { label: 'ATS Score Accuracy', value: '100% Deterministic' },
      { label: 'PDF Compilation', value: '<800ms' },
      { label: 'LLM Gateway', value: '5 Providers' },
      { label: 'Page Constraint', value: 'Strict 1-Page' }
    ],
    highlights: ['Multi-Provider LLM Gateway', 'Headless Chromium PDF Compiler', 'Greenhouse & Ashby Scrapers', 'ATS Keyword Auditor']
  },
  {
    id: 'tzeva-adom',
    name: 'Tzeva Adom',
    tagline: 'Real-Time Rocket Alert Streaming & Geospatial Intelligence',
    category: 'data',
    categoryLabel: 'Data & Real-Time',
    description: 'Full-stack civil defense alert streaming system featuring real-time Server-Sent Events, interactive heatmaps, and a 174k+ historical alert analytics warehouse.',
    longDescription: 'A mission-critical monitoring dashboard for Israeli civil defense alerts (Pikud HaOref). Built from scratch with live SSE streaming, interactive geospatial heatmaps, 174k+ historical records imported from open-source archives, and detailed city-level analytics with rollup support for multi-area municipalities. Fully trilingual: Hebrew, English, and Arabic.',
    problem: 'Civil defense alerts require zero-latency streaming during active events, alongside robust geospatial analytics across hundreds of thousands of historical incidents with high concurrent traffic spikes.',
    solution: 'Designed an asynchronous Express ingestion pipeline backed by SQLite with indexed geospatial lookups, SSE real-time broadcasting, and client-side Recharts / Leaflet heatmaps.',
    architecture: 'Pikud HaOref API ➔ SSE Ingestion Worker ➔ SQLite Telemetry Lake (174k+ Records) ➔ Express Streaming API ➔ React Frontend (Heatmaps & Recharts).',
    stack: ['React', 'TypeScript', 'Express', 'SQLite', 'Recharts', 'Docker', 'SSE'],
    color: '#ff334b',
    gradient: 'linear-gradient(135deg, #ff334b 0%, #c41230 100%)',
    liveUrl: 'https://oref.BaileyTV.tech',
    githubUrl: 'https://github.com/yosefxk/tzeva-adom-dashboard',
    icon: '🚨',
    thumbnail: '/screenshots/thumb-tzeva-adom.png',
    featured: true,
    status: 'live',
    year: 2025,
    metrics: [
      { label: 'Historical Records', value: '174k+' },
      { label: 'Stream Latency', value: '<100ms SSE' },
      { label: 'Languages', value: 'Trilingual (HE/EN/AR)' },
      { label: 'Availability', value: '99.9% Uptime' }
    ],
    highlights: ['Live SSE Streaming', '174k+ Historical Records', 'Trilingual (HE/EN/AR)', 'Interactive Heatmaps']
  },
  {
    id: 'lpp',
    name: 'Plate Finder',
    tagline: 'Israeli Vehicle Intelligence in Milliseconds',
    category: 'data',
    categoryLabel: 'Data & Cloud APIs',
    description: 'Queries 17+ Israeli government datasets concurrently in parallel to surface instant vehicle histories, active recalls, structural modifications, and safety red flags.',
    longDescription: 'A high-performance Israeli vehicle lookup platform built with Next.js and FastAPI. Concurrently queries 17+ Ministry of Transport datasets using Python ThreadPoolExecutor, returning comprehensive vehicle histories in milliseconds. Features active recall tracking, structural mod inspections, handicapped permit status, and an automated heuristic "Red Flag" engine for compromised vehicles.',
    problem: 'Government transport datasets in Israel are fragmented across 17+ disparate endpoints with varying response structures, making complete vehicle background checks slow and tedious.',
    solution: 'Built a concurrent Python/FastAPI aggregation proxy using multi-threaded worker pools to query all endpoints simultaneously, normalizing payloads into a single structured response under 300ms.',
    architecture: 'Next.js Frontend ➔ FastAPI Gateway ➔ Python ThreadPoolExecutor (17+ Endpoints) ➔ Gov Data Endpoints (Data.gov.il) ➔ Heuristic Red-Flag Risk Analyzer.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker', 'Gov Open Data'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    liveUrl: 'https://lp.BaileyTV.tech/',
    githubUrl: 'https://github.com/yosefxk/lpp_njs',
    icon: '🚗',
    thumbnail: '/screenshots/thumb-lpp.png',
    featured: false,
    status: 'live',
    year: 2024,
    metrics: [
      { label: 'Parallel Datasets', value: '17+ Endpoints' },
      { label: 'Query Latency', value: '<300ms' },
      { label: 'Risk Engine', value: 'Automated Red Flags' },
      { label: 'Data Sources', value: 'Ministry of Transport' }
    ],
    highlights: ['17+ Parallel API Calls', 'Automated Red Flag Engine', 'Ownership Timeline', 'Shareable Permalinks']
  },
  {
    id: 'flights-dashboard',
    name: 'TLV Flights',
    tagline: 'Real-Time Ben Gurion Airport Flight Intelligence',
    category: 'fullstack',
    categoryLabel: 'Real-Time Systems',
    description: 'Bilingual arrivals and departures intelligence board for Ben Gurion Airport (TLV) powered by the Israeli Airport Authority API with smart column sorting and auto-refresh.',
    longDescription: 'Real-time flight board for Ben Gurion Airport (TLV) powered by the Israeli Airport Authority open API, refreshed automatically every 5 minutes. Features separate arrivals/departures tabs, airline and destination filtering, sort by any column, and a seamless Hebrew/English toggle with full RTL/LTR bidirectional support.',
    problem: 'Official flight portals often lack responsive mobile interfaces, advanced filtering, or clean bidirectional Hebrew/English layout transitions.',
    solution: 'Engineered a clean Next.js/FastAPI dashboard with cached API polling, dynamic search and multi-column sorting, and comprehensive RTL/LTR layout mirroring.',
    architecture: 'Next.js Frontend (RTL/LTR Support) ➔ FastAPI Gateway ➔ IAA Open Data API ➔ 5-Min Cache Layer.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker'],
    color: '#00c2ff',
    gradient: 'linear-gradient(135deg, #00c2ff 0%, #0070f3 100%)',
    liveUrl: 'https://flights.BaileyTV.tech',
    githubUrl: 'https://github.com/yosefxk/flights_dashboard',
    icon: '✈️',
    thumbnail: '/screenshots/thumb-flights.png',
    featured: false,
    status: 'live',
    year: 2025,
    metrics: [
      { label: 'Refresh Rate', value: '5-Min Live Polling' },
      { label: 'Bilingual', value: 'Full RTL / LTR' },
      { label: 'Filtering', value: 'Multi-Column Sort' },
      { label: 'Source', value: 'Airport Authority API' }
    ],
    highlights: ['5-Min Auto Refresh', 'Bilingual RTL/LTR', 'Multi-Column Filtering', 'Mobile Optimized']
  },
  {
    id: 'tube-vault',
    name: 'TubeVault',
    tagline: 'High-Speed Multi-Threaded Media Engine & Converter',
    category: 'infra',
    categoryLabel: 'Media & DevOps',
    description: 'Modern, self-hosted media conversion & downloading engine built with FastAPI, yt-dlp multi-fragment acceleration, and Portainer/Tailscale deployment.',
    longDescription: 'A lightweight, modern, self-hosted web application for fast media downloading built for personal servers, Portainer, and Tailscale. Features dark glassmorphic UI, 1-tap quick action triggers for MP3 (320kbps) and 1080p video, 8-thread multi-fragment downloading (-N 8), zero-click browser downloads, and a persistent history database.',
    problem: 'Ad-heavy online converter websites are slow, bloated with malware risks, and lack multi-threaded fragment acceleration or private network integration.',
    solution: 'Engineered a private containerized downloader utilizing yt-dlp with 8 concurrent worker streams, FFmpeg conversion, and direct stream piping into browser downloads.',
    architecture: 'Glassmorphic Frontend ➔ FastAPI Backend ➔ yt-dlp (-N 8 multi-threaded) ➔ FFmpeg Converter ➔ Direct Browser Stream & SQLite History.',
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
      { label: 'Download Speed', value: '8x Multi-Threaded' },
      { label: 'Audio Quality', value: '320kbps MP3' },
      { label: 'Deployment', value: 'Portainer / Tailscale' },
      { label: 'Ad Bloat', value: '0% (Ad-Free)' }
    ],
    highlights: ['8x Multi-Threaded yt-dlp', '1-Tap Quick Action Buttons', 'Tailscale Private Host', 'Zero-Click Direct Download']
  },
  {
    id: 'pipes-game',
    name: 'PipeMaster',
    tagline: 'Spanning Tree Procedural Puzzle Game & Android App',
    category: 'mobile',
    categoryLabel: 'Algorithms & Mobile',
    description: 'Sleek mobile & browser pipe puzzle game featuring randomized Prim’s spanning tree algorithms, toroidal flow topology, and procedural Web Audio synthesizer.',
    longDescription: 'A mobile-first pipe puzzle game available as an offline PWA and Android app. Uses randomized Prim’s spanning tree generation with toroidal wrap-around adjacency to guarantee 100% solvable boards across 4 difficulty tiers. Features a procedural Web Audio synthesizer (zero asset dependencies), native Android haptic vibration feedback, smart hint solver, and 4 aesthetic themes.',
    problem: 'Many procedural puzzle games generate unsolvable configurations, rely on heavy asset packs, or lack native mobile haptic feedback.',
    solution: 'Implemented randomized Prim’s algorithm on graph nodes with modular toroidal arithmetic, vector SVG rendering, and Web Audio procedural synthesis.',
    architecture: 'HTML5/Canvas/SVG ➔ Prim’s Algorithm Spanning Tree Generator ➔ Web Audio API Synthesizer ➔ Android WebView Bridge with Native Haptics.',
    stack: ['JavaScript', 'Canvas / SVG', 'Web Audio API', 'PWA / Service Worker', 'Android Bridge'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    githubUrl: 'https://github.com/yosefxk/pipes-game',
    icon: '🧩',
    thumbnail: '/screenshots/thumb-pipes-game.png',
    featured: false,
    status: 'public',
    year: 2026,
    metrics: [
      { label: 'Solvability', value: '100% Guaranteed' },
      { label: 'Asset Footprint', value: '0 KB (Procedural)' },
      { label: 'Offline Support', value: '100% PWA Cache' },
      { label: 'Themes', value: '4 Dynamic Palettes' }
    ],
    highlights: ['Randomized Prim’s Algorithm', 'Toroidal Wrap-Around Mode', 'Procedural Web Audio', 'Native Android Haptics']
  },
  {
    id: 'volleyball-scoreboard',
    name: 'Beach Volleyball Scoreboard',
    tagline: 'Outdoor Sunlight-Optimized Scoreboard with Bluetooth IoT',
    category: 'mobile',
    categoryLabel: 'IoT & Mobile',
    description: 'High-contrast sunlight-optimized scoreboard intercepting Bluetooth remote camera triggers at the Android OS level with Web Speech audio announcements.',
    longDescription: 'An outdoor sports scoring system built for beach volleyball players. Available as a Web PWA and Native Android APK that intercepts physical hardware keys (Volume Up, Volume Down, Camera, Enter) from Bluetooth selfie clickers (e.g., AB Shutter 3) to score remotely without looking at the screen. Features native Text-to-Speech audio score calling, double-tap undo logic, court switch alerts, and Screen Wake Lock.',
    problem: 'Scoring beach volleyball matches under direct sunlight is difficult with phone touchscreens, and outdoor players cannot constantly touch sweaty devices.',
    solution: 'Created an Android native input-interception layer for cheap Bluetooth remotes, paired with high-contrast UI and automatic Text-to-Speech score announcements.',
    architecture: 'High-Contrast Web PWA ➔ Android Key Interception Layer (AB Shutter 3) ➔ Web Speech API Audio Engine ➔ Match Logic & Court Switch Alerts.',
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
      { label: 'Remote Control', value: 'Bluetooth Shutter HW' },
      { label: 'Audio Feedback', value: 'Text-to-Speech TTS' },
      { label: 'Sunlight Contrast', value: 'High-Contrast Mode' },
      { label: 'Undo Timing', value: '<400ms Double-Tap' }
    ],
    highlights: ['Bluetooth Clicker Interception', 'Audio Score TTS Announcer', 'Sunlight-Optimized Contrast', 'Court Side-Switch Alerts']
  },
  {
    id: 'dog-walk-planner',
    name: 'Dog Walk Planner',
    tagline: 'Private Family Scheduling App with Google OAuth',
    category: 'fullstack',
    categoryLabel: 'Productivity Apps',
    description: 'Streamlit scheduling utility authenticated via Google OAuth with persistent storage and interactive color-coded calendar for family coordination.',
    longDescription: 'A private family utility application built with Streamlit for managing daily dog walk schedules. Features Google OAuth whitelist-based access control, persistent JSON storage, and a color-coded weekly calendar. Deployed in Docker on the BaileyTV home server for instant family access.',
    problem: 'Coordinating multi-person daily responsibilities requires an authenticated, frictionless schedule accessible from both mobile and desktop.',
    solution: 'Built a lightweight Streamlit web application with Google OAuth authentication and automated Docker deployment behind Cloudflare Tunnels.',
    architecture: 'Streamlit UI ➔ Google OAuth 2.0 Auth Gate ➔ Persistent File Store ➔ Docker Container.',
    stack: ['Python', 'Streamlit', 'Docker', 'Google OAuth 2.0'],
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    liveUrl: 'https://walk.BaileyTV.tech/',
    githubUrl: 'https://github.com/yosefxk/dog-walk-planner',
    icon: '🐕',
    thumbnail: '/screenshots/thumb-dog-walk-planner.png',
    featured: false,
    status: 'live',
    year: 2024,
    metrics: [
      { label: 'Authentication', value: 'Google OAuth' },
      { label: 'Storage', value: 'Persistent JSON' },
      { label: 'Hosting', value: 'Self-Hosted Docker' },
      { label: 'Interface', value: 'Streamlit Web' }
    ],
    highlights: ['Google OAuth Gate', 'Persistent Schedule Storage', 'Color-Coded Weekly View', 'Dockerized Deployment']
  }
]
