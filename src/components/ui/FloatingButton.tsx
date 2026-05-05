import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FloatingButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, delay }}
      onClick={onClick}
      className={clsx(
        'glass-card p-3 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default FloatingButton;
