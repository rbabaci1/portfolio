import React from "react";

export default function DiagonalDiv({ fill, backgroundColor, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      data-aos="fade-right"
      data-aos-duration="500"
      style={{ backgroundColor, width, height }}
    >
      <polygon fill={fill} points="0,100 100,0 100,100" />
    </svg>
  );
}
