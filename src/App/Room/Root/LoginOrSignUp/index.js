import LargeButton from "components/LargeButton";
import TopBar from "components/TopBar";
import styled from "styled-components";
import queryString from "querystring";

const Wrapper = styled.div``;

const Message = styled.div`
  margin: auto;
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 40px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 26px;
`;

const Details = styled.div`
  color: #777;
`;

const LoginOrSignUp = () => {
  return (
    <Wrapper>
      <TopBar logo search menu />
      <Message>
        <Title>Please log in or sign up to continue.</Title>
        <Details>Only logged in users can request access to rooms.</Details>
        <LargeButton
          to={{
            pathname: `/`,
            search: queryString.stringify({ path: window.location.pathname }),
            state: { test: "hello" }, //pass img, title, desc, price etc as well
          }}
        >
          Log in
        </LargeButton>
        <LargeButton to="/signup">Sign up</LargeButton>
      </Message>
    </Wrapper>
  );
};

export default LoginOrSignUp;
