import React, { useState, useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import NET from "vanta/dist/vanta.net.min";
import Div100vh from "react-div-100vh";

import "./homePage.scss";

// window.VANTA.NET({
//   el: "#bg-animation",
//   mouseControls: false,
//   touchControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0x42b1c0,
// });
export default function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Div100vh className="home">
      <div className="vanta" ref={myRef}>
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
      </div>
    </Div100vh>
  );
}
