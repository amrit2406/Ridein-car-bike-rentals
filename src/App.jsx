// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Service";
import VehiclePage from "./pages/VehicleP";
import ContactPage from "./pages/Contact";
import BookingPage from "./pages/Booking";
import ServiceDetailPage from "./components/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndConditions from "./pages/TnS";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/vehicles" element={<VehiclePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              {/* Add more routes as needed */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
