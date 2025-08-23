import { BarChart3, Users, Trello, Star, Check } from 'lucide-react';

const EnhancedFeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Equipes mais eficientes, clientes mais felizes
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Dê aos seus colaboradores as ferramentas de que precisam para atender com excelência e construir relacionamentos duradouros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dashboard and Reports Card */}
          <div className="feature-card bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Dashboard e Relatórios</h3>
              <p className="text-muted-foreground font-medium mb-6">
                Obtenha insights em tempo real sobre o desempenho da equipe, volume de conversas e satisfação do cliente.
              </p>
              <div className="h-48 bg-background rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-20 w-20 text-primary/30 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Gráficos e métricas em tempo real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-service Card */}
          <div className="feature-card bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Multiatendimento Centralizado</h3>
              <p className="text-muted-foreground mb-6">
                Organize conversas, distribua para os setores certos e colabore com sua equipe em um único lugar.
              </p>
              <div className="bg-background rounded-lg p-4 space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Múltiplos Atendentes</h4>
                    <p className="text-sm text-muted-foreground">Um número, vários colaboradores</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Departamentos e Filas</h4>
                    <p className="text-sm text-muted-foreground">Direcione o cliente para o setor certo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Transferência de Chats</h4>
                    <p className="text-sm text-muted-foreground">Colaboração interna sem esforço</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanban Management Card */}
          <div className="feature-card bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Trello className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Gestão com Kanban</h3>
              <p className="text-muted-foreground mb-6">
                Organize seu funil de atendimento visualmente e acompanhe o progresso de cada cliente.
              </p>
              <div className="bg-background rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Novos Leads</span>
                    <span className="text-sm font-medium text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Em Negociação</span>
                    <span className="text-sm font-medium text-primary">60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Vendas Fechadas</span>
                    <span className="text-sm font-medium text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction Card */}
          <div className="feature-card bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Satisfação do Cliente</h3>
            <p className="text-muted-foreground mb-2">Avaliação geral do atendimento</p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl font-bold mr-2 text-primary">4.9</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 mr-1 fill-current" />
                ))}
                <Star className="h-5 w-5 fill-current opacity-50" />
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-left">
              <p className="text-muted-foreground mb-4 italic">
                "A plataforma revolucionou nosso atendimento. A equipe está mais engajada e os gerentes têm melhores insights sobre a performance."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-muted flex items-center justify-center">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-primary">Ana Silva</p>
                  <p className="text-sm text-muted-foreground">Gerente de Vendas, InovaTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeaturesSection;