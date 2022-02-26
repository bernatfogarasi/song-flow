import { mergeChunks } from "functions/math";
import useRoom from "hooks/useRoom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

import Result from "./Result";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 4px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 10px;
  }
  :hover::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #333;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
  ${({ empty }) =>
    empty &&
    css`
      background: #1a1a1a;
    `}
`;

const Results = ({ className }) => {
  const { results } = useRoom();
  const [resultsOrdered, setResultsOrdered] = useState([]);

  useEffect(() => {
    if (!results) return;
    const chunkSize = 3;
    setResultsOrdered(mergeChunks(Object.values(results), chunkSize));
  }, [results]);

  // useEffect(() => {
  //   if (!resultsSpotify?.length || !resultsYoutube?.length) return;
  //   const chunkSize = 3;
  //   setResultsOrdered(mergeChunks([resultsSpotify, resultsYoutube], chunkSize));
  // }, [resultsSpotify, resultsYoutube]);

  return (
    <Wrapper className={className}>
      {results && Object.keys(results).length
        ? resultsOrdered.map((content) => {
            return <Result key={content.id} content={content} />;
          })
        : null}
    </Wrapper>
  );
};

export default Results;
