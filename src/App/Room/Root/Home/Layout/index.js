import styled, { css } from "styled-components";
import useRoom from "hooks/useRoom";
import Page from "components/Page";
import ControlsRaw from "./Controls";
import CurrentRaw from "./Current";
import InfoRaw from "./Info";
import MembersRaw from "./Members";
import QueueRaw from "./Queue";
import RequestsRaw from "./Requests";
import ResultsRaw from "./Results";
import SearchRaw from "./Search";
import SelectedRaw from "./Selected";
import Spotify from "./Spotify";
import YouTubeRaw from "./YouTube";
import { useEffect } from "react";

const Wrapper = styled(Page)`
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 800px) {
    padding-top: 5px;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: auto auto 1fr auto auto;
    gap: 5px;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    gap: 20px;
    padding: 20px;
    display: grid;
    grid-template-rows: auto auto auto auto 1fr auto;
    grid-template-columns: auto minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (min-width: 1400px) {
    gap: 20px;
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

const YouTube = styled(YouTubeRaw)`
  @media (max-width: 800px) {
    width: 100vw;
    border: 2px solid;
    display: none;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 1 / 3;
    grid-column: 2;
  }
  @media (min-width: 1400px) {
    grid-row: 1 / 4;
    grid-column: 4;
  }
`;

const Info = styled(InfoRaw)`
  @media (max-width: 800px) {
    grid-row: 4;
  }
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
  @media (max-width: 800px) {
    grid-row: 1;
    margin: 0 5px;
  }
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
  @media (max-width: 800px) {
    grid-row: 2 / 5;
    z-index: 4;
    background: #1a1a1a;
    /* ${({ show }) =>
      show
        ? css``
        : css`
            display: none;
          `} */
  }
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
  @media (max-width: 800px) {
    grid-row: 2;
  }
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
  @media (max-width: 800px) {
    margin-top: -5px;
    grid-row: 3;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    margin-top: -20px;
    grid-row: 2 / 6;
    grid-column: 3;
  }
  @media (min-width: 1400px) {
    margin-top: -25px;
    grid-row: 3 / 6;
    grid-column: 3;
  }
`;

const Controls = styled(ControlsRaw)`
  @media (max-width: 800px) {
    grid-row: 5;
    padding-bottom: 20px;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    grid-row: 6;
    grid-column: 1 / 4;
  }
  @media (min-width: 1400px) {
    grid-row: 5;
    grid-column: 4;
  }
`;

const Selected = styled(SelectedRaw)``;

const Layout = ({ className }) => {
  const { current, results } = useRoom();
  const room = useRoom();
  useEffect(() => {
    console.log("room", room);
  }, [current]);

  return (
    <Wrapper className={className} logo menu logout spotify roomName>
      <MembersRequests>
        <Members />
        <Requests />
      </MembersRequests>
      <Search />
      <Results show={results?.length} />
      {current?.site === "spotify" && <Spotify />}
      {current?.site === "youtube" && <YouTube />}
      <Current />
      <Queue />
      <Info />
      <Controls />
      <Selected />
    </Wrapper>
  );
};

export default Layout;
