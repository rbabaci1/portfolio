import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import { diagonal_shape } from "../../images";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <img
        src={diagonal_shape}
        alt="diagonal shape"
        data-aos="fade-right"
        data-aos-duration="500"
      />

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700">
          CONTACT
        </h1>
        <BorderBottom color="white" />
      </div>
    </div>
  );
}
