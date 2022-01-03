import LinkPlain from "components/LinkPlain";
import styled from "styled-components";

const Wrapper = styled(LinkPlain)`
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #d6b11c;
  color: #d6b11c;
  width: 200px;
  display: block;
  text-align: center;
  background: linear-gradient(to left, transparent 50%, #d6b11c 50%) right;
  background-size: 200%;
  transition: 0.5s;
  :hover {
    background-position: left;
    color: black;
    font-family: MontserratSemibold;
  }
`;

const ButtonLarge = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default ButtonLarge;
