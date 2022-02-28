import AuthGoogle from "components/AuthGoogle";
import AuthSpotify from "components/AuthSpotify";
import Card from "components/Card";
import styled from "styled-components";

import Form from "./Form";

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

const LoginField = ({ onLogin }) => {
  return (
    <Wrapper on>
      <AuthGoogle method="login" />
      <AuthSpotify method="login" />
      <Or>
        <OrLine />
        <OrText>OR</OrText>
      </Or>
      <Form onLogin={onLogin} />
    </Wrapper>
  );
};

export default LoginField;
