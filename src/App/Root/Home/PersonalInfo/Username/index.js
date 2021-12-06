import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  font-size: 40px;
`;

const Username = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Username;
