/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import palette from '../../theme/palette';

const BaseReveal = ({
  children,
  width = 'fit-content',
  duration,
  delay,
  slideAnimation = false,
  sx,
  backgroundSlideAnimation = palette.secondary,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideAnimation && slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        style={{ ...sx }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration || 0.25, delay: delay || 0.15 }}
      >
        {children}
      </motion.div>

      {slideAnimation && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration: duration || 0.5,
            ease: 'easeIn',
            delay: delay || 0.25,
          }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: backgroundSlideAnimation,
            zIndex: 20,
          }}
        ></motion.div>
      )}
    </div>
  );
};

export default BaseReveal;
