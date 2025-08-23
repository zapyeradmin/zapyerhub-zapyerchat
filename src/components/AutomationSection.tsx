import { Check, MessageSquare, Users, Target, Zap, BarChart, Settings } from 'lucide-react';

const AutomationSection = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Captura Automática de Leads',
      description: 'Configure palavras-chave e gatilhos que identificam automaticamente novos leads interessados em seus produtos.',
      features: ['Detecção por palavras-chave', 'Integração com redes sociais', 'Captura de contatos via QR Code']
    },
    {
      number: 2,
      icon: Users,
      title: 'Qualificação Inteligente',
      description: 'Sistema inteligente que faz perguntas estratégicas para qualificar leads e entender suas necessidades específicas.',
      features: ['Perguntas personalizáveis', 'Scoring automático de leads', 'Segmentação por interesse']
    },
    {
      number: 3,
      icon: Target,
      title: 'Nutrição Personalizada',
      description: 'Envie sequências de mensagens personalizadas baseadas no perfil e comportamento de cada lead.',
      features: ['Mensagens condicionais', 'Timing otimizado', 'Conteúdo dinâmico']
    },
    {
      number: 4,
      icon: Zap,
      title: 'Fechamento Automático',
      description: 'Apresente ofertas no momento certo e processe pedidos automaticamente através do WhatsApp.',
      features: ['Ofertas personalizadas', 'Processamento de pagamentos', 'Confirmação automática']
    },
    {
      number: 5,
      icon: BarChart,
      title: 'Análise e Otimização',
      description: 'Monitore performance em tempo real e otimize suas campanhas com insights baseados em dados.',
      features: ['Dashboard em tempo real', 'Relatórios detalhados', 'A/B testing automático']
    },
    {
      number: 6,
      icon: Settings,
      title: 'Integração Completa',
      description: 'Conecte com suas ferramentas favoritas e mantenha todos os dados sincronizados automaticamente.',
      features: ['CRM integrado', 'Webhooks personalizados', 'API completa']
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automatize suas respostas em uma{' '}
            <span className="text-primary">escala nunca vista</span> antes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa tecnologia revolucionária automatiza todo o processo de vendas, desde a primeira mensagem até o fechamento do negócio.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-1/2 ${isEven ? 'pr-12' : 'pl-12'}`}>
                  <div className={`feature-card p-8 rounded-2xl ${isEven ? 'fade-in-left' : 'fade-in-right'}`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex items-center mb-4">
                      <div className="timeline-number mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon Side */}
                <div className="w-1/2 flex justify-center">
                  <div className={`relative scale-in`} style={{ animationDelay: `${index * 200 + 100}ms` }}>
                    {/* Main Icon Container */}
                    <div className="w-32 h-32 bg-gradient-to-r from-primary to-primary/80 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                      
                      {/* Icon */}
                      <IconComponent className="h-16 w-16 text-white relative z-10" />
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-primary/40 blur-2xl -z-10 rounded-full scale-150"></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/30 mt-40"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 border border-primary/20 mb-6">
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Setup completo em menos de 5 minutos</span>
          </div>
          
          <button className="btn-whatsapp px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Automatizar Meu WhatsApp Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;