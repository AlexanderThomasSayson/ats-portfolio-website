import React, { useState } from "react";
import { LoadingScreen } from "./components/loading-screen/LoadingScreen";
import { Navbar } from "./components/navbar/Navbar";
import { MobileMenu } from "./components/navbar/MobileMenu";
import { Home } from "./components/navbar/Home";
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
      </div>
    </>
  );
};

export default App;
