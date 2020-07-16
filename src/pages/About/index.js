import React from "react";

import HexagonCard from "../../components/HexagonCard";
import {
  responsive,
  cuttingEdge,
  dynamic,
  fast,
  react,
  js,
  html,
} from "../../images/index";
import photo from "../../images/me.png";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <h1 data-aos="slide-left" data-aos-duration="600">
        ABOUT
      </h1>

      <div data-aos="fade-right" className="header-border-bottom" />

      <div className="cards">
        <HexagonCard
          title="Responsive"
          description="Sensitive, ticklish layouts that will work on any device, big or small."
          icon={responsive}
        />

        <HexagonCard
          title="Fast"
          description="Fast load times and lag free interaction, are my highest priority."
          icon={fast}
          delay="100"
        />

        <HexagonCard
          title="Cutting edge"
          description="The Modern stage with new styles, techniques applied."
          icon={cuttingEdge}
          delay="200"
        />

        <HexagonCard
          title="Dynamic"
          description="Websites don't have to be static. I love making pages come to life."
          icon={dynamic}
          delay="300"
        />
      </div>

      <div className="bottom-container">
        <div className="about-me-wrapper" data-aos="slide-right">
          <img src={photo} alt="rabah's selfie" />

          <h2>
            Hi! I'm Rabah{" "}
            <span className="wave" role="img" aria-label="waving hand">
              👋
            </span>
          </h2>
          <p>
            I am a Full Stack Web Developer with a particular interest in Front
            End development. My specialties include quickly learning new skills
            and programming languages, problem solving, responsive design
            principles, website optimization.
          </p>
        </div>

        <div className="skills-wrapper">
          <img className="js" src={js} alt="javascript icon" />
          <img className="react" src={react} alt="react icon" />
          <img className="html" src={html} alt="html icon" />
        </div>
      </div>
    </div>
  );
}
