import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  text-decoration: none;
  color: white;
`;

const LinkPlain = (props) => {
  return <Wrapper {...props} />;
};

export default LinkPlain;
