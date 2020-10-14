import React from "react";
import { Modal } from "react-responsive-modal";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";

import "react-responsive-modal/styles.css";
import "./projectModal.scss";
import Carousel from "../ProjectCarousel";

export default function ProjectModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      center
      // classNames={{
      //   overlay: "customOverlay",
      //   modal: "customModal",
      // }}
      styles={{
        modal: {
          animation: `${
            props.open ? "customEnterAnimation" : "customLeaveAnimation"
          } 500ms`,
        },
      }}
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
