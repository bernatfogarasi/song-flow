import styled from "styled-components";
import Result from "./Result";
import { useContext } from "react";
import { RoomContext } from "context";

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
`;

const Results = ({ className }) => {
  const { results } = useContext(RoomContext);
  return (
    <Wrapper className={className}>
      {results &&
        results.map((result) => <Result key={result.url} data={result} />)}
    </Wrapper>
  );
};

export default Results;
