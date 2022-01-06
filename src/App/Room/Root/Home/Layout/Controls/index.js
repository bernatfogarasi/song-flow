import styled from "styled-components";
// import PreviousButtonRaw from "./PreviousButton";
import PlayButtonRaw from "./PlayButton";
import NextButtonRaw from "./NextButton";
import ProgressBarRaw from "./ProgressBar";
import TimeRaw from "components/Time";
import { useContext } from "react";
import { RoomContext } from "context";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 40px 40px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  padding: 30px 20px 0 20px;
  background-color: #1a1a1a;
  justify-items: center;
  align-items: center;
`;

// const PreviousButton = styled(PreviousButtonRaw)`
//   grid-row: 1;
//   grid-column: 2;
// `;

const TimeLeft = styled(TimeRaw)`
  grid-row: 1;
  grid-column: 1;
  margin-right: auto;
`;

const TimeRight = styled(TimeRaw)`
  grid-row: 1;
  grid-column: 5;
  margin-left: auto;
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
  const { current } = useContext(RoomContext);
  return (
    <Wrapper className={className}>
      {/* <PreviousButton /> */}
      <TimeLeft duration={current?.duration} type="elapsed" />
      <PlayButton />
      <NextButton />
      <ProgressBar />
      <TimeRight duration={current?.duration} type="duration" />
    </Wrapper>
  );
};

export default Controls;
