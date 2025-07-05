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
} from "./components";
import "./index.css";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {""}
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
        <Experience />
        <Resume />
        <Logo />
      </div>
    </>
  );
};

export default App;
