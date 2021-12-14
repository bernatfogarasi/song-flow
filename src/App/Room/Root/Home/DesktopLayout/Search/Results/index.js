import styled from "styled-components";
import Result from "./Result";

const Wrapper = styled.div`
  background: #111;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 5px;
  gap: 15px;
  border-radius: 4px;
  width: calc(100% - 5px);

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

const Results = ({ data }) => {
  return (
    <Wrapper>
      {data && data.map((result) => <Result key={result.url} data={result} />)}
    </Wrapper>
  );
};

export default Results;
