import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'lg' | 'dark';
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, variant = 'default', hover = true, onClick, delay = 0 }, ref) => {
    const baseClasses = clsx(
      'rounded-2xl border backdrop-blur-glass transition-all duration-300',
      {
        'bg-glass-lighter border-white/20 shadow-glass hover:shadow-glow hover:border-white/40 hover:scale-105 cursor-pointer':
          variant === 'default' && hover,
        'bg-glass-lighter border-white/20 shadow-glass': variant === 'default' && !hover,
        'bg-glass-lighter border-white/20 shadow-glass-lg hover:shadow-glow-lg hover:border-white/40 hover:scale-105 cursor-pointer':
          variant === 'lg' && hover,
        'bg-glass-lighter border-white/20 shadow-glass-lg': variant === 'lg' && !hover,
        'bg-glass-dark border-white/10': variant === 'dark',
      },
      className
    );

    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay }}
        whileHover={hover ? { y: -5 } : undefined}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
