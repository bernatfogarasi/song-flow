import styled from "styled-components";
import Card from "../../../components/Card";

const Wrapper = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 14px;
`;

const NoAccountText = styled(Text)``;

const LoginLink = styled.a`
  color: white;
  margin: 10px;
`;
const Login = () => {
  return (
    <Wrapper>
      <NoAccountText>
        Already have an account? <LoginLink href="/">Log in</LoginLink>
      </NoAccountText>
    </Wrapper>
  );
};

export default Login;
