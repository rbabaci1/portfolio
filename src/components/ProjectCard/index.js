import React from "react";

import "./projectCard.scss";
import Button from "../LearnMoreButton";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="border-top" />
      <div className="bg-img" />

      <div className="text">
        <h2>The Game Of Life</h2>
        <span>React-JS</span>
      </div>

      <Button className="button" />

      {/* <div className="button">LEARN MORE</div> */}
    </div>
  );
}
