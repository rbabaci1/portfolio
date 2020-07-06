import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Div100vh from "react-div-100vh";
import Typist from "react-typist";

import "./homePage.scss";

export default function App() {
  const [renderImg, setRenderImg] = useState(false);
  const [renderBtn, setRenderBtn] = useState(false);

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
      <Div100vh id="bg-animation" />

      <div className="heading">
        <Typist
          cursor={{ show: false }}
          startDelay={600}
          avgTypingDelay={65}
          onTypingDone={() => setRenderImg(true)}
        >
          <h1>
            Hello, I'm <span>Rabah Babaci</span>.
          </h1>
        </Typist>

        {renderImg && (
          <img
            src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png"
            alt="styles border bottom"
            data-aos="fade-left"
          />
        )}

        <Typist
          cursor={{ show: false }}
          onTypingDone={() => setRenderBtn(true)}
          avgTypingDelay={65}
        >
          <Typist.Delay ms={3000} />

          <h1>
            I'm a Full-Stick Web Developer.
            <Typist.Backspace count={18} delay={500} />
            <Typist.Delay ms={200} />
            ack Web Developer.
          </h1>
          <Typist.Delay ms={200} />
        </Typist>

        {renderBtn && (
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-55}
            data-aos="fade-right"
          >
            <button>View my work{<BsArrowRight />}</button>
          </Link>
        )}
      </div>
    </div>
  );
}
