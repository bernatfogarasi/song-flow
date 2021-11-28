import styled from "styled-components";
import TopBar from "components/TopBar";
import LoginField from "./LoginField";
import Welcome from "./Welcome";
import SignUp from "./SignUp";

const Wrapper = styled.div`
  padding-top: 10vh;
`;

const Login = ({ onLogin }) => {
  return (
    <Wrapper>
      <TopBar logo />
      <Welcome />
      <LoginField onLogin={onLogin} />
      <SignUp />
    </Wrapper>
  );
};

export default Login;
