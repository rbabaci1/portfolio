import React, { useState, useEffect } from "react";
import AOS from "aos";
import ContentLoader from "react-content-loader";

import Home from "./pages/Home/index";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  const [loadSkeleton, setLoadSkeleton] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, delay: 200 });
    setLoadSkeleton(false);
  }, []);

  return (
    <>
      {loadSkeleton ? (
        <ContentLoader
          width="100%"
          height="100%"
          viewBox="0 0 400 160"
          backgroundColor="#e7e5e5"
          foregroundColor="#d1cfcf"
        >
          <circle cx="10" cy="10" r="5" />
          <rect x="150" y="83" rx="3" ry="3" width="100" height="6" />
          <rect x="125" y="98" rx="3" ry="3" width="150" height="6" />
          <rect x="170" y="113" rx="10" ry="10" width="60" height="14" />
        </ContentLoader>
      ) : (
        <div className="App">
          <Home />
          <NavBar />
          <About />
          <Portfolio />
          <Contact />
        </div>
      )}
    </>
  );
}
