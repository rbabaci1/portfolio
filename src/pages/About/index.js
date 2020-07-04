import React, { useEffect } from "react";
import AOS from "aos";

import HexagonCard from "../../components/HexagonCard";
import responsive from "../../images/responsiveIcon.svg";
import cuttingEdge from "../../images/cuttingEdgeIcon.svg";
import dynamic from "../../images/dynamicIcon.svg";
import fast from "../../images/speedIcon.svg";
import "./about.scss";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, delay: 200 });
  }, []);

  return (
    <div className="about">
      <h1 data-aos="fade-up" data-aos-duration="500">
        ABOUT
      </h1>

      <div data-aos="fade-right" className="header-bar" />

      <div className="cards">
        <HexagonCard
          title="Responsive"
          description="Sensitive, ticklish layouts that will work on any device, big or small."
          icon={responsive}
        />

        <HexagonCard
          title="Fast"
          description="Fast load times and lag free interaction, my highest priority."
          icon={fast}
        />

        <HexagonCard
          title="Cutting edge"
          description="The Modern stage with new styles, techniques applied."
          icon={cuttingEdge}
        />

        <HexagonCard
          title="Dynamic"
          description="Websites don't have to be static, I love making pages come to life."
          icon={dynamic}
        />
      </div>
    </div>
  );
}
