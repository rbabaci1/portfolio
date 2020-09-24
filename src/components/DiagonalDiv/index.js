import React from "react";

export default function DiagonalDiv({
  fill,
  bgColor,
  anim = "",
  delayAnim = "0",
}) {
  return (
    <div data-aos={anim} data-aos-duration="350" data-aos-delay={delayAnim}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ backgroundColor: bgColor, height: "200px", width: "100%" }}
      >
        <polygon fill={fill} points="0,100 100,0 100,100" />
      </svg>
    </div>
  );
}
