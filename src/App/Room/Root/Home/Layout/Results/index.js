import styled from "styled-components";
import Result from "./Result";
import { useContext } from "react";
import { RoomContext } from "context";
import { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  gap: 15px;
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
  const { results } = useContext(RoomContext);
  return (
    <Wrapper className={className} empty={!results?.length}>
      {results &&
        results.map((result) => <Result key={result.url} data={result} />)}
    </Wrapper>
  );
};

export default Results;
