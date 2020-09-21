import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import { angle } from "../../images";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="angle-container">
        <img
          src={angle}
          alt="angle"
          data-aos="fade-down"
          data-aos-duration="500"
        />
      </div>

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700">
          CONTACT
        </h1>
        <BorderBottom />
      </div>
    </div>
  );
}
