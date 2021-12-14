import styled from "styled-components";
import TopBar from "components/TopBar";
import SignUp from "./SignUpField";
import Welcome from "./Welcome";
import OrLogin from "./OrLogin";
// import video from "assets/ignore/dancing1.mp4";

const Wrapper = styled.div``;

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Root = () => {
  return (
    <Wrapper>
      {/* <Video autoplay muted loop>
        <source src={video} type="video/mp4" />
      </Video> */}
      <TopBar logo />
      <Welcome />
      <SignUp />
      <OrLogin />
    </Wrapper>
  );
};

export default Root;
