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
import RequestsRaw from "./Requests";

const Wrapper = styled(Page)`
  gap: 20px;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 800px) {
    display: grid;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    padding: 20px;
    display: grid;
    grid-template-rows: auto auto auto auto 1fr auto;
    grid-template-columns: auto minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (min-width: 1400px) {
    padding: 20px;
    display: grid;
    grid-template-rows: auto auto 1fr auto auto;
    grid-template-columns: auto minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
  }
`;

const MembersRequests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
  @media (min-width: 800px) and (min-width: 800px) and (max-width: 1400px) {
    grid-row: 1 / 6;
    grid-column: 1;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 6;
    grid-column: 1;
  }
`;

const Members = styled(MembersRaw)``;

const Requests = styled(RequestsRaw)``;

const Video = styled(VideoRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
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
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 3;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 4;
    grid-column: 4;
  }
`;

const Search = styled(SearchRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 4;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 1;
    grid-column: 2;
  }
`;

const Results = styled(ResultsRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 5;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 2 / 6;
    grid-column: 2;
  }
`;

const Current = styled(CurrentRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 1;
    grid-column: 3;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 3;
    grid-column: 3;
  }
`;

const Queue = styled(QueueRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 2 / 6;
    grid-column: 3;
  }
  @media (min-width: 1400px) {
    grid-row: 3 / 6;
    grid-column: 3;
  }
`;

const Controls = styled(ControlsRaw)`
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 6;
    grid-column: 1 / 4;
  }
  @media (min-width: 1400px) {
    grid-row: 5;
    grid-column: 4;
  }
`;

const Layout = ({ className }) => {
  return (
    <Wrapper logo menu logout className={className} roomName>
      <MembersRequests>
        <Members />
        <Requests />
      </MembersRequests>
      <Search />
      <Results />
      <Current />
      <Queue />
      <Video />
      <Info />
      <Controls />
    </Wrapper>
  );
};

export default Layout;
