import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, MessageSquare, DollarSign } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const startTime = Date.now();
          const startCount = 0;
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentCount = Math.floor(startCount + (end - startCount) * progress);
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="counter">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      number: 12340,
      prefix: '+',
      suffix: '',
      label: 'Empresas automatizadas',
      description: 'Clientes satisfeitos usando nossa plataforma'
    },
    {
      icon: MessageSquare,
      number: 95,
      prefix: '',
      suffix: '%',
      label: 'Taxa de resposta',
      description: 'Mensagens respondidas automaticamente'
    },
    {
      icon: DollarSign,
      number: 3,
      prefix: '+',
      suffix: ' milhões',
      label: 'Em vendas geradas',
      description: 'Volume total processado pelos nossos clientes'
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="feature-card p-8 rounded-2xl">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Number */}
                  <div className="mb-4">
                    <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                      <Counter 
                        end={stat.number}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </h3>
                    <p className="text-lg font-semibold text-primary">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Crescimento de 300% ao mês</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Mais de 1M mensagens processadas</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Suporte 24/7 em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;