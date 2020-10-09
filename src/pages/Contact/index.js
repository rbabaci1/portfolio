import React, { useState } from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import "./contact.scss";
import ErrorHandling from "../../components/ContactError";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validateForm, setValidateForm] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = e => {
    let field = e.target;
    setFormInfo({ ...formInfo, [field.name]: field.value });

    field.name === "name"
      ? setValidateForm({ name: field.value.length < 4 })
      : field.name === "email"
      ? setValidateForm({ email: field.value.length < 4 })
      : setValidateForm({ message: field.value.length < 7 });
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
          <ErrorHandling
            fieldName={validateForm.name}
            text="Name must be more than 3 characters"
          />

          <input
            value={formInfo.email}
            onChange={handleChange}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          <ErrorHandling
            fieldName={validateForm.email}
            text="Please enter a valid email address"
          />

          <textarea
            value={formInfo.message}
            onChange={handleChange}
            placeholder="Your Message..."
            type="text"
            name="message"
            required
          />
          <ErrorHandling
            fieldName={validateForm.message}
            text="Message must be more than 6 characters"
          />

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
