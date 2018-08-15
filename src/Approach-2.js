import React from "react";
import MyButton from "./styled-components/MyButton";
import Container from "./styled-components/Container";
import { css } from "emotion";

const mainContainer = css`
  font-family: sans-serif;
`;

const Approach2 = () => (
  <main className={mainContainer}>
    <h1>Emotion styling demo: approach 2</h1>

    <Container>
      <MyButton>Default button</MyButton>
      <MyButton green>Green button</MyButton>
      <MyButton blue>Blue button</MyButton>
    </Container>

    <Container>
      <MyButton colour={{ normal: "#ff6fbf", hover: "#fdbfbf" }}>
        Custom pink button
      </MyButton>
      <MyButton large>Large button</MyButton>
      <MyButton large green>
        Large green button
      </MyButton>
    </Container>
  </main>
);

export default Approach2;
