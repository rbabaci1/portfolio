import React, { useState } from "react";
import Typist from "react-typist";

import "./homePage.scss";
import Button from "../../components/HomeButton";

export default function App() {
  const [renderImg, setRenderImg] = useState(false);
  const [renderBtn, setRenderBtn] = useState(false);
  const [renderTitle, setRenderTitle] = useState(false);

  return (
    <div className="home">
      <div id="bg-animation" />

      <div className="heading">
        <div className="header">
          <h1 id="first">
            <Typist
              cursor={{ hideWhenDone: true }}
              startDelay={500}
              avgTypingDelay={65}
              onTypingDone={() => {
                setRenderImg(true);

                setTimeout(() => {
                  setRenderTitle(true);
                }, 1000);
              }}
            >
              Hello, I'm <span>Rabah Babaci</span>.
            </Typist>
          </h1>

          {renderImg ? (
            <img
              src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png"
              alt="styles border bottom"
              data-aos="fade-right"
              data-aos-duration="500"
            />
          ) : undefined}

          {renderTitle ? (
            <h1>
              <Typist
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: -1000 }}
                avgTypingDelay={65}
                onTypingDone={() => setRenderBtn(true)}
              >
                I'm a Full-Stick Web Developer.
                <Typist.Backspace count={18} delay={600} />
                <Typist.Delay ms={200} />
                ack Web Developer.
                <Typist.Delay ms={200} />
              </Typist>
            </h1>
          ) : undefined}
        </div>

        {renderBtn ? <Button text="View my work" /> : <span id="btn-space" />}
      </div>
    </div>
  );
}
