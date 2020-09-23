import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import { angle } from "../../images";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <img src={angle} alt="diagonol shape" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#141b2b" points="0,100 100,0 100,100" />
      </svg> */}

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700">
          CONTACT
        </h1>
        <BorderBottom />
      </div>
    </div>
  );
}
