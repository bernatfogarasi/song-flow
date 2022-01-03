import styled from "styled-components";
import TopBar from "components/TopBar";
import LoginField from "./LoginField";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Page from "components/Page";

const Wrapper = styled(Page)`
  padding: 10px 0;
  margin: auto;
`;

const Login = ({ onLogin }) => {
  return (
    <Wrapper logo>
      <Welcome />
      <LoginField onLogin={onLogin} />
      <SignUp />
    </Wrapper>
  );
};

export default Login;
