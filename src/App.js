import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.VANTA.NET({
      el: "#bg-animation",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 2.0,
      color: 0xffaf3f,
      backgroundColor: 0x0f0e1d,
    });
  }, []);

  return (
    <div className="App">
      <div id="bg-animation">
        <h1 id="test">Work in progress...</h1>
      </div>
    </div>
  );
}
