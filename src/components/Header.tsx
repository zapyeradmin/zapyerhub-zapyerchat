import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Zapyer Chat
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection('integrations')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Integrações
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Planos
              </button>
              <Button 
                className="btn-whatsapp ml-4"
                onClick={() => scrollToSection('pricing')}
              >
                Começar Agora
              </Button>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/10">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection('integrations')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Integrações
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Planos
              </button>
              <div className="px-3 py-2">
                <Button 
                  className="btn-whatsapp w-full"
                  onClick={() => scrollToSection('pricing')}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;