import styled from "styled-components";
import TopBar from "components/TopBar";

const Wrapper = styled.div``;

const NotFound = () => {
  return (
    <Wrapper>
      <TopBar logo />
      Room not found
    </Wrapper>
  );
};

export default NotFound;
