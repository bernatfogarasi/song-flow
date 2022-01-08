import styled from "styled-components";
// import PreviousRaw from "./Previous";
import PlayRaw from "./Play";
import NextRaw from "./Next";
import ProgressBarRaw from "./ProgressBar";
import TimeRaw from "components/Time";
import useRoom from "hooks/useRoom";
import Mute from "./Mute";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px 40px 40px 1fr auto;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  padding: 20px 20px 10px 20px;
  background-color: #1a1a1a;
  justify-items: center;
  align-items: center;
`;

// const Previous = styled(PreviousRaw)`
//   grid-row: 1;
//   grid-column: 3;
// `;

const TimeLeft = styled(TimeRaw)`
  grid-row: 2;
  grid-column: 1;
  margin-right: auto;
`;

const TimeRight = styled(TimeRaw)`
  grid-row: 2;
  grid-column: 7;
  margin-left: auto;
`;

const Play = styled(PlayRaw)`
  grid-row: 1;
  grid-column: 4;
`;

const Next = styled(NextRaw)`
  grid-row: 1;
  grid-column: 5;
`;

const ProgressBar = styled(ProgressBarRaw)`
  grid-row: 2;
  grid-column: 2 / 7;
`;

const Controls = ({ className }) => {
  const { current } = useRoom();
  return (
    <Wrapper className={className}>
      {/* <Previous /> */}
      <TimeLeft duration={current?.duration} type="elapsed" />
      <Play />
      <Next />
      <ProgressBar />
      <Mute />
      <TimeRight duration={current?.duration} type="duration" />
    </Wrapper>
  );
};

export default Controls;
