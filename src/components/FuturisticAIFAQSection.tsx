import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Send, 
  Brain, 
  Sparkles, 
  MessageSquare, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Mic,
  Star
} from 'lucide-react';

interface FAQMessage {
  id: number;
  question: string;
  answer: string;
  timestamp: Date;
  isTyping?: boolean;
}

const FuturisticAIFAQSection: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState<FAQMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isTypingAnimation, setIsTypingAnimation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Qual a diferença entre os planos?",
    "Como funciona a integração com WhatsApp?",
    "Posso testar antes de comprar?",
    "Quanto tempo demora a configuração?",
    "Tem suporte técnico incluído?",
    "Posso cancelar quando quiser?"
  ];

  const faqResponses: { [key: string]: string } = {
    'planos': '🎯 **Comparação dos Planos:**\n\n**Zap Chat (R$ 149/mês):**\n• 2 números WhatsApp\n• 8 usuários/atendentes\n• Sistema Kanban básico\n• Chatbot ilimitado\n\n**Smart Chat (R$ 249/mês):**\n• 5 números WhatsApp\n• 15 usuários/atendentes\n• Integração Chat GPT\n• API oficial da Meta\n• Construtor de fluxos\n• Configuração inclusa',
    
    'preço': '💰 **Nossos preços são super competitivos:**\n\n• **Zap Chat**: R$ 149/mês\n• **Smart Chat**: R$ 249/mês\n\n✅ Sem taxas de setup\n✅ Cancelamento quando quiser\n✅ Suporte técnico incluído\n✅ 7 dias de teste grátis',
    
    'configuração': '⚡ **Configuração super rápida:**\n\n1. Conecta em **5 minutos**\n2. Import seus contatos automaticamente\n3. Chatbot funcionando na hora\n4. Treinamento da equipe incluído\n\n🎁 **No Smart Chat:** Configuramos tudo para você!',
    
    'suporte': '🛟 **Suporte completo:**\n\n• **Zap Chat**: Suporte técnico padrão\n• **Smart Chat**: Suporte prioritário 24/7\n• Treinamento da equipe incluído\n• Base de conhecimento completa\n• Comunidade exclusiva de usuários',
    
    'teste': '🎮 **Teste grátis por 7 dias:**\n\n✅ Sem compromisso\n✅ Sem cartão de crédito\n✅ Acesso completo\n✅ Suporte incluído\n\n**Quer começar agora?** É só clicar em "Começar Teste Grátis"!',
    
    'integração': '🔗 **Integrações poderosas:**\n\n• WhatsApp oficial (API Meta)\n• OpenAI (Chat GPT)\n• CRMs populares\n• E-commerce (WooCommerce, Shopify)\n• Zapier, n8n, Make\n• Webhooks personalizados',
    
    'cancelamento': '🚪 **Liberdade total:**\n\n• Cancele quando quiser\n• Sem multas ou taxas\n• Seus dados ficam seguros\n• Export completo dos contatos\n• Migração facilitada'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, currentAnswer]);

  const generateResponse = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase();
    
    for (const [key, response] of Object.entries(faqResponses)) {
      if (question.includes(key)) {
        return response;
      }
    }
    
    const genericResponses = [
      '🤖 **Excelente pergunta!**\n\nO Zapyer Chat é uma plataforma completa de automação para WhatsApp que revoluciona o atendimento. Nossa IA pode responder 90% das dúvidas automaticamente!\n\n**Quer uma demonstração personalizada?**',
      
      '🎯 **Interessante!**\n\nCada empresa tem necessidades específicas. Nossa equipe pode criar uma solução personalizada para seu negócio.\n\n**Que tal conversarmos?** Nossa equipe está online agora!',
      
      '⚡ **Ótima pergunta!**\n\nTemos mais de 2.500 empresas usando o Zapyer Chat com resultados incríveis:\n\n📈 300% de aumento nas vendas\n⏰ 80% de redução no tempo de resposta\n😊 95% de satisfação dos clientes'
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };

  const simulateTyping = async (text: string): Promise<void> => {
    return new Promise((resolve) => {
      setIsTypingAnimation(true);
      setCurrentAnswer('');
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentAnswer(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingAnimation(false);
          resolve();
        }
      }, 30);
    });
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    const userMessage: FAQMessage = {
      id: Date.now(),
      question: question.trim(),
      answer: '',
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    setQuestion('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(async () => {
      const response = generateResponse(question);
      await simulateTyping(response);
      
      const aiResponse: FAQMessage = {
        id: Date.now() + 1,
        question: '',
        answer: response,
        timestamp: new Date()
      };

      setConversation(prev => [...prev, aiResponse]);
      setIsLoading(false);
      setCurrentAnswer('');
    }, 1500);
  };

  const handleQuickQuestion = async (quickQ: string) => {
    setQuestion(quickQ);
    setTimeout(handleSubmit, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-neon-pulse">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-5xl font-cyber font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              IA FAQ Assistant
            </h2>
          </div>
          <p className="text-xl font-tech text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa IA foi treinada com todas as informações sobre o Zapyer Chat. 
            <span className="text-primary font-semibold"> Pergunte qualquer coisa!</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Questions Sidebar */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-tech font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Perguntas Populares
            </h3>
            <div className="space-y-3">
              {quickQuestions.map((q, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleQuickQuestion(q)}
                  className="w-full text-left p-4 glass-card hover:border-primary/40 transition-all duration-300 group text-sm font-tech"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-primary group-hover:animate-pulse" />
                    <span className="group-hover:text-primary transition-colors">{q}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div 
              className="glass-card p-6 text-center space-y-4 border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-neon-pulse">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-tech font-bold text-foreground">Pronto para começar?</h4>
              <p className="text-sm text-muted-foreground">Teste grátis por 7 dias, sem compromisso!</p>
              <Button 
                onClick={() => scrollToSection('about')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 font-tech font-semibold"
              >
                <Zap className="w-4 h-4 mr-2" />
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Main Chat Interface */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-card to-card/80 p-6 border-b border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-neon-pulse">
                    <Brain className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-tech font-bold text-foreground">Zapyer AI Assistant</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <p className="text-sm text-muted-foreground">Online • Responde instantaneamente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-card/50 to-card/80">
                {conversation.length === 0 && (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                      <MessageSquare className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-tech font-bold text-foreground mb-2">Olá! Como posso ajudar?</h4>
                    <p className="text-muted-foreground">Faça qualquer pergunta sobre o Zapyer Chat ou clique em uma das sugestões ao lado.</p>
                  </motion.div>
                )}

                <AnimatePresence>
                  {conversation.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      {/* User Question */}
                      {message.question && (
                        <div className="flex justify-end">
                          <div className="max-w-md bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl rounded-br-md text-primary-foreground">
                            <p className="font-tech font-medium">{message.question}</p>
                            <div className="flex items-center justify-end gap-2 mt-2">
                              <span className="text-xs opacity-80">
                                {message.timestamp.toLocaleTimeString('pt-BR', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                              <CheckCircle2 className="w-4 h-4 opacity-80" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* AI Answer */}
                      {message.answer && (
                        <div className="flex justify-start">
                          <div className="flex gap-3 max-w-2xl">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                              <Brain className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="glass-card p-4 rounded-2xl rounded-bl-md">
                              <div className="prose prose-sm text-foreground">
                                {message.answer.split('\n').map((line, index) => (
                                  <p key={index} className="mb-2 last:mb-0 font-tech">
                                    {line.startsWith('**') && line.endsWith('**') ? (
                                      <strong className="text-primary">{line.slice(2, -2)}</strong>
                                    ) : line.startsWith('•') ? (
                                      <span className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                        {line.slice(1).trim()}
                                      </span>
                                    ) : (
                                      line
                                    )}
                                  </p>
                                ))}
                              </div>
                              <div className="flex items-center justify-end mt-3">
                                <span className="text-xs text-muted-foreground">
                                  {message.timestamp.toLocaleTimeString('pt-BR', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading/Typing Animation */}
                {(isLoading || isTypingAnimation) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center animate-pulse">
                        <Brain className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="glass-card p-4 rounded-2xl rounded-bl-md">
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                            <span className="text-sm text-muted-foreground font-tech">Processando sua pergunta...</span>
                          </div>
                        ) : (
                          <div className="font-tech text-foreground">
                            {currentAnswer}
                            <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-primary/20 bg-gradient-to-r from-card to-card/80">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <div className="relative">
                      <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua pergunta sobre o Zapyer Chat..."
                        className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none font-tech placeholder-muted-foreground transition-all duration-300"
                        rows={1}
                      />
                      <Mic className="absolute right-3 top-3 w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={!question.trim() || isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-tech">
                  Pressione Enter para enviar ou Shift+Enter para nova linha
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticAIFAQSection;