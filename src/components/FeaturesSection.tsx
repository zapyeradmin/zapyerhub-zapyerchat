import { Bot, MessageSquare, Users, BarChart3, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'Chatbot Inteligente',
      description: 'IA avançada que entende contexto e responde como um humano, mantendo conversas naturais e engajantes.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Mensagens Condicionais',
      description: 'Sistema de regras avançado que personaliza mensagens baseado no comportamento e perfil do cliente.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Gestão de Contatos',
      description: 'CRM integrado que organiza, segmenta e acompanha toda a jornada dos seus leads automaticamente.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Avançados',
      description: 'Analytics detalhados com métricas de conversão, engajamento e ROI em tempo real.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Agendamento Inteligente',
      description: 'Envie mensagens no momento ideal para cada cliente, maximizando taxas de abertura e resposta.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção completa de dados com criptografia de ponta e compliance total com LGPD.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo o que você precisa para um{' '}
            <span className="text-primary">WhatsApp mais eficiente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa com todas as ferramentas necessárias para automatizar, 
            otimizar e escalar suas vendas no WhatsApp.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card p-8 rounded-2xl group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-0.5`}>
                    <div className="flex items-center justify-center w-full h-full bg-card rounded-2xl group-hover:bg-transparent transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Central CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Pronto para transformar seu WhatsApp?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já automatizaram suas vendas e multiplicaram seus resultados com a Zapyer Hub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-whatsapp text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Começar Gratuitamente
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-primary/20 text-foreground hover:bg-primary/10"
              >
                Agendar Demonstração
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-primary mr-1" />
                <span>Sem compromisso</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-1" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-1" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;