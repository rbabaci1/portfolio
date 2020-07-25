import React from "react";

import HexagonCard from "../../components/HexagonCard";
import * as Img from "../../images/index";
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
          icon={Img.responsive}
        />

        <HexagonCard
          title="Fast"
          description="Fast load times and lag free interaction, are my highest priority."
          icon={Img.fast}
          delay="100"
        />

        <HexagonCard
          title="Cutting edge"
          description="The Modern stage with new styles, techniques applied."
          icon={Img.cuttingEdge}
          delay="200"
        />

        <HexagonCard
          title="Dynamic"
          description="Websites don't have to be static. I love making pages come to life."
          icon={Img.dynamic}
          delay="300"
        />
      </div>

      <div className="bottom-container">
        <div className="about-me-wrapper" data-aos="slide-right">
          <img src={Img.me} alt="rabah's selfie" />

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
          <img className="js" src={Img.js} alt="javascript icon" />
          <img className="react" src={Img.react} alt="react icon" />
          <img className="html" src={Img.html} alt="html icon" />
          <img className="css" src={Img.css} alt="css icon" />
          <img className="sass" src={Img.sass} alt="sass icon" />
          <img className="redux" src={Img.redux} alt="redux icon" />
          <img className="python" src={Img.python} alt="python icon" />
          <img className="nodeJs" src={Img.nodeJs} alt="node js icon" />
          <img className="pg" src={Img.pg} alt="postgreSql icon" />
          <img className="git" src={Img.git} alt="git icon" />
        </div>
      </div>
    </div>
  );
}
