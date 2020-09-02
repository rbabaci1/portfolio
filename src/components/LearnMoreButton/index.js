import React from "react";

import "./learnMoreButton.scss";

export default function Button() {
  return (
    <div className="button">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>

        <span className="button-text">LEARN MORE</span>
      </button>
    </div>
  );
}
