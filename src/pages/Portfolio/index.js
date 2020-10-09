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
      <DiagonalDiv fill="#f2f2f2" bgColor="white"/>

      <div className="projects">
        <h1>PROJECTS</h1>
        <BorderBottom />

        <div className="cards">
          <ProjectCard id={1} onClick={handleClick} delay="0" />
          <ProjectCard id={1} onClick={handleClick} delay="250" />
          <ProjectCard id={1} onClick={handleClick} delay="400" />
          <ProjectCard id={1} onClick={handleClick} delay="550" />
          <ProjectCard id={1} onClick={handleClick} delay="700" />
          <ProjectCard id={1} onClick={handleClick} delay="850" />

          {/* {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
