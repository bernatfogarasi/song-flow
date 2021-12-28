import styled from "styled-components";
import LogoTitle from "./LogoTitle";
import Logout from "./Logout";
import Menu from "./Menu";
import RoomName from "./RoomName";
import Search from "./Search";

const Wrapper = styled.div`
  /* position: sticky; */
  display: flex;
  top: 0px;
  left: 0px;
  width: calc(100% - 30px);
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0px 15px;
  gap: 20px;
  flex: 0 1 auto;
`;

const Center = styled.div`
  flex: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Right = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
`;

const TopBar = ({ logo, title, menu, search, logout, roomName }) => {
  return (
    <Wrapper>
      <Left>{logo && <LogoTitle title={title} />}</Left>
      <Center>
        {search && <Search />}
        {roomName && (
          <RoomName>{window.location.pathname.split("/").at(-1)}</RoomName>
        )}
      </Center>
      <Right>
        {logout && <Logout />}
        {menu && <Menu />}
      </Right>
    </Wrapper>
  );
};

export default TopBar;
