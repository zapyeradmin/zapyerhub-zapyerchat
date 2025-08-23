import { UserPlus, Bot, Headphones, BarChart3, HandHeart } from 'lucide-react';

const TimelineSection = () => {
  const timelineSteps = [
    {
      icon: UserPlus,
      title: "1. Captura do Lead",
      description: "O primeiro contato acontece. Seja por um anúncio, site ou link direto, o cliente inicia a conversa no seu WhatsApp."
    },
    {
      icon: Bot,
      title: "2. Qualificação com IA",
      description: "Nosso chatbot inteligente entra em ação, faz as perguntas certas, qualifica o lead e coleta as informações essenciais 24/7."
    },
    {
      icon: Headphones,
      title: "3. Atendimento Humano",
      description: "Com o lead qualificado, a conversa é transferida de forma transparente para o atendente certo, que já tem todo o histórico em mãos."
    },
    {
      icon: BarChart3,
      title: "4. Gestão no Kanban",
      description: "O atendente gerencia o lead de forma visual no nosso Kanban integrado, movendo-o pelas etapas do funil de vendas com facilidade."
    },
    {
      icon: HandHeart,
      title: "5. Sucesso da Venda",
      description: "Com um processo organizado e eficiente, a venda é concluída com sucesso, gerando um cliente satisfeito e fiel."
    }
  ];

  return (
    <section id="timeline-section" className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="text-left fade-in-left">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Zap Chat: A Inovação para seus Atendimentos
            </h2>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-4">
              Em um mercado onde cada segundo e cada mensagem contam, o Zap Chat redefine o que é possível dentro do WhatsApp. Não se trata apenas de responder clientes, mas de antecipar suas necessidades, guiá-los por uma jornada de compra fluida e construir relacionamentos que duram.
            </p>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed">
              Visualize o caminho para o sucesso. Mapeamos a jornada do seu cliente e a otimizamos com automação inteligente e um fluxo de trabalho visual, garantindo que nenhum lead seja perdido e cada interação seja uma oportunidade de negócio.
            </p>
          </div>
          <div className="relative h-full min-h-[400px] fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop"
                alt="Equipe de negócios analisando gráficos em uma tela digital"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x450/1a352a/24954a?text=Inovação";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-2 h-full w-1 -translate-x-1/2 bg-primary/20 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="timeline-item relative">
                  <div className="md:flex items-center">
                    {isLeft ? (
                      <div className="md:w-1/2 md:pr-12">
                        <div className="timeline-card bg-card/80 p-6 rounded-lg border border-primary/20 shadow-lg text-right">
                          <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="md:w-1/2"></div>
                        <div className="md:w-1/2 md:pl-12">
                          <div className="timeline-card bg-card/80 p-6 rounded-lg border border-primary/20 shadow-lg">
                            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10 shadow-lg">
                    <Icon className="text-primary text-2xl h-8 w-8" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Veja na Prática como Funciona
          </h3>
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;