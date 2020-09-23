import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import ProjectCard from "../../components/ProjectCard";
import { diagonal_shape } from "../../images";
import "./portfolio.scss";

export default function Projects() {
  const temp = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  const handleClick = () => {
    console.log("Here not affecting margin space!");
  };

  return (
    <div className="projects-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <polygon fill="#f5f5f5" points="0,100 100,0 100,100" />
      </svg>

      <div className="projects">
        <h1 data-aos="fade-left" data-aos-duration="700">
          PROJECTS
        </h1>
        <BorderBottom />

        <div className="cards">
          <ProjectCard id={1} onClick={handleClick} />
          <ProjectCard id={1} onClick={handleClick} />
          <ProjectCard id={1} onClick={handleClick} />
          <ProjectCard id={1} onClick={handleClick} />
          {/* {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
