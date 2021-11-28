import styled from "styled-components";
import LogoTitle from "./LogoTitle";
import Menu from "./Menu";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  justify-content: space-between;
`;

const TopBar = ({ logo, title, menu }) => {
  return (
    <Wrapper>
      {logo && <LogoTitle title={title} />}
      {menu && <Menu />}
    </Wrapper>
  );
};

export default TopBar;
