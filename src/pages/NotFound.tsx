import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="relative mb-8">
          {/* Animated 404 */}
          <h1 className="text-8xl font-bold text-primary opacity-20 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-primary/20  rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! A página que você está procurando não existe ou foi movida. 
          Que tal voltar para nossa página inicial e descobrir como automatizar suas vendas no WhatsApp?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="border-primary/20 text-foreground hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="btn-whatsapp"
          >
            <Home className="mr-2 h-4 w-4" />
            Ir para Início
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-2 opacity-50">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
