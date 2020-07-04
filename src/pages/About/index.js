import React, { useRef, useEffect } from "react";
import AOS from "aos";

import "./about.scss";

export default function About() {
  const headerBar = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true, delay: 500 });
  }, []);

  return (
    <div className="about">
      <h1 data-aos="zoom-in-up" data-aos-duration="800">
        ABOUT
      </h1>

      <div data-aos="fade-right" className="header-bar" data-aos-offset="300" />

      <div className="octagon" ref={headerBar}></div>
    </div>
  );
}
