import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
const plans = [
    {
      name: 'Plano Zap Chat',
      price: '149',
      period: '/mês',
      description: 'Ideal para pequenos negócios e equipes enxutas.',
      popular: false,
      features: [
        'Conecte até 2 número WhatsApp',
        'Cadastre até 8 Usuários/Atendentes',
        'Sem Limites de mensagens',
        'Cadastre até 8 Setores/Filas',
        'Chatbot ilimitado',
        'Atendentes Simultâneos',
        'Sistema Kanban integrado',
        'Cadastre Tags aos seus Leads',
        'Chat Interno Liberado',
        'Cadastre Clientes a sua carteira',
        'Agendamento de Mensagens',
        'Cadastre Respostas Rápidas',
        'Suporte Técnico'
      ],
      color: 'border-border/20',
      bgColor: 'bg-card',
      textColor: 'text-foreground'
    },
    {
      name: 'Plano Smart Chat',
      price: '249',
      period: '/mês',
      description: 'Para empresas que desejam escalar e automatizar.',
      popular: true,
      features: [
        'Conecte até 5 número WhatsApp',
        'Conexão com API Oficial da Meta*',
        'Cadastre até 15 Usuários/Atendentes',
        'Sem Limites de mensagens',
        'Cadastre até 15 Setores/Filas',
        'Integração com Chat GPT*',
        'Integrações Liberadas',
        'Integração API',
        'Construtor de Fluxos',
        'Chatbot ilimitado',
        'Atendentes Simultâneos',
        'Sistema Kanban integrado',
        'Agendamento de Mensagens',
        'Envio de Campanhas',
        'Configuração e ajustes Incluso',
        'Treinamento para sua equipe',
        'Suporte Prioritário Especial'
      ],
      color: 'border-primary',
      bgColor: 'bg-primary',
      textColor: 'text-white'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o plano ideal{' '}
            <span className="text-primary">para você!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todos os planos incluem setup gratuito, migração de dados e suporte completo. 
            Comece hoje mesmo e transforme suas vendas no WhatsApp.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'pricing-card-featured' : ''} rounded-3xl p-8 relative ${plan.bgColor} border-2 ${plan.color}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full px-6 py-2 flex items-center space-x-2 shadow-lg">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-primary font-bold text-sm">MAIS POPULAR</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.textColor}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.popular ? 'text-white/80' : 'text-muted-foreground'} mb-4`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    R$
                  </span>
                  <span className={`text-5xl font-bold ${plan.textColor} mx-1`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    <span className={`${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  className={`w-full py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'btn-whatsapp'
                  }`}
                >
                  {plan.popular ? (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Começar Agora
                    </>
                  ) : (
                    'Escolher Plano'
                  )}
                </Button>
              </div>

              {/* Glow Effect for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-3xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* API Costs Notice */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          *Custos com a API da OpenAI (tokens) são de responsabilidade do contratante.
        </p>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Garantia de 30 dias ou seu dinheiro de volta
            </h3>
            <p className="text-muted-foreground mb-6">
              Teste nossa plataforma por 30 dias. Se não estiver completamente satisfeito, 
              devolvemos 100% do seu investimento, sem perguntas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Setup gratuito incluído</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Ativação em até 5 minutos</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Suporte premium incluído</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;