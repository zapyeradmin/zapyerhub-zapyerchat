import { MessageCircle, Users, Camera, BarChart3 } from 'lucide-react';

const ConvertSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Funil de Conversão Inteligente',
      description: 'Guie seus leads através de um funil otimizado que converte visitantes em clientes pagantes automaticamente.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Segmentação Avançada',
      description: 'Identifique e segmente seus contatos automaticamente para mensagens personalizadas e mais efetivas.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Mídia Automática',
      description: 'Envie imagens, vídeos e documentos automaticamente baseado no interesse e comportamento do cliente.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics em Tempo Real',
      description: 'Monitore conversões, taxa de abertura e engajamento com dashboards intuitivos e relatórios detalhados.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Converta cada mensagem em uma{' '}
            <span className="text-primary">oportunidade de venda</span>{' '}
            em minutos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma transforma seu WhatsApp em uma máquina de vendas que trabalha 24/7, 
            qualificando leads e fechando negócios enquanto você dorme.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card p-8 rounded-2xl group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5`}>
                    <div className="flex items-center justify-center w-full h-full bg-card rounded-2xl group-hover:bg-transparent transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para revolucionar suas vendas no WhatsApp?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já automatizaram suas vendas e multiplicaram seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-whatsapp px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Começar Teste Gratuito
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold border border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertSection;