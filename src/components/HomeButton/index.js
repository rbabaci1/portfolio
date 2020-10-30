import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../Button";

export default function HomeButton() {
  useEffect(() => {
    let effect;

    setTimeout(() => {
      effect = window.VANTA.NET({
        el: "#bg-animation",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 0.7,
        backgroundColor: "#220a11",
        color: "#04c2c9",
      });
    }, 400);

    return () => effect.destroy();
  }, []);

  return (
    <Link
      to="about"
      smooth={true}
      duration={400}
      data-aos="fade-up"
      data-aos-duration="500"
      offset={10}
    >
      <Button text="View my work" />
    </Link>
  );
}
