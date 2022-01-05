import styled from "styled-components";
import SignUp from "./SignUpField";
import Welcome from "./Welcome";
import OrLogin from "./OrLogin";
import Page from "components/Page";
// import video from "assets/ignore/dancing1.mp4";

const Wrapper = styled(Page)`
  padding: 10px 0;
  margin: auto;
`;

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Root = () => {
  return (
    <Wrapper logo>
      {/* <Video autoplay muted loop>
        <source src={video} type="video/mp4" />
      </Video> */}
      <Welcome />
      <SignUp />
      <OrLogin />
    </Wrapper>
  );
};

export default Root;
