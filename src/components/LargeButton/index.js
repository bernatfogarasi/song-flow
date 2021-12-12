import LinkPlain from "components/LinkPlain";
import styled from "styled-components";

const Wrapper = styled(LinkPlain)`
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #f3ca20;
  color: #f3ca20;
  width: 200px;
  display: block;
  text-align: center;
  background: linear-gradient(to left, transparent 50%, #f3ca20 50%) right;
  background-size: 200%;
  transition: 0.5s;
  :hover {
    background-position: left;
    color: black;
    font-family: MontserratSemibold;
  }
`;

const LargeButton = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default LargeButton;
