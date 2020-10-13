import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import BorderBottom from "../../components/HeaderBottomBorder";
import DiagonalDiv from "../../components/DiagonalDiv";
import ContactForm from "../../components/ContactForm";

import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <DiagonalDiv fill="#232d38" bgColor="#f2f2f2" />

      <div className="contact">
        <h1 data-aos="fade-left" data-aos-duration="700" data-aos-offset="500">
          CONTACT
        </h1>
        <BorderBottom color="white" offset="500" />

        <ContactForm />
      </div>

      <div className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/rbabaci1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/babaci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>

          <a
            href="https://www.facebook.com/rabah.babaci.948"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://twitter.com/RabahBabaci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="copyright">
          Rabah Babaci<span> &copy;2020</span>
        </div>
      </div>
    </div>
  );
}
