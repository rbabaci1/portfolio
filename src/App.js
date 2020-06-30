import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function App() {
  useEffect(() => {
    window.VANTA.NET({
      el: "#bg-animation",
      mouseControls: false,
      touchControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x42cfed,
      backgroundColor: 0x0f0e1d,
    });
  }, []);

  return (
    <div className="App">
      <div id="bg-animation" />

      <div className="heading">
        <h1>
          Hello, I'm <span>Rabah Babaci</span>.
          <br />
          I'm a Full-Stack Web Developer.
        </h1>

        <button>View my work{<BsArrowRight size={35} />}</button>
      </div>
    </div>
  );
}
