import styled from "react-emotion";

const MyButton = styled("button")`
  padding: 10px 20px;
  margin: 10px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  border-radius: 20px;
  background-color: ${props =>
    props.aqua ? "mediumaquamarine" : props.blue ? "steelblue" : "black"};
  ${props => (props.large ? "width: 300px; height: 100px;" : null)};
  &:hover {
    background-color: ${props =>
      props.aqua ? "mediumseagreen" : props.blue ? "cornflowerblue" : "grey"};
  }
`;

export default MyButton;
