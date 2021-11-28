import styled from "styled-components";

const Wrapper = styled.a`
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

const Link = (props) => {
  return <Wrapper {...props} />;
};

export default Link;
