import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageLoader from "./components/layout/PageLoader";
import ScrollProgress from "./components/layout/ScrollProgress";

function App() {
  const location = useLocation();

  // Visitor counter logic
  useEffect(() => {
    const count = Number(localStorage.getItem("visits") || 0) + 1;
    localStorage.setItem("visits", count.toString());
  }, []);

  return (
    <ThemeProvider>
        <ScrollProgress />
       <ScrollToTop />
      <Navbar />
      <PageLoader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default App;