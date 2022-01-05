import styled from "styled-components";
import Card from "components/Card";
import Form from "./Form";
import AuthGoogle from "components/AuthGoogle";
import AuthSpotify from "components/AuthSpotify";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 90vw;
  max-width: 350px;
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
      <AuthGoogle method="signup" />
      <AuthSpotify method="signup" />
      <Or>
        <OrLine />
        <OrText>OR</OrText>
      </Or>
      <Form />
    </Wrapper>
  );
};

export default Login;
