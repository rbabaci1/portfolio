import React, { useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { TiThMenu } from "react-icons/ti";

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
      {["HOME", "ABOUT", "PORTFOLIO", "BLOG", "CONTACT"].map((text, index) => (
        <Link
          to={text.toLowerCase()}
          spy={true}
          smooth={true}
          duration={700}
          offset={-55}
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
        <Link to="home" spy={true} smooth={true} duration={700}>
          HOME
        </Link>

        <Link to="about" spy={true} smooth={true} duration={700} offset={-55}>
          ABOUT
        </Link>

        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          duration={700}
          offset={-55}
        >
          PORTFOLIO
        </Link>

        <Link to="blog" spy={true} smooth={true} duration={700} offset={-55}>
          BLOG
        </Link>

        <Link to="contact" spy={true} smooth={true} duration={700} offset={0}>
          CONTACT
        </Link>
      </div>

      <div className="mobile">
        <div class="drop-down-menu">
          <TiThMenu size={35} onClick={toggleDrawer(true)} />

          <SwipeableDrawer
            anchor={"top"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            transitionDuration={400}
          >
            {list("top")}
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
