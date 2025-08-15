import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
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
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Welcome to Framer Motion Examples
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Explore various components built with Framer Motion and React
          </p>
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
