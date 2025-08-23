import { MessageCircle, Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Zapyer Hub</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                A plataforma líder em automação de vendas para WhatsApp. Transforme seu WhatsApp 
                em uma máquina de vendas 24/7 e multiplique seus resultados.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('inicio')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('como-funciona')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('precos')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Preços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contato@zapyerhub.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    contato@zapyerhub.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    São Paulo, SP<br />
                    Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Zapyer Hub. Todos os direitos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                LGPD
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="#"
            className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-green"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </a>
          
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-background border border-border/20 rounded-lg px-3 py-2 shadow-lg opacity-0 pointer-events-none hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-sm text-foreground">Fale conosco no WhatsApp</span>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;