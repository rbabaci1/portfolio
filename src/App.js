import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.VANTA.GLOBE({
      el: "#bg-animation",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      size: 0.5,
      color: 0xff3f55,
      color2: 0x3bf0e5,
      backgroundColor: 0x111839,
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
