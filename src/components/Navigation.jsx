import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="border-b bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/header"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Header
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Calendar
            </NavLink>
            <NavLink
              to="/resizable-panel"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Resizable Panel
            </NavLink>
            <NavLink
              to="/carousel"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Carousel
            </NavLink>
            <NavLink
              to="/wizard"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Multi-step Wizard
            </NavLink>
            <NavLink
              to="/email-inbox"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Email Inbox
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
