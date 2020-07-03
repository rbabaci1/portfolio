import React from "react";

import "./about.scss";

export default function About() {
  React.useEffect(() => {
    gsap.to(".header-bar", {
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <div className="about">
      <h1>ABOUT</h1>
      <div className="header-bar" />
      <div className="octagon"></div>
    </div>
  );
}
