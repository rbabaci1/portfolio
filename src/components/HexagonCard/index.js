import React from "react";

import "./hexagonCard.scss";

export default function OctagonCard({
  title,
  description,
  icon,
  animation,
  delay,
  duration,
}) {
  return (
    <div
      className="hexagon-wrapper"
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration="750"
    >
      <div className="hexagon">
        <img src={icon} alt="svg icon" />
      </div>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
