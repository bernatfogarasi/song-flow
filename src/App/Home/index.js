import styled from "styled-components";
import Logo from "../../components/Logo";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

const Wrapper = styled.div`
  padding: 20%;
`;

const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <Welcome />
      <Navigation />
    </Wrapper>
  );
};

export default Home;
