import React from "react";

import "./BorderBottom.scss";

export default function Border({ color = "" }) {
  return (
    <div
      data-aos="fade-right"
      className="header-border-bottom"
      data-aos-duration="500"
      style={{ backgroundColor: color }}
    />
  );
}
