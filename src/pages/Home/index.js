import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Div100vh from "react-div-100vh";

import "./homePage.scss";

export default function App() {
  useEffect(() => {
    const effect = window.VANTA.NET({
      el: "#bg-animation",
      mouseControls: false,
      touchControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.7,
      backgroundColor: 0xe1e3c,
    });

    return () => effect.destroy();
  }, []);

  return (
    <div className="home">
      <Div100vh id="bg-animation" />

      <div className="heading">
        <h1>
          Hello, I'm <span>Rabah Babaci</span>.
        </h1>

        <img
          src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png"
          alt="bottom underline"
        />

        <h1>I'm a Full-Stack Web Developer.</h1>

        <Link to="about" smooth={true} duration={700} offset={-55}>
          <button>View my work{<BsArrowRight />}</button>
        </Link>
      </div>
      {/* {loaded && (
      )} */}
    </div>
  );
}
