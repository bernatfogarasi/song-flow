import styled from "styled-components";
import Search from "./Search";

const Wrapper = styled.div`
  width: 50%;
  height: calc(100% - 120px);
`;

const LeftSide = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

export default LeftSide;
