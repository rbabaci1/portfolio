import React, { useState } from "react";
import Div100vh from "react-div-100vh";
import Typist from "react-typist";

import "./homePage.scss";
import Button from "../../components/HomeButton";

export default function App() {
  const [renderImg, setRenderImg] = useState(false);
  const [renderBtn, setRenderBtn] = useState(false);

  return (
    <div className="home">
      <Div100vh id="bg-animation" />

      <div className="heading">
        <Typist
          cursor={{ show: false }}
          startDelay={600}
          avgTypingDelay={65}
          onTypingDone={() => setRenderImg(true)}
        >
          <h1>
            Hello, I'm <span>Rabah Babaci</span>.
          </h1>
        </Typist>

        {renderImg && (
          <img
            src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png"
            alt="styles border bottom"
            data-aos="fade-left"
          />
        )}

        <Typist
          cursor={{ show: false }}
          onTypingDone={() => setRenderBtn(true)}
          avgTypingDelay={65}
        >
          <Typist.Delay ms={3000} />

          <h1>
            I'm a Full-Stick Web Developer.
            <Typist.Backspace count={18} delay={500} />
            <Typist.Delay ms={200} />
            ack Web Developer.
          </h1>
          <Typist.Delay ms={200} />
        </Typist>

        {renderBtn && <Button />}
      </div>
    </div>
  );
}
