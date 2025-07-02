import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for reusability
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotatingAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Animated wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Animated card component
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverEffect = true 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
};

// Animated button component
interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className = "", 
  onClick,
  href 
}) => {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      className={className}
      onClick={onClick}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </Component>
  );
};

// Animated text component
interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Animated icon component
interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'float' | 'rotate' | 'pulse' | 'none';
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  children, 
  className = "", 
  animation = 'none' 
}) => {
  if (animation === 'float') {
    return (
      <motion.div
        className={className}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }

  if (animation === 'rotate') {
    return (
      <motion.div
        className={className}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    );
  }

  if (animation === 'pulse') {
    return (
      <motion.div
        className={className}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className}>
      {children}
    </motion.div>
  );
};

export default {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleOnHover,
  floatingAnimation,
  rotatingAnimation,
  AnimatedSection,
  AnimatedCard,
  AnimatedButton,
  AnimatedText,
  AnimatedIcon
};

