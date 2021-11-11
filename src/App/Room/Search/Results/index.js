import styled from "styled-components";
import Result from "./Result";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
`;

const Results = ({ data }) => {
  return (
    <Wrapper>{data && data.map((result) => <Result data={result} />)}</Wrapper>
  );
};

export default Results;
