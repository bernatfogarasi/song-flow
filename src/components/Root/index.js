import styled from "styled-components";
import Home from "./Home";

const Wrapper = styled.div`
  background: #111;
  height: 100vh;
`;

const Root = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default Root;
