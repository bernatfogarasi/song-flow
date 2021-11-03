import styled from "styled-components";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import ProgressBar from "./ProgressBar";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0px;
  width: calc(100% - 40px);
  background-color: #181818;
  border-top: 1px solid #333;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  height: 120px;
`;

const Left = styled.div`
  display: flex;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
`;

const Right = styled.div`
  display: flex;
`;

const Controls = styled.div`
  display: flex;
`;

const Player = () => {
  return (
    <Wrapper>
      <Left></Left>
      <Center>
        <Controls>
          <PreviousButton />
          <PlayButton />
          <NextButton />
        </Controls>
        <ProgressBar />
      </Center>
      <Right></Right>
    </Wrapper>
  );
};

export default Player;
