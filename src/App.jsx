import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Header from "./pages/HeaderPage";
import CalendarPage from "./pages/CalendarPage";
import ResizablePanelPage from "./pages/ResizablePanelPage";
import CarouselPage from "./pages/CarouselPage";
import WizardPage from "./pages/WizardPage";
import EmailInboxPage from "./pages/EmailInboxPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/resizable-panel" element={<ResizablePanelPage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/wizard" element={<WizardPage />} />
        <Route path="/email-inbox" element={<EmailInboxPage />} />
      </Routes>
    </div>
  );
}

export default App;
