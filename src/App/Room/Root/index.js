import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Player from "./Player";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Room = () => {
  return (
    <Wrapper>
      <LeftSide />
      <Player />
      <RightSide />
    </Wrapper>
  );
};

export default Room;
