import React, { useEffect } from "react";
import AOS from "aos";

import "./about.scss";
import HexagonCard from "../../components/HexagonCard";
import responsive from "../../images/responsiveIcon.svg";
import fast from "../../images/speedIcon.svg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1400, once: true, delay: 300 });
  }, []);

  return (
    <div className="about">
      <h1 data-aos="fade-up" data-aos-duration="700">
        ABOUT
      </h1>

      <div data-aos="fade-right" className="header-bar" />

      <div className="cards">
        <HexagonCard
          title="Responsive"
          description="My layouts will work on any device, big or small."
          icon={responsive}
        />
        <HexagonCard
          title="Fast"
          description="My layouts will work on any device, big or small."
          icon={fast}
        />
      </div>
    </div>
  );
}
