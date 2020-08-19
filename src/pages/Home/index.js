import React, { useState } from "react";
import Typist from "react-typist";

import "./homePage.scss";
import Button from "../../components/HomeButton";

export default function App() {
  const [renderImg, setRenderImg] = useState(false);
  const [renderBtn, setRenderBtn] = useState(false);

  return (
    <div className="home">
      <div id="bg-animation" />

      <div className="heading">
        <Typist
          cursor={{ show: false }}
          startDelay={500}
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
            data-aos="fade-right"
            data-aos-duration="500"
          />
        )}

        <Typist
          cursor={{ show: false }}
          avgTypingDelay={65}
          onTypingDone={() => setRenderBtn(true)}
        >
          <Typist.Delay ms={2950} />

          <h1>
            I'm a Full-Stick Web Developer.
            <Typist.Backspace count={18} delay={600} />
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
