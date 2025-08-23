import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left fade-in-left">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Sobre o <span className="text-primary">Zapyer Hub</span>
            </h2>
            <p className="text-muted-foreground font-medium mb-4 text-lg leading-relaxed">
              A Zapyer Hub é mais do que uma empresa; é um ecossistema de serviços digitais criado para impulsionar a evolução do seu negócio. Nossa missão é empoderar empreendedores com um ambiente coeso onde comunicação, gestão, vendas e presença online se conectam de forma inteligente.
            </p>
            <p className="text-muted-foreground font-medium mb-8 text-lg leading-relaxed">
              Dentro deste ecossistema, o <strong className="text-primary">Zapyer Chat</strong> se destaca como nossa principal solução de comunicação. É uma verdadeira central de inteligência empresarial para o WhatsApp, projetada para transformar conversas em oportunidades reais de negócio, otimizando o atendimento e alavancando suas vendas com tecnologia de ponta.
            </p>
            <Button
              onClick={() => scrollToSection('features')}
              className="btn-whatsapp flex items-center gap-2"
            >
              <Rocket className="h-5 w-5" />
              Explore os Recursos
            </Button>
          </div>
          <div className="relative h-full min-h-[400px] fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe colaborando em um ambiente tecnológico"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x450/1a352a/24954a?text=Zapyer+Hub";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;