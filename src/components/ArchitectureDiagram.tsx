import React from 'react';
import '../index.css';
import './Homelab.css';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full p-6 bg-white/5 border border-white/10 rounded-2xl">
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-left flex-1 backdrop-blur-sm">
        <h4 className="font-bold text-emerald-400 text-lg mb-2">Tailscale VPN</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Zero-trust mesh VPN. Management ports are hidden from the internet, accessible only by authenticated nodes.
        </p>
      </div>
      
      <div className="flex items-center justify-center text-slate-500">
        <span className="hidden md:block">→</span>
        <span className="md:hidden">↓</span>
      </div>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-left flex-1 backdrop-blur-sm">
        <h4 className="font-bold text-blue-400 text-lg mb-2">Ubuntu Server</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          A rock-solid, minimal OS foundation ensuring maximum uptime and security for the Docker host.
        </p>
      </div>

      <div className="flex items-center justify-center text-slate-500">
        <span className="hidden md:block">→</span>
        <span className="md:hidden">↓</span>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-left flex-1 backdrop-blur-sm">
        <h4 className="font-bold text-purple-400 text-lg mb-2">Nginx Proxy Manager</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Handles secure reverse proxying, SSL termination, and routes traffic without exposing application ports.
        </p>
      </div>

      <div className="flex items-center justify-center text-slate-500">
        <span className="hidden md:block">→</span>
        <span className="md:hidden">↓</span>
      </div>

      <div className="bg-white/5 border border-white/20 rounded-xl p-4 text-left flex-1 backdrop-blur-sm">
        <h4 className="font-bold text-white text-lg mb-2">Portainer Containers</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Provides robust Docker orchestration, centralized logging, and webhook integrations for CI/CD pipelines.
        </p>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
