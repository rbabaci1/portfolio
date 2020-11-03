import React from "react";

import HexagonCard from "../../components/HexagonCard";
import BorderBottom from "../../components/HeaderBottomBorder";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <h1 data-aos="fade-left" data-aos-duration="700">
        ABOUT
      </h1>

      <BorderBottom />

      <div className="cards">
        <HexagonCard
          title="Responsive"
          description="Sensitive, ticklish layouts that will work on any device, big or small."
          icon={require("../../images/responsiveIcon.svg").default}
          delay="0"
        />

        <HexagonCard
          title="Fast"
          description="Fast load times and lag free interaction, are my highest priority."
          icon={require("../../images/speedIcon.svg").default}
          delay="100"
        />

        <HexagonCard
          title="Cutting edge"
          description="The Modern stage with new styles, techniques applied."
          icon={require("../../images/cuttingEdgeIcon.svg").default}
          delay="200"
        />

        <HexagonCard
          title="Dynamic"
          description="Websites don't have to be static. I love making pages come to life."
          icon={require("../../images/dynamicIcon.svg").default}
          delay="300"
        />
      </div>

      <div className="bottom-container">
        <div className="about-me-wrapper">
          <img
            src={require("../../images/me.png").default}
            alt="rabah's selfie"
            data-aos="fade-up"
            data-aos-duration="400"
          />

          <h2 data-aos="fade-up" data-aos-duration="500">
            Hi! I'm Rabah{" "}
            <span className="wave" role="img" aria-label="waving hand">
              👋
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-duration="600">
            A software engineer with a particular interest in Front End Web
            Development, who focuses on writing clean, elegant and efficient
            code. My specialties include quickly learning new skills and
            programming languages, problem solving, responsive design
            principles, website optimization and Model View Controller (MVC)
            methods of organizing code.
          </p>
        </div>

        <div className="skills-wrapper">
          <h1>SKILLS</h1>

          <img
            className="js"
            src={require("../../images/js.svg").default}
            alt="javascript icon"
          />
          <img
            className="react"
            src={require("../../images/react.svg").default}
            alt="react icon"
          />
          <img
            className="html"
            src={require("../../images/html.svg").default}
            alt="html icon"
          />
          <img
            className="css"
            src={require("../../images/css.svg").default}
            alt="css icon"
          />
          <img
            className="sass"
            src={require("../../images/sass.svg").default}
            alt="sass icon"
          />
          <img
            className="redux"
            src={require("../../images/redux.svg").default}
            alt="redux icon"
          />
          <img
            className="python"
            src={require("../../images/python.svg").default}
            alt="python icon"
          />
          <img
            className="nodeJs"
            src={require("../../images/nodeJs.svg").default}
            alt="node js icon"
          />
          <img
            className="pg"
            src={require("../../images/pg.svg").default}
            alt="postgreSql icon"
          />
          <img
            className="git"
            src={require("../../images/git.svg").default}
            alt="git icon"
          />
          <img
            className="github"
            src={require("../../images/gitHub.svg").default}
            alt="gitHub icon"
          />
        </div>
      </div>
    </div>
  );
}
