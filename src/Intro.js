import React from "react";
import { css } from "emotion";

const button = css`
  padding: 10px 20px;
  margin: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 18px;
  border-radius: 20px;
`;

const greenButton = css`
  ${button} background-color: green;
  &:hover {
    background-color: lightgreen;
  }
`;

const blueButton = css`
  ${button} background-color: blue;
  &:hover {
    background-color: lightblue;
  }
`;

const Intro = () => (
  <div>
    <button className={greenButton}>A button</button>
    <button className={blueButton}>Another button</button>
  </div>
);

export default Intro;
