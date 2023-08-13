import React, { useEffect } from "react";
import AOS from "aos";

import Home from "./pages/Home/index";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    // initialze 3D animation
    AOS.init({ duration: 1200, once: true, delay: 200 });
  }, []);

  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
