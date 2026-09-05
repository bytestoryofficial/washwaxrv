import { motion } from 'framer-motion';

const TextTransition = ({ children, delay = 1, initialY = -20 }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        transition={{
          delay: delay,
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: initialY, opacity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TextTransition;
