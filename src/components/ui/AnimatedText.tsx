import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type?: 'fade' | 'slide' | 'stagger';
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'stagger',
  className = '',
  delay = 0,
}) => {
  const words = text.split(' ');

  if (type === 'stagger') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay,
            },
          },
        }}
        className={className}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (type === 'fade') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  if (type === 'slide') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  return <div className={className}>{text}</div>;
};

export default AnimatedText;
