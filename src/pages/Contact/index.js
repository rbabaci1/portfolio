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
          <a href="#1">
            <AiOutlineGithub />
          </a>
          <a href="#1">
            <GrLinkedinOption />
          </a>
          <a href="#1">
            <FaFacebookF />
          </a>
          <a href="#1">
            <FaTwitter />
          </a>
        </div>

        <div className="copyright">
          RABAH BABACI<span> &copy;2020</span>
        </div>
      </div>
    </div>
  );
}
