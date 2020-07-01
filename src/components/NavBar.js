import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="home" spy={true} smooth={true} duration={700}>
        HOME
      </Link>

      <Link to="about" spy={true} smooth={true} duration={700} offset={-55}>
        ABOUT
      </Link>

      <Link to="portfolio" spy={true} smooth={true} duration={700} offset={-55}>
        PORTFOLIO
      </Link>

      <Link to="blog" spy={true} smooth={true} duration={700} offset={-55}>
        BLOG
      </Link>

      <Link to="contact" spy={true} smooth={true} duration={700} offset={0}>
        CONTACT
      </Link>
    </div>
  );
}
