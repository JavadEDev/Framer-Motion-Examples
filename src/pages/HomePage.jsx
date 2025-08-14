import { NavLink } from "react-router";

const HomePage = () => {
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
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/header" className="hover:text-blue-700">
                  Header
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Navigation header component with modern design
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/calendar" className="hover:text-blue-700">
                  Calendar
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Interactive calendar component with smooth animations
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/resizable-panel" className="hover:text-blue-700">
                  Resizable Panel
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Drag to resize panel with fluid animations
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/carousel" className="hover:text-blue-700">
                  Carousel
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Image carousel with smooth transitions
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/wizard" className="hover:text-blue-700">
                  Multi-step Wizard
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Step-by-step form wizard with progress indicators
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <NavLink to="/email-inbox" className="hover:text-blue-700">
                  Email Inbox
                </NavLink>
              </h3>
              <p className="text-gray-600">
                Email interface with interactive elements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
