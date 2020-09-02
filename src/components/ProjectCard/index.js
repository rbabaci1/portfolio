import React from "react";

import "./projectCard.scss";
import LearnMoreButton from "../LearnMoreButton";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="bg-img" />

      <div className="text">
        <h2>The Game Of Life</h2>
        <span>React-JS</span>
      </div>

      <LearnMoreButton className="button" />
    </div>
  );
}
