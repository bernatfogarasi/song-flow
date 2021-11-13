import styled from "styled-components";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const Wrapper = styled.div`
  display: flex;
`;

const Menu = () => {
  return (
    <Wrapper>
      <LoginButton />
      <RegisterButton />
    </Wrapper>
  );
};

export default Menu;
