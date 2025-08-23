import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
  size: number;
}

const InteractiveHeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Bem-vindo ao Zapyer Chat! 👋",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "Como posso ajudá-lo hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "Excelente pergunta! O Zapyer Chat automatiza 90% das suas conversas no WhatsApp 🚀",
    "Nossos clientes aumentam suas vendas em até 300% nos primeiros 60 dias! 📈",
    "Temos planos a partir de R$ 149/mês com todos os recursos incluídos 💰",
    "Posso configurar seu chatbot em menos de 5 minutos! Quer começar? ⚡",
    "Integramos com mais de 50 ferramentas, incluindo CRM, e-commerce e muito mais! 🔗",
    "Oferecemos suporte 24/7 e garantia de 30 dias. Sua satisfação é nossa prioridade! ✅"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

    const symbols = ['💬', '📱', '✓✓', '🤖', '📊', '⚡', '💰', '🚀'];

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 25; i++) {
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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
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
                Transforme seu{' '}
                <br className="hidden sm:block" />
                <span className="text-primary">Atendimento no WhatsApp</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Capacite sua equipe com automação, multiatendimento e insights para criar uma experiência excepcional para o cliente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="btn-whatsapp text-lg px-8 py-6"
                  onClick={() => scrollToSection('pricing')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 border-primary/20 text-foreground hover:bg-primary/10"
                  onClick={() => scrollToSection('features')}
                >
                  Conhecer Recursos
                </Button>
              </div>
              
              {/* Customer Avatars */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-foreground text-lg">Aprovado por centenas de empresas</span>
              </div>
            </div>
          </div>

          {/* Right Column - WhatsApp Chat Simulation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Chat Container */}
              <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl w-[420px] mx-auto floating-phone overflow-hidden">
                {/* Header */}
                <div className="bg-primary p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-white">Assistente de Vendas</p>
                    <p className="text-xs text-white/70">online agora</p>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="h-[400px] p-4 overflow-y-auto bg-gradient-to-b from-background/50 to-card space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isUser
                            ? 'bg-primary text-white rounded-br-md'
                            : 'bg-muted text-foreground rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isUser ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted text-foreground p-3 rounded-2xl rounded-bl-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-card">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-2 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-sm text-foreground"
                      placeholder="Pergunte sobre os planos..."
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/90 transition-colors p-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
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

export default InteractiveHeroSection;