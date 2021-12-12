import styled from "styled-components";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import ProgressBar from "./ProgressBar";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0px;
  width: calc(100% - 20px);
  background-color: #181818;
  border-top: 1px solid #333;
  padding: 10px;
  gap: 10px;

  align-items: center;
`;

const Controls = styled.div`
  display: flex;
`;

const Player = () => {
  return (
    <Wrapper>
      <Controls>
        <PreviousButton />
        <PlayButton />
        <NextButton />
      </Controls>
      <ProgressBar />
    </Wrapper>
  );
};

export default Player;
