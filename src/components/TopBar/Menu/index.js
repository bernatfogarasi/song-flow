import styled from "styled-components";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const Wrapper = styled.div`
  display: flex;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  height: fit-content;
  margin: 10px;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

const Line = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background: #ddd;
`;

const Menu = () => {
  return (
    <Wrapper>
      {/* <LoginButton />
      <RegisterButton /> */}
      <Hamburger>
        <Line />
        <Line />
        <Line />
      </Hamburger>
    </Wrapper>
  );
};

export default Menu;
