import React, { useState } from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import ErrorHandling from "../../components/ContactError";
import { validations } from "../../helpers";
import "./contact.scss";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputValid, setInputValid] = useState({
    name: true,
    email: true,
    message: true,
  });

  const handleChange = e => {
    let field = e.target;

    setFormInfo({ ...formInfo, [field.name]: field.value });
    if (validations[field.name](field.value)) {
      setInputValid({ ...inputValid, [field.name]: true });
    }
  };

  const validateForm = e => {
    let field = e.target;

    setInputValid({
      ...inputValid,
      [field.name]: validations[field.name](field.value),
    });
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
            onBlur={validateForm}
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <ErrorHandling
            fieldName={inputValid.name}
            text="Name must be more than 3 characters"
          />

          <input
            value={formInfo.email}
            onChange={handleChange}
            onBlur={validateForm}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          <ErrorHandling
            fieldName={inputValid.email}
            text="Please enter a valid email address"
          />

          <textarea
            value={formInfo.message}
            onChange={handleChange}
            onBlur={validateForm}
            placeholder="Your Message..."
            type="text"
            name="message"
            required
          />
          <ErrorHandling
            fieldName={inputValid.message}
            text="Message must be more than 6 characters"
          />

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
