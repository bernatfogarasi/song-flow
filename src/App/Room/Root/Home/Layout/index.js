import styled from "styled-components";
import SearchRaw from "./Search";
import MembersRaw from "./Members";
import VideoRaw from "./Video";
import QueueRaw from "./Queue";
import ResultsRaw from "./Results";
import Page from "components/Page";
import ControlsRaw from "./Controls";
import CurrentRaw from "./Current";
import InfoRaw from "./Info";

const Wrapper = styled.div`
  gap: 20px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  @media (max-width: 1400px) {
    grid-template-rows: auto auto 1fr auto;
    /* grid-template-columns: auto min-content 1fr; */
    grid-template-columns: auto 1fr 1fr;
  }
  @media (min-width: 1400px) {
    grid-template-rows: auto auto 1fr auto auto;
    grid-template-columns: auto 1fr 1fr 2fr;
  }
`;

const Members = styled(MembersRaw)`
  @media (max-width: 1400px) {
    grid-row: 1 / 6;
    grid-column: 1;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 4;
    grid-column: 1;
  }
`;

const Video = styled(VideoRaw)`
  @media (max-width: 1400px) {
    /* overflow: auto;
    resize: horizontal;
    resize: initial; */
    grid-row: 1 / 3;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 4;
    grid-column: 4;
  }
`;

const Info = styled(InfoRaw)`
  @media (max-width: 1400px) {
    /* grid-row: 4;
    grid-column: 2; */
  }
  @media (min-width: 1400px) {
    grid-row: 4;
    grid-column: 4;
  }
`;

const Search = styled(SearchRaw)`
  @media (max-width: 1400px) {
    grid-row: 3;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 1;
    grid-column: 2;
  }
`;

const Results = styled(ResultsRaw)`
  @media (max-width: 1400px) {
    grid-row: 4;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 2 / 6;
    grid-column: 2;
  }
`;

const Current = styled(CurrentRaw)`
  @media (max-width: 1400px) {
    grid-row: 1;
    grid-column: 3;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 3;
    grid-column: 3;
  }
`;

const Queue = styled(QueueRaw)`
  @media (max-width: 1400px) {
    grid-row: 2 / 5;
    grid-column: 3;
  }
  @media (min-width: 1400px) {
    grid-row: 3 / 6;
    grid-column: 3;
  }
`;

const Controls = styled(ControlsRaw)`
  @media (max-width: 1400px) {
    grid-row: 5;
    grid-column: 1 / 4;
  }
  @media (min-width: 1400px) {
    grid-row: 5;
    grid-column: 4;
  }
`;

const Layout = ({ className }) => {
  return (
    <Page logo menu>
      <Wrapper className={className}>
        <Members />
        <Search />
        <Results />
        <Current />
        <Queue />
        <Video />
        <Info />
        <Controls />
      </Wrapper>
    </Page>
  );
};

export default Layout;
