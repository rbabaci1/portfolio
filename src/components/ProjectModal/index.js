import React from "react";
import { Modal } from "react-responsive-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import {
  FaGithubAlt,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import Swiper from "react-id-swiper";

import "react-responsive-modal/styles.css";
import "./projectModal.scss";
import "swiper/swiper.scss";

export default function ProjectModal(props) {
  const params = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const ref = React.useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      center
      classNames={{
        animationIn: "customEnterAnimation",
        animationOut: "customLeaveAnimation",
      }}
      animationDuration={500}
      closeIcon={<AiFillCloseCircle />}
    >
      <div className="carousel">
        <Swiper {...params} ref={ref}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project landing page"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1602536021806-942116f6f56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project landing page"
            />
          </div>
        </Swiper>

        <FaArrowAltCircleLeft onClick={goPrev} className="prev-btn" />
        <FaArrowAltCircleRight onClick={goNext} className="next-btn" />
      </div>

      <div className="details">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
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
