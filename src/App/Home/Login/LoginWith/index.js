import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 40px);
  border-radius: 4px;
  text-align: center;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 1px solid #333;
  padding: 10px;
  cursor: pointer;
  :hover {
    background: #222;
  }
  :active {
    background: #111;
  }
`;

const Icon = styled.img`
  width: 30px;
  filter: invert();
  margin-right: 15px;
`;

const LoginWithText = styled.div`
  margin-right: 5px;
`;

const ProviderText = styled.div``;

const LoginWith = ({ background, color, icon, provider }) => {
  return (
    <Wrapper background={background} color={color}>
      <Icon src={icon} />
      <LoginWithText>Log in with </LoginWithText>
      <ProviderText>{provider}</ProviderText>
    </Wrapper>
  );
};

export default LoginWith;
