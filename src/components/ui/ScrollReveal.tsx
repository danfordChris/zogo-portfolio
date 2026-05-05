import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}) => {

  const getInitialVariants = () => {
    const variants: Record<string, any> = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: -40 },
      right: { opacity: 0, x: 40 },
    };
    return variants[direction] || variants.up;
  };

  return (
    <motion.div
      initial={getInitialVariants()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
