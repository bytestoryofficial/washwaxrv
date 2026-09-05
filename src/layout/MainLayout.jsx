import { AnimatePresence, motion } from 'framer-motion';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <AnimatePresence initial mode="wait">
      <motion.div exit={{ opacity: 1 }}>
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
