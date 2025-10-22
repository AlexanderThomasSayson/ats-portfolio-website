import React, { useState } from "react";
import {
  Navbar,
  MobileMenu,
  Home,
  About,
  Logo,
  Techstacks,
  Experience,
  Resume,
  ProductShowcase,
  Contact,
} from "./components";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToHashElement } from "./components/scroll/ScrollToHashElement";

const MainPage = ({ menuOpen, setMenuOpen }) => (
  <div className="min-h-screen bg-black text-gray-100">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home />
    <Logo />
    <About />
    <Techstacks />
    <ProductShowcase />
    <Experience />
    <Resume />
    <Logo />
  </div>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route
          path="/"
          element={<MainPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
