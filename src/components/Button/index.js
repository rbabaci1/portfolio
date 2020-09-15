import React from "react";

import "./button.scss";

export default function Button({ text, onClick }) {
  return (
    <div className="button">
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>

        <span className="button-text">{text}</span>
      </button>
    </div>
  );
}
