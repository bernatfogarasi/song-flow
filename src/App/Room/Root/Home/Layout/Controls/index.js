import styled from "styled-components";
import PreviousButtonRaw from "./PreviousButton";
import PlayButtonRaw from "./PlayButton";
import NextButtonRaw from "./NextButton";
import ProgressBarRaw from "./ProgressBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 40px 40px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  bottom: 0px;
  margin-bottom: -20px;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  border-top: 1px solid #333;
  background-color: #181818;
  justify-items: center;
  align-items: center;
`;

const PreviousButton = styled(PreviousButtonRaw)`
  grid-row: 1;
  grid-column: 2;
`;

const PlayButton = styled(PlayButtonRaw)`
  grid-row: 1;
  grid-column: 3;
`;

const NextButton = styled(NextButtonRaw)`
  grid-row: 1;
  grid-column: 4;
`;

const ProgressBar = styled(ProgressBarRaw)`
  grid-row: 2;
  grid-column: 1 / 6;
`;

const Controls = ({ className }) => {
  return (
    <Wrapper className={className}>
      <PreviousButton />
      <PlayButton />
      <NextButton />
      <ProgressBar />
    </Wrapper>
  );
};

export default Controls;
