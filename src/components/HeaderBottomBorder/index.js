import React from "react";

import "./BorderBottom.scss";

export default function Border({ color = "", offset = "0" }) {
  return (
    <div
      data-aos="fade-right"
      className="header-border-bottom"
      data-aos-duration="500"
      data-aos-offset={offset}
      style={{ backgroundColor: color }}
    />
  );
}
