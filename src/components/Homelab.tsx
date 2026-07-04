import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import './Homelab.css';
import ArchitectureDiagram from './ArchitectureDiagram';

const Homelab: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="app">
      <main className="container min-h-screen flex flex-col justify-center pt-20 pb-20 relative overflow-hidden">
        
        <div className="flex-1 flex flex-col justify-center w-full transition-all duration-500">
          
          {/* SLIDE 0: Title Slide */}
          {currentSlide === 0 && (
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                Wenrix Product Solution Engineer Showcase
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                BaileyTV - The Modern Homelab
              </h1>
              <h2 className="text-2xl text-slate-300 mb-6 font-semibold">Joseph (יוסף) Lampert</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Discover the true power of self-hosting. Build your own personal cloud with an automated, zero-trust infrastructure that delivers enterprise-grade capabilities, absolute data privacy, and limitless learning opportunities—from the comfort of your home.
              </p>
            </div>
          )}

          {/* SLIDE 1: Why Homelab? */}
          {currentSlide === 1 && (
            <div className="max-w-4xl mx-auto w-full p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Homelab vs. Cloud Subscriptions?</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold text-xl">$</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Drastic Cost Reduction</h4>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Hosting terabytes of storage and running multiple containerized services 24/7 on AWS or GCP would cost thousands of dollars annually. A self-hosted solution achieves the same results for just the upfront hardware cost and pennies in electricity.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-purple-400 font-bold text-xl">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Total Ownership & Privacy</h4>
                    <p className="text-slate-400 text-base leading-relaxed">
                      True data sovereignty. No Big Tech companies scanning your personal photos, selling your data, or unexpectedly changing their pricing tiers. You own the hardware, the network, and the data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-400 font-bold text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Flexibility & Creative Freedom</h4>
                    <p className="text-slate-400 text-base leading-relaxed">
                      A sandbox for enterprise-grade engineering. It offers the complete freedom to experiment, break things, build custom CI/CD pipelines, and try new technologies without worrying about runaway cloud billing surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Infrastructure Setup */}
          {currentSlide === 2 && (
            <div className="w-full animate-fade-in flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Homelab Setup & Infrastructure</h2>
              <p className="text-slate-400 text-sm text-center mb-6 max-w-2xl mx-auto">The complete data flow — from secure remote access to containerized application delivery.</p>
              
              <div className="w-full max-w-5xl">
                <ArchitectureDiagram />
              </div>
            </div>
          )}

          {/* SLIDE 3: Open Source Ecosystem */}
          {currentSlide === 3 && (
            <div className="max-w-4xl mx-auto w-full animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Open Source Ecosystem</h2>
              <p className="text-slate-400 text-sm text-center mb-6 max-w-2xl mx-auto">A thriving ecosystem of self-hosted services powering media, productivity, and security.</p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/jellyfin/c084fc" alt="Jellyfin" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Jellyfin & *arr Stack</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Automated media platform with high-res streaming, integrated with Radarr & Sonarr for content management.</p>
                  </div>
                </div>

                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/immich/60a5fa" alt="Immich" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Immich</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Self-hosted Google Photos replacement with on-device ML for facial recognition and object detection.</p>
                  </div>
                </div>

                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/nextcloud/34d399" alt="Nextcloud" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Nextcloud</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Private cloud storage for syncing files, calendars, and contacts across all devices.</p>
                  </div>
                </div>

                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-500/20 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/bitwarden/cbd5e1" alt="Vaultwarden" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Vaultwarden</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Self-hosted Bitwarden backend for ultimate password security, keeping credentials local.</p>
                  </div>
                </div>

                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/pihole/f87171" alt="Pi-hole" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Pi-hole</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Network-wide ad blocking and DNS sinkholing, providing tracking protection for all devices.</p>
                  </div>
                </div>

                <div className="card p-3 border border-white/5 bg-white/5 rounded-2xl hover:border-white/10 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <img src="https://cdn.simpleicons.org/grafana/f97316" alt="Grafana" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Grafana</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">Real-time monitoring dashboards tracking server resources, container health, and service uptime.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: Custom Apps */}
          {currentSlide === 4 && (
            <div className="max-w-5xl mx-auto w-full animate-fade-in text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Custom Built Applications</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-2xl mx-auto">The homelab serves as the production environment for my bespoke web applications, leveraging automated CI/CD for rapid iteration.</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <a href="https://walk.baileytv.tech/" target="_blank" rel="noopener noreferrer" className="card p-4 border border-white/5 bg-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-white/10 transition-all group block">
                  <div className="inline-block px-2 py-0.5 mb-2 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-wider">
                    Family App
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Dog Walk Planner ↗</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    A Streamlit scheduling app for managing dog walks — authenticated via Google OAuth, with persistent storage and a color-coded interactive calendar.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Python</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Streamlit</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Docker</span>
                  </div>
                </a>

                <a href="https://oref.baileytv.tech/" target="_blank" rel="noopener noreferrer" className="card p-4 border border-white/5 bg-white/5 rounded-2xl hover:border-red-500/50 hover:bg-white/10 transition-all group block">
                  <div className="inline-block px-2 py-0.5 mb-2 rounded-full bg-red-500/10 text-red-400 text-[9px] font-bold uppercase tracking-wider">
                    Public Service
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Tzeva Adom Dashboard ↗</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    Full-stack monitoring dashboard for Israeli civil defense alerts with live streaming, interactive heatmaps, and 174k+ historical records.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">React</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">TypeScript</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Express</span>
                  </div>
                </a>

                <a href="https://lp.baileytv.tech/" target="_blank" rel="noopener noreferrer" className="card p-4 border border-white/5 bg-white/5 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all group block">
                  <div className="inline-block px-2 py-0.5 mb-2 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                    Vehicle Intelligence
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Israeli License Plate Search ↗</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    Queries 17+ Israeli government endpoints in parallel to surface full vehicle profiles: ownership history, recalls, structural mods, and red flags.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Next.js</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">FastAPI</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Python</span>
                  </div>
                </a>

                <a href="https://flights.baileytv.tech/" target="_blank" rel="noopener noreferrer" className="card p-4 border border-white/5 bg-white/5 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group block">
                  <div className="inline-block px-2 py-0.5 mb-2 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-wider">
                    Live Analytics
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">TLV Flights ↗</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    Bilingual arrivals & departures board for TLV airport powered by the Israeli Airport Authority API, with smart filtering and auto-refresh.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">Next.js</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">FastAPI</span>
                    <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-300">TypeScript</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* SLIDE 5: Questions */}
          {currentSlide === 5 && (
            <div className="text-center w-full max-w-4xl mx-auto animate-fade-in flex flex-col justify-center items-center h-64">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Questions?
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 w-full whitespace-nowrap">
                Let's discuss architecture, security, or anything else you'd like to dive into
              </p>
            </div>
          )}

        </div>

        {/* Side Navigation Buttons */}
        <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-5 py-3 flex items-center justify-center gap-2 rounded-full font-bold transition-all shadow-2xl border border-white/10 ${
              currentSlide === 0 
                ? 'bg-black/40 text-slate-600 cursor-not-allowed backdrop-blur-md opacity-0 pointer-events-none' 
                : 'bg-black/60 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-md'
            }`}
            aria-label="Previous Slide"
          >
            <span>←</span> Previous
          </button>
        </div>

        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50">
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`px-5 py-3 flex items-center justify-center gap-2 rounded-full font-bold transition-all shadow-2xl border ${
              currentSlide === totalSlides - 1
                ? 'bg-black/40 text-slate-600 border-white/10 cursor-not-allowed backdrop-blur-md opacity-0 pointer-events-none'
                : 'bg-blue-500/80 text-white border-blue-400/50 hover:bg-blue-500 hover:scale-105 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]'
            }`}
            aria-label="Next Slide"
          >
            Next <span>→</span>
          </button>
        </div>

        {/* Slide Indicators Bottom */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
          <div className="flex justify-center items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full pointer-events-auto border border-white/10 shadow-2xl">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === i ? 'bg-blue-400 scale-125' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="text-slate-500 text-xs ml-2 font-medium">{currentSlide + 1} / {totalSlides}</span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Homelab;
