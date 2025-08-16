import { motion } from "motion/react";
import { useLocation } from "react-router";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
