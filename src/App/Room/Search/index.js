import styled from "styled-components";
import Bar from "./Bar";

const Wrapper = styled.div`
  background: #1e1e1e;
  height: calc(100vh - 120px);
  width: 50vw;
  border-right: 1px solid #333;
  display: flex;
`;

const Search = () => {
  return (
    <Wrapper>
      <Bar />
    </Wrapper>
  );
};

export default Search;
