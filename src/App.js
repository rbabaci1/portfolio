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
      scaleMobile: 1.0,
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
