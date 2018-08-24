import React from "react";
import MyButton from "./styled-components/MyButton";
import Container from "./styled-components/Container";
import styled from "react-emotion";

const PinkButton = styled(MyButton)`
  background-color: lightcoral;
  box-shadow: 5px 5px grey;
  &:hover {
    background-color: pink;
  }
`;

const Demo = () => (
  <div>
    <Container>
      <MyButton disabled>Default button</MyButton>
      <MyButton aqua>Aqua button</MyButton>
      <MyButton blue>Blue button</MyButton>
      <MyButton large>Large button</MyButton>
      <MyButton large aqua>
        Large button
      </MyButton>
    </Container>
    <Container>
      <PinkButton>Pink button with shadow</PinkButton>
      <PinkButton large>Large pink button</PinkButton>
    </Container>
  </div>
);

export default Demo;
