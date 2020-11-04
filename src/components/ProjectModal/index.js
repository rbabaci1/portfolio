import React from "react";
import { Modal } from "react-responsive-modal";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";

import Carousel from "../ProjectCarousel";
import "react-responsive-modal/styles.css";
import "./projectModal.scss";

export default function ProjectModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      center
      classNames={{
        animationIn: "customEnterAnimation",
        animationOut: "customLeaveAnimation",
      }}
      animationDuration={400}
    >
      <Carousel images={props.images} />

      <div className="details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <div className="links">
          <a href={props.liveSiteUrl} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal />
            View Site
          </a>
          <a href={props.gitHubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithubAlt />
            View Code
          </a>
        </div>
      </div>
    </Modal>
  );
}
