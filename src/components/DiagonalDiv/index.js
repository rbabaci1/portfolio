import React from "react";

import "./diagonalDiv.scss";

export default function DiagonalDiv({ fill, bgColor }) {
  return (
    <div className="diagonal-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ background: bgColor }}
      >
        <polygon points="0,100 100,0 100,100" fill={fill} />
      </svg>
    </div>
  );
}
