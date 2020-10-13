import React, { useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Swiper from "react-id-swiper";

import "swiper/swiper.scss";
import "./carousel.scss";

export default function Carousel({ images }) {
  const ref = useRef(null);
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
    <div className="carousel">
      <Swiper {...params} ref={ref}>
        {images.map(img => (
          <div>
            <img
              src={require(`../../images/${img}.jpg`)}
              alt="project landing page"
            />
          </div>
        ))}
      </Swiper>

      <FaArrowAltCircleLeft onClick={goPrev} className="prev-btn" />
      <FaArrowAltCircleRight onClick={goNext} className="next-btn" />
    </div>
  );
}
