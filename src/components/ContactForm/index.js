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
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (msg, ok = true) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      }, 1800);

      setFormInfo({ name: "", email: "", subject: "", message: "" });
      setInputValid({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = e => {
    let field = e.target;

    setFormInfo({ ...formInfo, [field.name]: field.value });
    if (validations[field.name](field.value)) {
      setInputValid({ ...inputValid, [field.name]: true });
      refs[field.name].current.style.borderColor = "#171e27";
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let invalidField = validateSubmission(refs);

    if (invalidField) {
      setInputValid({ ...inputValid, [invalidField]: false });
    } else {
      setStatus({
        ...status,
        submitting: true,
        info: { error: false, mes: null },
      });

      setTimeout(async () => {
        try {
          await axios.post("https://formspree.io/f/moqpjgzb", formInfo);

          handleServerResponse("Thank you, your message has been submitted.");
        } catch (error) {
          handleServerResponse(error.response.data.error, false);
          console.error(error);
        }
      }, 1000);
    }
  };

  return (
    <main>
      <span
        data-aos="slide-right"
        data-aos-duration="650"
        data-aos-offset="400"
      >
        Looking to hire a Web Developer or have a question?
      </span>

      <form
        onSubmit={handleSubmit}
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        data-aos-offset="400"
      >
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

        <button disabled={status.submitting || status.submitted}>
          {!status.submitting
            ? !status.submitted
              ? "SUBMIT"
              : "SUBMITTED"
            : "SUBMITTING..."}
        </button>
      </form>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
