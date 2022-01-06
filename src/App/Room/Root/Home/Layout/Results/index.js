import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { RoomContext } from "context";
import { css } from "styled-components";
import Result from "./Result";
import { mergeChunks } from "functions/math";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 4px;
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
  const { resultsYoutube, resultsSpotify } = useContext(RoomContext);
  const [results, setResults] = useState([]);
  const chunkSize = 3;

  useEffect(() => {
    if (!resultsSpotify?.length || !resultsYoutube?.length)
      return setResults([]);
    setResults(mergeChunks([resultsSpotify, resultsYoutube], chunkSize));
  }, [resultsYoutube, resultsSpotify, chunkSize]);

  return (
    <Wrapper className={className} empty={!results.length}>
      {results?.map((content) => {
        return <Result key={content.id} content={content} />;
      })}
    </Wrapper>
  );
};

export default Results;
