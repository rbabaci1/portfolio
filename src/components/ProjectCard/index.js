import React, { useState } from "react";

import Button from "../Button";
import macBook from "../../images/macbook.png";
import ProjectModal from "../ProjectModal";

import "./projectCard.scss";

export default function ProjectCard({ id, title, subtitles, onClick, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={delay}
    >
      <img src={macBook} className="macBook" alt="macBook" />

      <div className="inner-container">
        <div className={`bg-img img_${id}`} />

        <div className="text">
          <h2>The Game Of Life</h2>
          <span>React-JS</span>
        </div>

        <Button
          className="button"
          text="LEARN MORE"
          onClick={() => setOpen(true)}
        />
      </div>

      <ProjectModal open={open} setOpen={setOpen} />
    </div>
  );
}
