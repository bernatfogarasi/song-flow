import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  font-size: 40px;
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Username = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Username;
