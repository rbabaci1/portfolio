import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Div100vh from "react-div-100vh";
import Typist from "react-typist";

import "./homePage.scss";

export default function App() {
  const renderCanvas = () => {
    window.VANTA.NET({
      el: "#bg-animation",
      mouseControls: false,
      touchControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.7,
      backgroundColor: 0xe1e3c,
      color: 0x42b1c0,
    });
  };

  // useEffect(() => {
  //   return () => effect.destroy();
  // }, []);

  return (
    <div className="home">
      <Div100vh data-aos="slide-right" id="bg-animation" />

      <div className="heading">
        <Typist
          cursor={{ show: false }}
          startDelay={800}
          avgTypingDelay={60}
          onTypingDone={() => {
            document.getElementById("border-img").style = {
              opacity: 1,
            };
          }}
        >
          <h1>
            Hello, I'm <span>Rabah Babaci</span>.
          </h1>
        </Typist>

        <img
          src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png"
          alt="bottom underline"
          id="border-img"
          style={{ opacity: 0 }}
        />

        <Typist
          cursor={{ show: false }}
          onTypingDone={() => {
            document.getElementById("view-work-btn").style = {
              visibility: "visible",
            };

            renderCanvas();
          }}
          avgTypingDelay={60}
        >
          <Typist.Delay ms={2500} />

          <h1>
            I'm a Full-Stack West Coast Developer.
            <Typist.Backspace count={19} delay={500} />
            <Typist.Delay ms={200} />b Developer.
          </h1>
          <Typist.Delay ms={200} />
        </Typist>

        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-55}
          id="view-work-btn"
          style={{ visibility: "hidden" }}
        >
          <button>View my work{<BsArrowRight />}</button>
        </Link>
      </div>
    </div>
  );
}
