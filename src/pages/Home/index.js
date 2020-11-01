import React, { useState } from "react";
import Typist from "react-typist";

import DarkModeToggle from "../../components/DarkMode";
import Button from "../../components/HomeButton";
import "./homePage.scss";

export default function App() {
  const [renderBtn, setRenderBtn] = useState(false);
  const [renderTitle, setRenderTitle] = useState(false);

  return (
    <div className="home">
      <DarkModeToggle />

      <div id="bg-animation" />

      <div className="heading">
        <h1 className="first-header">
          <Typist
            cursor={{ hideWhenDone: true }}
            startDelay={300}
            avgTypingDelay={65}
            onTypingDone={() => {
              setTimeout(() => {
                setRenderTitle(true);
              }, 800);
            }}
          >
            Hello, I'm <span className="name">Rabah Babaci</span>.
          </Typist>
        </h1>

        {renderTitle ? (
          <h1 className="second-header">
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: -1000 }}
              avgTypingDelay={65}
              onTypingDone={() => setRenderBtn(true)}
            >
              I'm a Full-Stack Web Developer.
              <Typist.Delay ms={200} />
            </Typist>
          </h1>
        ) : (
          <div className="second-header" />
        )}

        {renderBtn ? <Button text="View my work" /> : <span id="btn-space" />}
      </div>
    </div>
  );
}
