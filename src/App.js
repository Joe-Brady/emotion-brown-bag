import React, { Component } from "react";
import Intro from "./Intro";
import Demo from "./Demo";

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Demo />
      </div>
    );
  }
}

export default App;
