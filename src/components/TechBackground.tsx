import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Activity, Layers, Cpu } from 'lucide-react';

export type TechTheme = 'cyber' | 'quantum' | 'solar' | 'deep_tech';

interface TechBackgroundProps {
  currentTheme?: TechTheme;
  onThemeChange?: (theme: TechTheme) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const TechBackground: React.FC<TechBackgroundProps> = ({
  currentTheme: propTheme,
  onThemeChange,
}) => {
  const [internalTheme, setInternalTheme] = useState<TechTheme>('cyber');
  const activeTheme = propTheme || internalTheme;
  const [showControls, setShowControls] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  const handleThemeSelect = (theme: TechTheme) => {
    setInternalTheme(theme);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  // Theme-specific color palettes
  const getThemeColors = (theme: TechTheme) => {
    switch (theme) {
      case 'quantum':
        return {
          bgBase: 'from-[#0a071b] via-[#0d0f2b] to-[#080d24]',
          primary: '#818cf8', // Indigo
          secondary: '#c084fc', // Purple
          accent: '#2dd4bf', // Teal
          nodeColors: ['#818cf8', '#c084fc', '#38bdf8', '#a855f7', '#2dd4bf'],
          packetColor: '#e879f9',
          orb1: 'bg-indigo-600/20',
          orb2: 'bg-purple-600/20',
          orb3: 'bg-cyan-600/15',
          gridBorder: 'rgba(129, 140, 248, 0.08)',
        };
      case 'solar':
        return {
          bgBase: 'from-[#140b05] via-[#1a0f08] to-[#0c0d18]',
          primary: '#F27D26', // Orange
          secondary: '#fbbf24', // Amber
          accent: '#10b981', // Emerald
          nodeColors: ['#F27D26', '#fb923c', '#fbbf24', '#f59e0b', '#34d399'],
          packetColor: '#fed7aa',
          orb1: 'bg-[#F27D26]/20',
          orb2: 'bg-amber-600/20',
          orb3: 'bg-emerald-600/10',
          gridBorder: 'rgba(242, 125, 38, 0.08)',
        };
      case 'deep_tech':
        return {
          bgBase: 'from-[#050b14] via-[#0a1526] to-[#070e1c]',
          primary: '#0284c7', // Sky
          secondary: '#38bdf8', // Light blue
          accent: '#3b82f6', // Royal blue
          nodeColors: ['#38bdf8', '#0ea5e9', '#60a5fa', '#93c5fd', '#bae6fd'],
          packetColor: '#38bdf8',
          orb1: 'bg-sky-600/20',
          orb2: 'bg-blue-600/20',
          orb3: 'bg-indigo-600/15',
          gridBorder: 'rgba(56, 189, 248, 0.08)',
        };
      case 'cyber':
      default:
        return {
          bgBase: 'from-[#060b18] via-[#0b142b] to-[#050814]',
          primary: '#F27D26', // Brand Orange
          secondary: '#00f0ff', // Cyber Cyan
          accent: '#3b82f6', // Electric Blue
          nodeColors: ['#F27D26', '#00f0ff', '#38bdf8', '#3b82f6', '#fb923c'],
          packetColor: '#00f0ff',
          orb1: 'bg-[#F27D26]/20',
          orb2: 'bg-cyan-500/20',
          orb3: 'bg-blue-600/20',
          gridBorder: 'rgba(0, 240, 255, 0.07)',
        };
    }
  };

  const themeConfig = getThemeColors(activeTheme);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track mouse / touch
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          active: true,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Initialize particles based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 38 : 75;
    const maxDistance = isMobile ? 120 : 170;

    const particles: Particle[] = [];
    const colors = themeConfig.nodeColors;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.35,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Initialize travelling data packets
    const dataPackets: DataPacket[] = [];
    const maxPackets = isMobile ? 8 : 16;

    const spawnDataPacket = () => {
      if (dataPackets.length >= maxPackets) return;
      const i = Math.floor(Math.random() * particles.length);
      // Find closest neighbor
      let closestIdx = -1;
      let minDst = maxDistance;

      for (let j = 0; j < particles.length; j++) {
        if (i === j) continue;
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDst) {
          minDst = dist;
          closestIdx = j;
        }
      }

      if (closestIdx !== -1) {
        dataPackets.push({
          fromNode: i,
          toNode: closestIdx,
          progress: 0,
          speed: Math.random() * 0.015 + 0.008,
          color: themeConfig.packetColor,
          size: Math.random() * 2.5 + 2,
        });
      }
    };

    let tick = 0;

    // Render loop
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Periodic packet spawn
      if (tick % 25 === 0) {
        spawnDataPacket();
      }

      // Draw subtle background scanning line
      const scanY = (tick * 1.2) % (height + 200) - 100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      scanGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.03)');
      scanGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 50, width, 100);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas boundaries with wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse interaction (Repulsion / Glow)
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 180;

          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * 1.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Pulsing glow
        const currentAlpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.2;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw connection vectors between nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Dynamic gradient line
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color);
            grad.addColorStop(1, p2.color);

            ctx.strokeStyle = grad;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and render travelling data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const pkt = dataPackets[i];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          dataPackets.splice(i, 1);
          continue;
        }

        const from = particles[pkt.fromNode];
        const to = particles[pkt.toNode];

        if (!from || !to) {
          dataPackets.splice(i, 1);
          continue;
        }

        const currX = from.x + (to.x - from.x) * pkt.progress;
        const currY = from.y + (to.y - from.y) * pkt.progress;

        // Draw glowing data packet with trailing streak
        ctx.beginPath();
        ctx.arc(currX, currY, pkt.size, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 12;
        ctx.shadowColor = pkt.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Interactive mouse aura
      if (mouseRef.current.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          160
        );
        mouseGlow.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
        mouseGlow.addColorStop(0.5, 'rgba(242, 125, 38, 0.04)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 160, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.globalAlpha = 1;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeTheme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Deep Dynamic Gradient Canvas Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${themeConfig.bgBase} transition-colors duration-1000`}
      />

      {/* 2. Floating Shifting Cyber Ambient Orbs */}
      <div
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full ${themeConfig.orb1} blur-[120px] animate-pulse duration-[8000ms] pointer-events-none`}
      />
      <div
        className={`absolute top-1/3 -right-48 w-[550px] h-[550px] rounded-full ${themeConfig.orb2} blur-[140px] animate-pulse duration-[10000ms] pointer-events-none`}
      />
      <div
        className={`absolute -bottom-32 left-1/4 w-[700px] h-[700px] rounded-full ${themeConfig.orb3} blur-[150px] animate-pulse duration-[12000ms] pointer-events-none`}
      />

      {/* 3. Tech Grid Overlay with Micro Isometric Perspective */}
      <div
        className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${themeConfig.gridBorder} 1px, transparent 1px),
            linear-gradient(to bottom, ${themeConfig.gridBorder} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 4. Real-Time Interactive Canvas (Particles, Data Constellations, Data Packets) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />

      {/* 5. Cyber HUD Coordinates & Floating Telemetry Markers */}
      <div className="hidden lg:block absolute top-28 left-6 font-mono text-[9px] text-cyan-400/40 tracking-widest pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>SAMNVYA_ENGINE // NODE: RAJASTHAN_HQ</span>
        </div>
        <div className="mt-1 opacity-60">SYS_COORDINATES: 26.8048°N, 75.8236°E</div>
      </div>

      <div className="hidden lg:block absolute bottom-6 right-6 font-mono text-[9px] text-[#F27D26]/40 tracking-widest pointer-events-none text-right">
        <div className="flex items-center justify-end space-x-2">
          <span>DATA_TRANSMISSION: ACTIVE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse"></span>
        </div>
        <div className="mt-1 opacity-60">LATENCY: 0.8ms // 100% INDIAN CLOUD MESH</div>
      </div>

      {/* 6. Subtle Dynamic Tech Background Theme Controller */}
      <div className="absolute bottom-5 left-5 pointer-events-auto z-40">
        <div className="relative">
          {showControls ? (
            <div className="bg-[#0b1329]/95 border border-cyan-500/30 rounded-2xl p-3.5 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 flex flex-col space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200 min-w-[220px]">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono font-bold text-gray-300">
                <span className="flex items-center space-x-1.5 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>DYNAMIC TECH THEME</span>
                </span>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-gray-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                <button
                  onClick={() => handleThemeSelect('cyber')}
                  className={`px-2.5 py-1.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                    activeTheme === 'cyber'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
                  <span>Cyber Grid</span>
                </button>

                <button
                  onClick={() => handleThemeSelect('quantum')}
                  className={`px-2.5 py-1.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                    activeTheme === 'quantum'
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#c084fc]"></span>
                  <span>Quantum</span>
                </button>

                <button
                  onClick={() => handleThemeSelect('solar')}
                  className={`px-2.5 py-1.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                    activeTheme === 'solar'
                      ? 'bg-[#F27D26]/20 border-[#F27D26] text-[#F27D26] shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
                  <span>Solar Wave</span>
                </button>

                <button
                  onClick={() => handleThemeSelect('deep_tech')}
                  className={`px-2.5 py-1.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                    activeTheme === 'deep_tech'
                      ? 'bg-blue-500/20 border-blue-400 text-blue-300 shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
                  <span>Deep Blue</span>
                </button>
              </div>

              <div className="pt-1 text-[9px] text-gray-400 text-center font-mono">
                Interactive Canvas: Move cursor to interact
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowControls(true)}
              className="group flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0b1329]/80 hover:bg-[#0b1329] border border-cyan-500/30 text-cyan-300 hover:text-white text-[10px] font-mono tracking-wider backdrop-blur-md transition-all shadow-lg hover:border-cyan-400"
              title="Change Dynamic Tech Theme"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline uppercase font-bold">Tech Canvas: {activeTheme.toUpperCase()}</span>
              <span className="sm:hidden uppercase font-bold">Theme</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
