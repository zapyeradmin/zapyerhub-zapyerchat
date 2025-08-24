import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  symbol: string;
  opacity: number;
}

const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  const symbols = ['01', '10', '11', '00', '♦', '◆', '▲', '●', '■', '▬', '|', '/', '\\', '-', '+', '*'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 0.5 + 0.2,
          life: Math.random() * 60 + 30,
          maxLife: Math.random() * 60 + 30,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: Math.random() * 0.7 + 0.3
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Reset particle if out of bounds or dead
        if (particle.life <= 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = -20;
          particle.life = particle.maxLife;
          particle.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        }

        // Draw particle with glow effect
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(0, 255, 136, ${alpha * 0.8})`;
        
        ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
        ctx.font = `${Math.random() * 8 + 8}px 'Orbitron', monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #111218 100%)' }}
    />
  );
};

export default TechBackground;