import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Como funciona a automação do WhatsApp?',
      answer: 'Nossa plataforma se conecta ao WhatsApp Business API e utiliza inteligência artificial para responder automaticamente suas mensagens. Você configura as respostas, palavras-chave e fluxos de conversa, e nosso sistema faz o resto, respondendo aos clientes 24/7 de forma natural e personalizada.'
    },
    {
      question: 'É permitido automatizar o WhatsApp?',
      answer: 'Sim! Utilizamos a WhatsApp Business API oficial, que é totalmente aprovada pelo WhatsApp para automação comercial. Nossa plataforma está em conformidade com todas as políticas do WhatsApp e LGPD, garantindo que sua conta permaneça segura e protegida.'
    },
    {
      question: 'Quanto tempo demora para configurar?',
      answer: 'O setup completo leva em média 5 minutos. Nossa equipe te ajuda com todo o processo de configuração, desde a conexão com sua conta WhatsApp Business até a criação dos primeiros fluxos de automação. Você pode começar a receber leads automatizados no mesmo dia.'
    },
    {
      question: 'Posso personalizar as mensagens automáticas?',
      answer: 'Absolutamente! Você tem controle total sobre todas as mensagens, podendo personalizar textos, adicionar variáveis dinâmicas (como nome do cliente), configurar diferentes fluxos para diferentes tipos de clientes, e até mesmo incluir imagens, documentos e botões interativos.'
    },
    {
      question: 'E se minha conta WhatsApp for bloqueada?',
      answer: 'Isso não acontece quando você usa nossa plataforma, pois utilizamos apenas métodos aprovados pelo WhatsApp. Além disso, oferecemos garantia total: se sua conta for bloqueada por nossa causa (o que nunca aconteceu), assumimos total responsabilidade e te ajudamos a resolver a situação.'
    },
    {
      question: 'Funciona com WhatsApp normal ou precisa do Business?',
      answer: 'Para automação completa, é necessário o WhatsApp Business API. Se você usa o WhatsApp normal ou WhatsApp Business gratuito, nossa equipe te ajuda a migrar para a API gratuitamente, mantendo todos seus contatos e conversas anteriores.'
    },
    {
      question: 'Quantas mensagens posso enviar por dia?',
      answer: 'Isso depende do seu plano e do status da sua conta no WhatsApp. Contas novas começam com limites menores que aumentam automaticamente conforme o engajamento. Nossos planos variam de 1.000 mensagens/mês até mensagens ilimitadas, sempre respeitando os limites do WhatsApp.'
    },
    {
      question: 'Vocês oferecem suporte técnico?',
      answer: 'Sim! Oferecemos suporte completo em português via chat, WhatsApp e email. Nossos planos incluem desde suporte básico por chat até gerente de conta dedicado com suporte 24/7. Nossa equipe é especializada em WhatsApp e marketing digital.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Claro! Não temos fidelidade e você pode cancelar a qualquer momento. Oferecemos ainda 30 dias de garantia: se não estiver satisfeito, devolvemos 100% do valor pago, sem perguntas. Queremos que você use nossa plataforma porque realmente funciona.'
    },
    {
      question: 'Como funciona a integração com outras ferramentas?',
      answer: 'Nossa plataforma se integra nativamente com as principais ferramentas do mercado: CRMs (RD Station, HubSpot, Pipedrive), e-commerces (Shopify, WooCommerce), sistemas de pagamento (Stripe, PagSeguro) e muito mais. Também oferecemos webhooks e API completa para integrações personalizadas.'
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            FAQ - <span className="text-primary">Tem dúvidas?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossa plataforma de automação para WhatsApp. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="feature-card rounded-2xl overflow-hidden border border-border/10"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border/10 pt-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contato" className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para te ajudar! Entre em contato conosco através dos canais abaixo 
              e tire todas suas dúvidas sobre automação no WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-whatsapp">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary/20 text-foreground hover:bg-primary/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar Ligação
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-6 space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 text-primary mr-1" />
                <span>Resposta em até 2 minutos</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-1" />
                <span>Suporte em português</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
              <div>
                <span>Segunda à sexta, 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;