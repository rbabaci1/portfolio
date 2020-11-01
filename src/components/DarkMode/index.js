import React from "react";
import useDarkMode from "use-dark-mode";
import { BsMoon } from "react-icons/bs";
import { HiSun } from "react-icons/hi";

import "./darkMode.scss";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="toggle-control" onClick={darkMode.toggle}>
      {darkMode.value ? (
        <BsMoon size="1.8em" color="#455c69" />
      ) : (
        <HiSun size="1.9em" color="#fff" />
      )}
    </div>
  );
};

export default DarkModeToggle;
