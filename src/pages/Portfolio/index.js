import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import "./portfolio.scss";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const handleClick = () => {
    console.log("Here not affecting margin space!");
  };

  return (
    <div className="projects">
      <h1 data-aos="fade-left" data-aos-duration="700">
        PROJECTS
      </h1>

      <BorderBottom />

      <div className="cards">
        <ProjectCard onClick={handleClick} />
      </div>
    </div>
  );
}
