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
      <DiagonalDiv />

      <div className="projects">
        <h1>PROJECTS</h1>
        <BorderBottom />

        <div className="cards">
          <ProjectCard
            id={1}
            onClick={handleClick}
            delay="0"
            title="Game Of Life"
            subtitle="Hello World!"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam."
            gitHub="google.com"
            liveSite="facebook.com"
            img="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
          />
          {/* <ProjectCard id={1} onClick={handleClick} delay="200" />
          <ProjectCard id={1} onClick={handleClick} delay="350" />
          <ProjectCard id={1} onClick={handleClick} delay="500" />
          <ProjectCard id={1} onClick={handleClick} delay="650" />
          <ProjectCard id={1} onClick={handleClick} delay="800" /> */}

          {/* {temp.map(i => {
            return <ProjectCard key={i} id={i} onClick={handleClick} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
