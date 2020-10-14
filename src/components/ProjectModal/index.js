import React from "react";
import { Modal } from "react-responsive-modal";
import { AiFillCloseCircle } from "react-icons/ai";
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
      classNames={{
        animationIn: "customEnterAnimation",
        animationOut: "customLeaveAnimation",
        overlay: "customOverlay",
        modal: "customModal",
      }}
      // closeIcon="X"
    >
      <Carousel images={props.images} />

      <div className="details">
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>

        <div className="links">
          <a href={props.liveSite}>
            <BiLinkExternal />
            View Site
          </a>
          <a href={props.gitHub}>
            <FaGithubAlt />
            View Code
          </a>
        </div>
      </div>
    </Modal>
  );
}