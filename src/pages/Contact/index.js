import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import ResumeIcon from "./resumeIcon";
import Tooltip from "@material-ui/core/Tooltip";

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
            href="https://twitter.com/RabahBabaci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <Tooltip title="RESUME">
            <a
              href="https://www.canva.com/design/DAD3k3gLODQ/5pN5cTUQRN2pW5NNokVQRg/view?utm_content=DAD3k3gLODQ&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
            </a>
          </Tooltip>
        </div>

        <div className="copyright">
          Rabah Babaci<span> &copy;2020</span>
        </div>
      </div>
    </div>
  );
}
