import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import ProjectCard from "../../components/ProjectCard";
import DiagonalDiv from "../../components/DiagonalDiv";
import "./portfolio.scss";

export default function Projects() {
  const handleClick = () => {
    console.log("Here not affecting margin space!");
  };

  return (
    <div className="projects-container">
      <DiagonalDiv fill="#f2f2f2" bgColor="white" anim="slide-right" />

      <div className="projects">
        <h1>PROJECTS</h1>
        <BorderBottom />

        <div className="cards">
          <ProjectCard id={1} onClick={handleClick} delay="0" />
          <ProjectCard id={1} onClick={handleClick} delay="300" />
          <ProjectCard id={1} onClick={handleClick} delay="450" />
          <ProjectCard id={1} onClick={handleClick} delay="600" />
          <ProjectCard id={1} onClick={handleClick} delay="750" />
          <ProjectCard id={1} onClick={handleClick} delay="900" />

          {/* {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
