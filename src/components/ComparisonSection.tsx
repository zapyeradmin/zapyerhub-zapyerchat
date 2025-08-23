import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    'Automação completa de vendas 24/7',
    'IA avançada com processamento de linguagem natural',
    'Integração nativa com WhatsApp Business',
    'CRM integrado com gestão completa de leads',
    'Relatórios em tempo real com métricas avançadas',
    'Suporte técnico 24/7 em português',
    'Conformidade total com LGPD e políticas do WhatsApp',
    'Setup em menos de 5 minutos',
    'Integração com ferramentas de pagamento',
    'Campanhas de remarketing automáticas',
    'Segmentação avançada de audiência',
    'A/B testing automático de mensagens'
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nos torna a{' '}
            <span className="text-primary">melhor escolha?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare nossa solução completa com outras alternativas do mercado e veja por que somos a escolha preferida de milhares de empresas.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-1 overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-1 mb-1">
              <div className="bg-background rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-muted-foreground text-center">
                  Recursos
                </h3>
              </div>
              <div className="bg-background rounded-2xl p-6 border-2 border-red-500/20">
                <h3 className="text-lg font-semibold text-center text-red-400">
                  Outras Soluções
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Limitadas e caras
                </p>
              </div>
              <div className="bg-primary rounded-2xl p-6 relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-center text-white">
                    Zapyer Hub
                  </h3>
                  <p className="text-sm text-white/80 text-center mt-1">
                    Solução completa
                  </p>
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-white">MELHOR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-1">
              {comparisons.map((comparison, index) => (
                <div key={index} className="grid grid-cols-3 gap-1">
                  {/* Feature Name */}
                  <div className="bg-background rounded-2xl p-4 flex items-center">
                    <span className="text-foreground font-medium">
                      {comparison}
                    </span>
                  </div>
                  
                  {/* Others Column */}
                  <div className="bg-background rounded-2xl p-4 flex items-center justify-center border border-red-500/10">
                    <div className="flex items-center space-x-2">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-red-500 font-medium">Limitado</span>
                    </div>
                  </div>
                  
                  {/* Zapyer Hub Column */}
                  <div className="bg-primary/10 rounded-2xl p-4 flex items-center justify-center border border-primary/20">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-primary font-medium">Incluído</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não perca tempo com soluções incompletas
            </h3>
            <p className="text-muted-foreground mb-6">
              Enquanto outras plataformas oferecem apenas pedaços da solução, 
              nós entregamos um sistema completo que realmente funciona.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-whatsapp px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Começar com a Melhor Solução
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold border border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300">
                Comparar Recursos Detalhados
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
