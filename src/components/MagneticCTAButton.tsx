import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface MagneticCTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
  glowEffect?: boolean;
  pulseEffect?: boolean;
}

const MagneticCTAButton: React.FC<MagneticCTAButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  className = '',
  glowEffect = true,
  pulseEffect = false
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground',
    secondary: 'bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 text-secondary-foreground',
    accent: 'bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-accent-foreground'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const glowColors = {
    primary: 'hover:shadow-2xl hover:shadow-primary/25',
    secondary: 'hover:shadow-2xl hover:shadow-secondary/25',
    accent: 'hover:shadow-2xl hover:shadow-accent/25'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${glowEffect ? glowColors[variant] : ''}
          ${pulseEffect ? 'animate-neon-pulse' : ''}
          font-tech font-bold rounded-xl
          transition-all duration-300
          hover:scale-105
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          group
          ${className}
        `}
      >
        <div className="flex items-center justify-center gap-2">
          {Icon && iconPosition === 'left' && (
            <Icon className="w-5 h-5 group-hover:animate-pulse" />
          )}
          
          <span className="relative">
            {children}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20"
              style={{
                background: variant === 'primary' 
                  ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                  : variant === 'secondary'
                  ? 'linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(255,0,102,0.4), transparent)'
              }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </span>
          
          {Icon && iconPosition === 'right' && (
            <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          )}
        </div>
      </Button>
    </motion.div>
  );
};

export default MagneticCTAButton;