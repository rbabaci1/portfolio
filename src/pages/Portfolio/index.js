import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import "./portfolio.scss";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const temp = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  const handleClick = () => {
    console.log("Here not affecting margin space!");
  };

  return (
    <div className="projects-container">
      <div className="projects">
        <h1 data-aos="fade-left" data-aos-duration="700">
          PROJECTS
        </h1>
        <BorderBottom />

        <div className="cards">
          {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })}
        </div>
      </div>
    </div>
  );
}
