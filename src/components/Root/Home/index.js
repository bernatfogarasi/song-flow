import styled from "styled-components";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

const Wrapper = styled.div`
  padding: 20%;
`;

const Home = () => {
  return (
    <Wrapper>
      <Welcome />
      <Navigation />
    </Wrapper>
  );
};

export default Home;
