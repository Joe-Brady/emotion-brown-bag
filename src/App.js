import React, { Component } from "react";
import { injectGlobal } from "emotion";
import Intro from "./Intro";
import Demo from "./Demo";
import emotionNormalize from "emotion-normalize";

injectGlobal`
  ${emotionNormalize}
  html, body, button {
    font-family: "Comic Sans MS";
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        {/* <Intro /> */}
        <Demo />
      </div>
    );
  }
}

export default App;
