import styled from "styled-components";
import { Link as LinkRaw } from "react-router-dom";

const Wrapper = styled(LinkRaw)``;

const Link = (props) => {
  return <Wrapper {...props} />;
};

export default Link;
