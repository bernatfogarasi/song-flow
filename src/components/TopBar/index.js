import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  justify-content: space-between;
`;

const TopBar = ({ logo, menu }) => {
  return (
    <Wrapper>
      {logo && <Logo />}
      {menu && <Menu />}
    </Wrapper>
  );
};

export default TopBar;
