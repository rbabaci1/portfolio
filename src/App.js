import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.VANTA.NET({
      el: "#bg-animation",
      mouseControls: false,
      touchControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x2f9baa,
    });

    setLoaded(true);
  }, []);

  return (
    <div className="App">
      <div id="bg-animation" />

      {loaded && (
        <div className="heading">
          <h1>
            Hello, I'm <span>Rabah Babaci</span>.
            <br />
            I'm a Full-Stack Web Developer.
          </h1>

          <button>View my work{<BsArrowRight size={35} />}</button>
        </div>
      )}
    </div>
  );
}
