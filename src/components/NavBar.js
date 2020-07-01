import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>
      <NavLink to="/blog">BLOG</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </div>
  );
}
