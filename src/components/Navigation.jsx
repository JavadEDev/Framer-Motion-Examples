import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedNavLink from "./ui/AnimatedNavLink";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-lg font-semibold text-gray-800">
              Framer Motion
            </div>
          </div>

          <div className="hidden md:flex md:space-x-8">
            <AnimatedNavLink to="/">Home</AnimatedNavLink>
            <AnimatedNavLink to="/header">Header</AnimatedNavLink>
            <AnimatedNavLink to="/calendar">Calendar</AnimatedNavLink>
            <AnimatedNavLink to="/resizable-panel">
              Resizable Panel
            </AnimatedNavLink>
            <AnimatedNavLink to="/carousel">Carousel</AnimatedNavLink>
            <AnimatedNavLink to="/wizard">Multi-step Wizard</AnimatedNavLink>
            <AnimatedNavLink to="/email-inbox">Email Inbox</AnimatedNavLink>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none md:hidden"
          >
            <div className="relative h-5 w-6">
              <motion.span
                className="absolute top-0 left-0 block h-0.5 w-6 rounded bg-gray-800"
                animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                style={{ originX: 0.15, originY: 0.5 }}
              />
              <motion.span
                className="absolute top-2 left-0 block h-0.5 w-6 rounded bg-gray-800"
                animate={isOpen ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute top-4 left-0 block h-0.5 w-6 rounded bg-gray-800"
                animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                style={{ originX: 0.15, originY: 0.5 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="border-t bg-white shadow-inner md:hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="space-y-1 px-4 py-3"
            >
              <div className="py-1">
                <AnimatedNavLink to="/">Home</AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/header">Header</AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/calendar">Calendar</AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/resizable-panel">
                  Resizable Panel
                </AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/carousel">Carousel</AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/wizard">
                  Multi-step Wizard
                </AnimatedNavLink>
              </div>
              <div className="py-1">
                <AnimatedNavLink to="/email-inbox">Email Inbox</AnimatedNavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
