import FeatureCard from "../components/ui/FeatureCard";
import { motion, useIsPresent } from "framer-motion";

const HomePage = () => {
  const isPresent = useIsPresent();

  const features = [
    {
      to: "/header",
      title: "Header",
      description: "Navigation header component with modern design",
    },
    {
      to: "/calendar",
      title: "Calendar",
      description: "Interactive calendar component with smooth animations",
    },
    {
      to: "/resizable-panel",
      title: "Resizable Panel",
      description: "Drag to resize panel with fluid animations",
    },
    {
      to: "/carousel",
      title: "Carousel",
      description: "Image carousel with smooth transitions",
    },
    {
      to: "/wizard",
      title: "Multi-step Wizard",
      description: "Step-by-step form wizard with progress indicators",
    },
    {
      to: "/email-inbox",
      title: "Email Inbox",
      description: "Email interface with interactive elements",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.2,
              color: ["#bfdbfe", "#60a5fa", "#2563eb"],
              textShadow: "0px 2px 8px #60a5fa, 0px 4px 16px #2563eb",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 text-4xl font-bold text-gray-900"
          >
            Welcome to Framer Motion Examples
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-8 text-xl text-gray-600"
          >
            Explore various components built with Framer Motion and React
          </motion.p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard
                key={f.to}
                to={f.to}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
