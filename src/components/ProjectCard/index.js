import React from "react";

import LearnMoreButton from "../LearnMoreButton";
import "./projectCard.scss";
import macBook from "../../images/macbook.jpeg";

export default function ProjectCard({ id, title, subtitles, onClick }) {
  return (
    <div className="card">
      <img src={macBook} alt="macBook" />

      <div className="inner-bg">
        <div className={`bg-img img_${id}`} />

        <div className="text">
          <h2>The Game Of Life</h2>
          <span>React-JS</span>
        </div>

        <LearnMoreButton className="button" onClick={onClick} />
      </div>
    </div>
  );
}

{
  /* <div className="card">
  <div className="inner-screen">
    <div className={`bg-img img_${id}`} />

    <div className="text">
      <h2>The Game Of Life</h2>
      <span>React-JS</span>
    </div>

    <LearnMoreButton className="button" onClick={onClick} />
  </div>{" "}
</div> */
}
