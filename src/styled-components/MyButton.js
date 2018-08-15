import styled from "react-emotion";

const MyButton = styled("button")`
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 20px;
  color: white;
  background-color: ${props =>
    props.colour
      ? props.colour.normal
      : props.green
        ? "green"
        : props.blue
          ? "blue"
          : "black"};
  &:hover {
    background-color: ${props =>
      props.colour
        ? props.colour.hover
        : props.green
          ? "lightgreen"
          : props.blue
            ? "skyblue"
            : "grey"};
  }
  ${props => (props.large ? "width: 300px; height: 100px;" : null)};
`;

export default MyButton;
