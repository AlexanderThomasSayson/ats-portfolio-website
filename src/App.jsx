import React, { useState } from "react";
import {
  LoadingScreen,
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
import { ScrollToHashElement } from "./components/scroll/ScrollToHashElement"; // ✅ import it

const MainPage = ({ isLoaded, setIsLoaded, menuOpen, setMenuOpen }) => (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
    >
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
  </>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToHashElement /> {/* ✅ handles smooth scroll for hashes */}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          }
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
