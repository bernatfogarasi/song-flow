import useHint from "hooks/useHint";
import useSession from "hooks/useSession";
import styled, { css } from "styled-components";

import Hint from "./Hint";
import LinkSpotify from "./LinkSpotify";
import LogoTitle from "./LogoTitle";
import Logout from "./Logout";
import Menu from "./Menu";
import RoomName from "./RoomName";
import Search from "./Search";

const Wrapper = styled.div`
  display: flex;
  top: 0px;
  left: 0px;
  width: calc(100% - 30px);
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 15px;
  gap: 20px;
  flex: 0 1 auto;
  ${({ hint }) =>
    hint
      ? css`
          background: white;
        `
      : css`
          background: #d6b11c;
        `}
  transition: 0.1s;
`;

const Center = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 20px;
`;

const Right = styled.div`
  flex: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
`;

const TopBar = ({ logo, title, menu, search, logout, spotify, roomName }) => {
  const { session } = useSession();
  const { hint } = useHint();
  return (
    <Wrapper hint={hint}>
      <Left>
        {logo && <LogoTitle title={title} />}
        <Hint />
      </Left>
      <Center>
        {search && <Search />}
        {roomName && (
          <RoomName>{window.location.pathname.split("/").at(-1)}</RoomName>
        )}
      </Center>
      <Right>
        {session && !session?.spotifyAvailable && spotify && <LinkSpotify />}
        {logout && <Logout />}
        {menu && <Menu />}
      </Right>
    </Wrapper>
  );
};

export default TopBar;
