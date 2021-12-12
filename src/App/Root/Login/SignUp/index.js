import styled from "styled-components";
import Card from "components/Card";
import LinkRefer from "components/LinkRefer";

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

const SignUp = () => {
  return (
    <Wrapper>
      <NoAccountText>
        Don't have an account? <LinkRefer to="/signup">Sign up</LinkRefer>
      </NoAccountText>
    </Wrapper>
  );
};

export default SignUp;
