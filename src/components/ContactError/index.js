import React from "react";
import Fade from "react-reveal/Fade";

export default function ErrorHandling({ fieldName, text }) {
  return (
    <Fade bottom collapse when={!fieldName} duration={700}>
      <div
        className="invalid-feedback"
        style={{ display: "block", padding: "10px 0 12px 0" }}
      >
        {text}
      </div>
    </Fade>
  );
}
