import React from "react";

import Button from "../Button";
import "./projectCard.scss";
import macBook from "../../images/macbook.png";

export default function ProjectCard({ id, title, subtitles, onClick }) {
  return (
    <div className="card">
      <img src={macBook} className="macBook" alt="macBook" />

      <div className="inner-container">
        <div className={`bg-img img_${id}`} />

        <div className="text">
          <h2>The Game Of Life</h2>
          <span>React-JS</span>
        </div>

        <Button className="button" text="LEARN MORE" onClick={onClick} />
      </div>
    </div>
  );
}
