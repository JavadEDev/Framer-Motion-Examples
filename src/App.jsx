import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Header from "./pages/HeaderPage";
import CalendarPage from "./pages/CalendarPage";
import ResizablePanelPage from "./pages/ResizablePanelPage";
import CarouselPage from "./pages/CarouselPage";
import WizardPage from "./pages/WizardPage";
import EmailInboxPage from "./pages/EmailInboxPage";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/ui/PageTransition";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/header"
            element={
              <PageTransition>
                <Header />
              </PageTransition>
            }
          />
          <Route
            path="/calendar"
            element={
              <PageTransition>
                <CalendarPage />
              </PageTransition>
            }
          />
          <Route
            path="/resizable-panel"
            element={
              <PageTransition>
                <ResizablePanelPage />
              </PageTransition>
            }
          />
          <Route
            path="/carousel"
            element={
              <PageTransition>
                <CarouselPage />
              </PageTransition>
            }
          />
          <Route
            path="/wizard"
            element={
              <PageTransition>
                <WizardPage />
              </PageTransition>
            }
          />
          <Route path="/email-inbox" element={<EmailInboxPage />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
