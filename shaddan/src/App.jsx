import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Qualitypolicy from "./Pages/Qualitypolicy";
import Contact from "./Pages/Contact";
import FactoryTour from "./Pages/Fatorytour";
import CSR from "./Pages/CSR";
import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualitypolicy" element={<Qualitypolicy />} />
            <Route path="/factorytour" element={<FactoryTour />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/csr" element={<CSR />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
