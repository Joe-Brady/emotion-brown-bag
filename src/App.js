import React, { Component } from "react";
import { injectGlobal } from "emotion";
import Approach1 from "./Approach-1";
import Approach2 from "./Approach-2";

injectGlobal`
  main {
    font-family: sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Approach1 />
        <Approach2 />
      </div>
    );
  }
}

export default App;
