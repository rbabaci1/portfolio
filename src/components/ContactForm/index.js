import React, { useState, useRef } from "react";
import axios from "axios";

import ErrorHandling from "../ContactError";
import { validations, validateSubmission } from "../../helpers";
import "./contactForm.scss";

export default function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [inputValid, setInputValid] = useState({
    name: true,
    email: true,
    message: true,
    subject: true,
  });
  const refs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
    subject: useRef(null),
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
    let invalidField = validateSubmission(refs);

    if (invalidField) {
      setInputValid({ ...inputValid, [invalidField]: false });
    } else {
      setTimeout(async () => {
        try {
          const res = await axios.post(
            "https://formspree.io/f/moqpjgzba",
            formInfo
          );
          console.log(res);

          setFormInfo({ name: "", email: "", subject: "", message: "" });
          setInputValid({
            name: true,
            email: true,
            subject: true,
            message: true,
          });
        } catch (error) {
          console.error(error);
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Looking to hire a Web Developer or have a question?</span>

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

      <input
        ref={refs.subject}
        value={formInfo.subject}
        onChange={handleChange}
        placeholder="Subject"
        type="text"
        name="subject"
      />
      <ErrorHandling
        fieldName={inputValid.subject}
        text="Subject must be more than 6 characters."
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
  );
}
