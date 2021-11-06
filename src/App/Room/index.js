import styled from "styled-components";
import Player from "./Player";
import Search from "./Search";

const Wrapper = styled.div``;

const Room = () => {
  return (
    <Wrapper>
      <Search />
      <Player />
    </Wrapper>
  );
};

export default Room;
