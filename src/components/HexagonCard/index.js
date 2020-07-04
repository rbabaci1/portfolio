import React from "react";

import "./hexagonCard.scss";

export default function OctagonCard({ title, description, icon }) {
  return (
    <div
      className="hexagon-wrapper"
      data-aos="flip-up"
      data-aos-duration="1400"
    >
      <div className="hexagon">
        <img src={icon} alt="svg icon" />
      </div>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
