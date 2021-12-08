import styled from "styled-components";
import Link from "components/Link";

const Wrapper = styled(Link)`
  color: black;
  border-radius: 4px;
  background: #f3ca20;
  padding: 8px;
  margin: 10px;
  text-decoration: none;
  font-weight: bold;
  :hover {
    transform: scale(1.2);
  }
  :active {
    filter: brightness(70%);
  }
`;

const LinkRefer = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default LinkRefer;
