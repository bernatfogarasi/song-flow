import styled from "styled-components";
import Card from "components/Card";
import Form from "./Form";
import LoginWith from "./SignUpWith";
import spotify from "assets/icons/spotify_black.png";
import google from "assets/icons/google_black.png";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Or = styled.div`
  width: calc(100% - 24px);
  position: relative;
  padding: 10px;
`;

const OrLine = styled.hr``;

const OrText = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #111;
  padding: 10px;
`;

const Login = () => {
  return (
    <Wrapper on>
      <Form />
      <Or>
        <OrLine />
        <OrText>OR</OrText>
      </Or>
      <LoginWith provider="Google" icon={google}></LoginWith>
      <LoginWith provider="Spotify" icon={spotify}></LoginWith>
    </Wrapper>
  );
};

export default Login;
