import React from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <DiagonalDiv fill="#232d38" bgColor="#f2f2f2" />

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700">
          CONTACT
        </h1>
        <BorderBottom color="white" />

        <div className="form">
          <input placeholder="Name" type="text" name="name" required/>
          <input placeholder="Enter Email" type="email" name="email" required/>
          <textarea placeholder="Your Message..." type="text" name="message" required/>
        </div>

      </div>
    </div>
  );
}
