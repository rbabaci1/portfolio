import React from "react";

import "./OctagonCard.scss";

export default function OctagonCard({ title, description, icon }) {
  return (
    <div className="octagon-wrapper">
      <div className="octagon" />
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={icon} alt="svg icon" />
    </div>
  );
}
