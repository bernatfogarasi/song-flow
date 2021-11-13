import styled from "styled-components";
import TopBar from "../../components/TopBar";
import Login from "./Login";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
// import video from "../../assets/ignore/dancing1.mp4";

const Wrapper = styled.div`
  padding-top: 10vh;
`;

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Home = () => {
  return (
    <Wrapper>
      {/* <Video autoplay muted loop>
        <source src={video} type="video/mp4" />
      </Video> */}
      <TopBar logo />
      <Welcome />
      <Login />
      <SignUp />
    </Wrapper>
  );
};

export default Home;
