import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'text-blue-600' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${color} border-2 border-current border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6 
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: -30 };
      case 'right':
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  from, 
  to, 
  duration = 2,
  suffix = "" 
}) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (count < to) {
        setCount(count + 1);
      }
    }, (duration * 1000) / (to - from));

    return () => clearTimeout(timer);
  }, [count, to, from, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setCount(from)}
    >
      {count}{suffix}
    </motion.span>
  );
};

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 0,
  speed = 0.05 
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + (index * speed) }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface PulseProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
}

export const Pulse: React.FC<PulseProps> = ({ 
  children, 
  scale = 1.05,
  duration = 2 
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  amplitude = 10,
  duration = 3,
  delay = 0 
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredListProps {
  children: React.ReactNode[];
  staggerDelay?: number;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({ 
  children, 
  staggerDelay = 0.1 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default {
  LoadingSpinner,
  PageTransition,
  ScrollReveal,
  CounterAnimation,
  Typewriter,
  Pulse,
  FloatingElement,
  StaggeredList
};

