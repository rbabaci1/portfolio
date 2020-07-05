import React from "react";

import HexagonCard from "../../components/HexagonCard";
import { responsive, cuttingEdge, dynamic, fast } from "../../images/index";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <h1 data-aos="slide-left" data-aos-duration="600">
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
          delay="150"
        />

        <HexagonCard
          title="Cutting edge"
          description="The Modern stage with new styles, techniques applied."
          icon={cuttingEdge}
          delay="300"
        />

        <HexagonCard
          title="Dynamic"
          description="Websites don't have to be static, I love making pages come to life."
          icon={dynamic}
          delay="450"
        />
      </div>
    </div>
  );
}
