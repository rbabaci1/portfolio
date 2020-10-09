import React, { useState } from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import "./contact.scss";
import Button from "../../components/Button";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(formInfo);
    e.preventDefault();
    setFormInfo({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <DiagonalDiv fill="#232d38" bgColor="#f2f2f2" />

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700">
          CONTACT
        </h1>
        <BorderBottom color="white" />

        <form onSubmit={handleSubmit}>
          <input
            value={formInfo.name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            name="name"
            required
          />

          <input
            value={formInfo.email}
            onChange={handleChange}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />

          <textarea
            value={formInfo.message}
            onChange={handleChange}
            placeholder="Your Message..."
            type="text"
            name="message"
            required
          />

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
