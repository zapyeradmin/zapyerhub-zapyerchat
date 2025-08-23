import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Smartphone, Zap } from 'lucide-react';
import heroPhoneMockup from '@/assets/hero-phone-mockup.png';

interface Particle {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
  size: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // WhatsApp symbols and emojis
    const symbols = ['💬', '📱', '✓✓', '🤖', '📊', '⚡', '💰', '🚀'];

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 1 + 0.5,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: Math.random() * 0.3 + 0.1,
          size: Math.random() * 12 + 8
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px Arial`;
        ctx.fillStyle = '#24954a';
        ctx.fillText(particle.symbol, particle.x, particle.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full hero-particles"
        style={{ background: 'transparent' }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Vendas automáticas no{' '}
                <br className="hidden sm:block" />
                WhatsApp em até{' '}
                <span className="text-primary animate-pulse-green">7 dias</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Transforme seu WhatsApp em uma máquina de vendas automática. 
                Capture leads, nurture clientes e feche vendas 24/7 sem esforço manual.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="btn-whatsapp text-lg px-8 py-6"
                  onClick={() => scrollToSection('precos')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 border-primary/20 text-foreground hover:bg-primary/10"
                  onClick={() => scrollToSection('como-funciona')}
                >
                  Ver Como Funciona
                </Button>
              </div>
              
              {/* Stats Pills */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Setup em 5 min</span>
                </div>
                <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                  <Smartphone className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">100% no WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-150"></div>
              
              {/* Phone Mockup */}
              <div className="relative floating-phone">
                <img
                  src={heroPhoneMockup}
                  alt="WhatsApp Business Interface"
                  className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-primary/10 backdrop-blur-sm rounded-2xl p-3 border border-primary/20 floating-phone" style={{ animationDelay: '1s' }}>
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-2xl p-3 border border-primary/20 floating-phone" style={{ animationDelay: '2s' }}>
                <Zap className="h-6 w-6 text-primary" />
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-primary/10 backdrop-blur-sm rounded-2xl p-3 border border-primary/20 floating-phone" style={{ animationDelay: '0.5s' }}>
                <span className="text-primary font-bold text-sm">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;