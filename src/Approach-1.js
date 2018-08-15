import React from "react";
import { css } from "emotion";

const mainContainer = css`
  font-family: sans-serif;
`;

const button = css`
  padding: 10px 15px;
  margin: 10px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 20px;
`;

const greenButton = css`
  ${button};
  background-color: green;
  &:hover {
    background-color: lightgreen;
  }
`;

const blueButton = css`
  ${button};
  background-color: blue;
  &:hover {
    background-color: skyblue;
  }
`;

const Approach1 = () => (
  <main className={mainContainer}>
    <h1>Emotion styling demo: approach 1</h1>
    <button className={greenButton}>Green button</button>
    <button className={blueButton}>Blue button</button>
  </main>
);

export default Approach1;
