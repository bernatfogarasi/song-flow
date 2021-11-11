import styled from "styled-components";
import TopBar from "../../components/TopBar";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

const Wrapper = styled.div`
  padding: 20%;
`;

const Home = () => {
  return (
    <Wrapper>
      <TopBar />
      <TopBar />
      <Welcome />
      <Navigation />
    </Wrapper>
  );
};

export default Home;
