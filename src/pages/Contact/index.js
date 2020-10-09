import React, { useState, useRef } from "react";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import ErrorHandling from "../../components/ContactError";
import { validations, validateSubmission } from "../../helpers";
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

  const refs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const handleChange = e => {
    let field = e.target;

    setFormInfo({ ...formInfo, [field.name]: field.value });
    if (validations[field.name](field.value)) {
      setInputValid({ ...inputValid, [field.name]: true });
      refs[field.name].current.style.borderColor = "#171e27";
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let invalidField = validateSubmission(refs.name, refs.email, refs.message);

    if (invalidField) {
      setInputValid({ ...inputValid, [invalidField]: false });
    } else {
      setFormInfo({ name: "", email: "", message: "" });
      setInputValid({ name: true, email: true, message: true });
    }
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
            ref={refs.name}
            value={formInfo.name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            name="name"
          />
          <ErrorHandling
            fieldName={inputValid.name}
            text="Name must be more than 3 characters."
          />

          <input
            ref={refs.email}
            value={formInfo.email}
            onChange={handleChange}
            placeholder="Email"
            type="text"
            name="email"
          />
          <ErrorHandling
            fieldName={inputValid.email}
            text="Please enter a valid email address."
          />

          <textarea
            ref={refs.message}
            value={formInfo.message}
            onChange={handleChange}
            placeholder="Your Message..."
            type="text"
            name="message"
          />
          <ErrorHandling
            fieldName={inputValid.message}
            text="Message must be more than 6 characters."
          />

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
