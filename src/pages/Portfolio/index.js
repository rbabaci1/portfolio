import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import ProjectCard from "../../components/ProjectCard";
import DiagonalDiv from "../../components/DiagonalDiv";
import projectsData from "../../projectsData/data.json";

import "./portfolio.scss";

export default function Projects() {
  return (
    <div className="projects-container">
      <DiagonalDiv fill="#f2f2f2" bgColor="#fff" />

      <div className="projects">
        <h1>PROJECTS</h1>
        <BorderBottom />

        <div className="cards">
          {projectsData.map(project => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
