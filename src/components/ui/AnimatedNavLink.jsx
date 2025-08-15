import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const AnimatedNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative inline-flex items-center px-1 pt-1 text-sm font-medium ${
          isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
        }`
      }
    >
      {({ isActive }) => (
        <span className="relative">
          <motion.span
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            {children}
          </motion.span>

          <AnimatePresence initial={false}>
            {isActive ? (
              <motion.span
                layoutId="nav-underline"
                className="absolute right-0 -bottom-1 left-0 h-0.5 rounded bg-blue-500"
              />
            ) : (
              <motion.span
                key="hover-underline"
                className="absolute -bottom-1 left-0 h-0.5 rounded bg-gray-300"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </span>
      )}
    </NavLink>
  );
};

export default AnimatedNavLink;
