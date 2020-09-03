import React from "react";

import "./projectCard.scss";
import LearnMoreButton from "../LearnMoreButton";

export default function ProjectCard({ id, title, subtitles, onClick }) {
  return (
    <div className="card">
      <div className={`bg-img img_${id}`} />

      <div className="text">
        <h2>The Game Of Life</h2>
        <span>React-JS</span>
      </div>

      <LearnMoreButton className="button" onClick={onClick} />
    </div>
  );
}
