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

const SignUpLink = styled.a`
  color: white;
  margin: 10px;
`;
const SignUp = () => {
  return (
    <Wrapper>
      <NoAccountText>
        Don't have an account? <SignUpLink href="/signup">Sign up</SignUpLink>
      </NoAccountText>
    </Wrapper>
  );
};

export default SignUp;
