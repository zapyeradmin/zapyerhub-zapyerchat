import { Webhook } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "OpenAI",
      logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/openai-icon.svg",
      description: "Inteligência Artificial"
    },
    {
      name: "n8n",
      logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/n8n-icon.svg",
      description: "Automação de Workflows"
    },
    {
      name: "Typebot",
      logo: "https://asset.brandfetch.io/id20mY2sN9/idqfVNNyW2.svg",
      description: "Chatbot Visual"
    },
    {
      name: "Dialogflow",
      logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/dialogflow.svg",
      description: "Processamento de Linguagem"
    },
    {
      name: "Webflow",
      logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/webflow.svg",
      description: "Website Builder"
    },
    {
      name: "Webhooks",
      icon: Webhook,
      description: "API Personalizada"
    }
  ];

  return (
    <section id="integrations" className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conecte com as Ferramentas que Você Já Ama
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            O Zapyer Chat se integra perfeitamente ao seu ecossistema de trabalho, automatizando tarefas e sincronizando dados.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="integration-icon bg-background/80 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              {integration.logo ? (
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-12 w-12"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="h-12 w-12 bg-primary/20 rounded flex items-center justify-center"><span class="text-primary font-bold">${integration.name.charAt(0)}</span></div>`;
                    }
                  }}
                />
              ) : integration.icon ? (
                <integration.icon className="h-12 w-12 text-primary" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;