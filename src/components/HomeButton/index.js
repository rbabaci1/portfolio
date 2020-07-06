import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

export default function HomeButton() {
  //   useEffect(() => {
  //     let effect;

  //     setTimeout(() => {
  //       effect = window.VANTA.NET({
  //         el: "#bg-animation",
  //         mouseControls: false,
  //         touchControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 0.7,
  //         backgroundColor: 0xe1e3c,
  //         color: 0x42b1c0,
  //       });
  //     }, 650);

  //     return () => effect.destroy();
  //   }, []);

  return (
    <Link
      to="about"
      smooth={true}
      duration={600}
      offset={-55}
      data-aos="fade-right"
    >
      <button>View my work{<BsArrowRight />}</button>
    </Link>
  );
}
