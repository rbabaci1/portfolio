import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import ProjectCard from "../../components/ProjectCard";
import DiagonalDiv from "../../components/DiagonalDiv";
import "./portfolio.scss";

export default function Projects() {
  const temp = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  const handleClick = () => {
    console.log("Here not affecting margin space!");
  };

  return (
    <div className="projects-container">
      <DiagonalDiv fill="#f5f5f5" bgColor="white" />

      <div className="projects">
        <h1 data-aos="fade-left" data-aos-duration="700">
          PROJECTS
        </h1>
        <BorderBottom />

        <div className="cards">
          <ProjectCard
            id={1}
            onClick={handleClick}
            animation="fade-up"
            duration="500"
            delay="0"
          />
          <ProjectCard
            id={1}
            onClick={handleClick}
            animation="fade-up"
            duration="500"
            delay="300"
          />

          <ProjectCard
            id={1}
            onClick={handleClick}
            animation="fade-up"
            duration="500"
            delay="400"
          />

          <ProjectCard
            id={1}
            onClick={handleClick}
            animation="fade-up"
            duration="500"
            delay="600"
          />
          {/* {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
