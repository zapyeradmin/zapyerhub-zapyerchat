import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';

const AIFAQSection = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Sua resposta aparecerá aqui...');
  const [isLoading, setIsLoading] = useState(false);

  // Predefined responses for common questions about Zapyer Chat
  const faqResponses: { [key: string]: string } = {
    'planos': 'Temos dois planos principais: **Zap Chat** (R$ 149/mês) ideal para pequenos negócios com até 2 números WhatsApp e 8 usuários, e **Smart Chat** (R$ 249/mês) para empresas em crescimento com até 5 números, integração com Chat GPT e mais recursos avançados.',
    'preço': 'Nossos planos começam em R$ 149/mês para o Zap Chat básico e R$ 249/mês para o Smart Chat com recursos avançados. Todos incluem setup gratuito e suporte técnico.',
    'recursos': 'O Zapyer Chat oferece multiatendimento, chatbot inteligente, sistema Kanban, automação de respostas, relatórios em tempo real, integrações com diversas ferramentas e muito mais.',
    'whatsapp': 'Sim! Nosso sistema funciona 100% integrado ao WhatsApp oficial. Você pode conectar até 2 números no plano básico e até 5 no plano Smart Chat.',
    'suporte': 'Oferecemos suporte técnico em todos os planos, com suporte prioritário 24/7 no plano Smart Chat. Também incluímos treinamento para sua equipe.',
    'configuração': 'A configuração é super rápida! Em menos de 5 minutos seu chatbot estará funcionando. O plano Smart Chat inclui configuração personalizada e treinamento.',
    'integração': 'Integramos com OpenAI, n8n, Typebot, Dialogflow, Webflow e muitas outras ferramentas através de APIs e webhooks.',
    'automatização': 'Sim! Nosso sistema automatiza respostas, qualifica leads, distribui conversas para setores e ainda permite criar fluxos personalizados de atendimento.'
  };

  const generateResponse = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase();
    
    for (const [key, response] of Object.entries(faqResponses)) {
      if (question.includes(key)) {
        return response;
      }
    }
    
    // Generic responses for unmatched questions
    const genericResponses = [
      'Excelente pergunta! O Zapyer Chat é uma plataforma completa de automação para WhatsApp que ajuda empresas a aumentar suas vendas e melhorar o atendimento. Entre em contato conosco para uma demonstração personalizada!',
      'Nossa equipe pode responder essa pergunta em detalhes! O Zapyer Chat oferece soluções personalizadas para cada tipo de negócio. Que tal agendar uma conversa?',
      'Interessante! Cada empresa tem necessidades específicas. Nossa equipe técnica pode explicar como o Zapyer Chat se adapta ao seu modelo de negócio. Vamos conversar?'
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const response = generateResponse(question);
      setAnswer(response);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="cta-card bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes (IA)
              </h2>
              <p className="text-muted-foreground font-medium">
                Tem alguma dúvida? Pergunte à nossa IA. Ela foi treinada com todas as informações sobre o Zapyer Chat.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm text-foreground"
                  placeholder="Ex: Qual a diferença entre os planos?"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading || !question.trim()}
                  className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-1" />
                      Perguntar
                    </>
                  )}
                </Button>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-primary/20 min-h-[100px]">
                {isLoading ? (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processando sua pergunta...</span>
                  </div>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-wrap">{answer}</p>
                )}
              </div>
            </div>
            
            {/* Quick Questions */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Perguntas populares:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Quais são os planos?',
                  'Como funciona a automação?',
                  'Integra com WhatsApp?',
                  'Qual o preço?'
                ].map((quickQuestion) => (
                  <Button
                    key={quickQuestion}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuestion(quickQuestion);
                      setTimeout(() => handleSubmit(), 100);
                    }}
                    className="text-xs border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  >
                    {quickQuestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFAQSection;