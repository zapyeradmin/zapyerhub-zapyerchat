import { TrendingUp, Clock, Users } from 'lucide-react';

const EnhancedStatisticsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%+",
      description: "Aumento de produtividade das equipes de atendimento"
    },
    {
      icon: TrendingUp,
      value: "60%",
      description: "Redução média nos custos operacionais de comunicação"
    },
    {
      icon: Clock,
      value: "24/7",
      description: "Atendimento automatizado e disponível a qualquer hora"
    }
  ];

  return (
    <section className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stats-card bg-background/80 p-8 rounded-lg shadow-lg border border-primary/20 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Capacite sua equipe com dados para impulsionar a produtividade e o sucesso
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma fornece análises em tempo real e insights para você tomar melhores decisões, 
            otimizar seu funil de vendas e criar um atendimento mais envolvente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedStatisticsSection;