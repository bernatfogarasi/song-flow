import styled from "styled-components";
import Video from "./Video";
const Wrapper = styled.div`
  width: 50%;
  height: calc(100% - 120px);
`;

const RightSide = () => {
  return (
    <Wrapper>
      <Video />
    </Wrapper>
  );
};

export default RightSide;
