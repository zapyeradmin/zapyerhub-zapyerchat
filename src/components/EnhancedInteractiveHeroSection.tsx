import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Send, 
  Zap, 
  Brain, 
  Target,
  CheckCircle2,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

const EnhancedInteractiveHeroSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Bem-vindo ao Zapyer Chat! 👋",
      isUser: false,
      timestamp: new Date(),
      status: 'read'
    },
    {
      id: 2,
      text: "Como posso ajudá-lo hoje?",
      isUser: false,
      timestamp: new Date(),
      status: 'read'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "🚀 Excelente pergunta! O Zapyer Chat automatiza 90% das suas conversas no WhatsApp",
    "📈 Nossos clientes aumentam suas vendas em até 300% nos primeiros 60 dias!",
    "💰 Temos planos a partir de R$ 149/mês com todos os recursos incluídos",
    "⚡ Posso configurar seu chatbot em menos de 5 minutos! Quer começar?",
    "🔗 Integramos com mais de 50 ferramentas, incluindo CRM, e-commerce e muito mais!",
    "✅ Oferecemos suporte 24/7 e garantia de 30 dias. Sua satisfação é nossa prioridade!"
  ];

  const quickQuestions = [
    "Como funciona o chatbot?",
    "Quais são os preços?",
    "Posso integrar com meu CRM?",
    "Qual o tempo de configuração?"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateTyping = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      setIsTyping(true);
      setCurrentTypingText('');
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentTypingText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          resolve();
        }
      }, 50);
    });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => msg.id === userMessage.id ? {...msg, status: 'delivered'} : msg)
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => msg.id === userMessage.id ? {...msg, status: 'read'} : msg)
      );
    }, 2000);

    // Bot response
    setTimeout(async () => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      await simulateTyping(randomResponse);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
        status: 'read'
      };

      setMessages(prev => [...prev, botMessage]);
    }, 3000);
  };

  const handleQuickQuestion = async (question: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(async () => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      await simulateTyping(randomResponse);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
        status: 'read'
      };

      setMessages(prev => [...prev, botMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      <div className="absolute inset-0 cyber-gradient opacity-20"></div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-matrix-scan"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <motion.div 
            className="text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-7xl font-cyber font-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-300%">
                  Transforme seu
                </span>
                <br />
                <span className="text-primary animate-neon-pulse">
                  WhatsApp
                </span>
                <br />
                <span className="text-foreground">
                  em uma Máquina
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  de Vendas
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl font-tech font-medium text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                IA avançada, automação inteligente e uma interface futurística que 
                <span className="text-primary font-semibold"> revoluciona</span> seu atendimento no WhatsApp.
              </motion.p>
            </div>

            {/* Feature Highlights */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Brain, label: "IA Inteligente", color: "text-primary" },
                { icon: Zap, label: "Super Rápido", color: "text-secondary" },
                { icon: Target, label: "Altamente Eficaz", color: "text-accent" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 text-center group transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color} group-hover:animate-neon-pulse`} />
                  <p className="font-tech font-medium text-sm">{feature.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-tech font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Começar Teste Grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('features')}
                className="border-primary/50 hover:border-primary text-primary hover:bg-primary/10 font-tech font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </motion.div>

            {/* Customer Avatars */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full border-3 border-primary/50 overflow-hidden ring-2 ring-background"
                  >
                    <img 
                      src={`https://i.pravatar.cc/48?img=${i}`} 
                      alt={`Cliente ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground font-tech">
                <p className="font-semibold text-foreground">2.500+ empresas</p>
                <p className="text-sm">já transformaram seus resultados</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - WhatsApp Chat Interface */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden max-w-sm mx-auto hover:border-primary/40 transition-all duration-500 hover:shadow-primary/20">
              {/* WhatsApp Header */}
              <div className="bg-whatsapp-dark p-4 flex items-center gap-3 border-b border-whatsapp-darker">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-neon-pulse">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-tech font-bold text-foreground">Zapyer Assistant</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <p className="text-xs text-muted-foreground">online • responde em segundos</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 p-4 overflow-y-auto bg-whatsapp-darker bg-opacity-95 space-y-3 scrollbar-hide">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`
                          max-w-[80%] p-3 rounded-2xl font-sans text-sm leading-relaxed
                          ${message.isUser 
                            ? 'bg-whatsapp-user text-white rounded-br-md' 
                            : 'bg-whatsapp-bot text-white rounded-bl-md'
                          }
                        `}
                      >
                        <p>{message.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString('pt-BR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                          {message.isUser && (
                            <div className="flex">
                              {message.status === 'sent' && (
                                <CheckCircle2 className="w-3 h-3 opacity-50" />
                              )}
                              {message.status === 'delivered' && (
                                <>
                                  <CheckCircle2 className="w-3 h-3 opacity-50" />
                                  <CheckCircle2 className="w-3 h-3 opacity-50 -ml-1" />
                                </>
                              )}
                              {message.status === 'read' && (
                                <>
                                  <CheckCircle2 className="w-3 h-3 text-secondary" />
                                  <CheckCircle2 className="w-3 h-3 text-secondary -ml-1" />
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex justify-start"
                  >
                    <div className="bg-whatsapp-bot p-3 rounded-2xl rounded-bl-md">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-xs ml-2">{currentTypingText}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="p-3 bg-whatsapp-dark border-t border-whatsapp-darker">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-whatsapp-bot hover:bg-whatsapp-user px-3 py-2 rounded-full text-white transition-colors duration-200 font-tech"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-whatsapp-bot text-white placeholder-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-primary hover:bg-primary/80 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 animate-neon-pulse"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float tech-glow">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-float tech-glow" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <p className="text-sm font-tech">Descubra mais</p>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedInteractiveHeroSection;