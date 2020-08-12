import React, { useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import "./navBar.scss";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((text, index) => (
        <Link
          to={text.toLowerCase()}
          spy={true}
          smooth={true}
          duration={600}
          // offset={-55}
          key={index}
        >
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="nav-bar">
      <div className="desktop">
        <Link
          data-aos="fade-in"
          to="home"
          spy={true}
          smooth={true}
          duration={400}
        >
          HOME
        </Link>

        <Link
          data-aos="fade-in"
          to="about"
          spy={true}
          smooth={true}
          duration={600}
        >
          ABOUT
        </Link>

        <Link
          data-aos="fade-in"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={600}
          // offset={-55}
        >
          PORTFOLIO
        </Link>

        {/* <Link
          to="blog"
          spy={true}
          smooth={true}
          duration={600} //offset={-55}
        >
          BLOG
        </Link> */}

        <Link
          data-aos="fade-in"
          to="contact"
          spy={true}
          smooth={true}
          duration={600} //offset={0}
        >
          CONTACT
        </Link>
      </div>

      <div className="mobile">
        <div className="drop-down-menu">
          <FiMenu onClick={toggleDrawer(true)} className="menu-icon" />

          <SwipeableDrawer
            anchor={"top"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            transitionDuration={400}
          >
            <AiOutlineClose onClick={toggleDrawer(false)} />

            {list("top")}
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
