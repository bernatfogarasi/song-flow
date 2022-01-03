import LoaderCircleRaw from "components/LoaderCircle";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
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
  transition: 0.2s;
`;

const LoaderCircle = styled(LoaderCircleRaw)`
  height: 100%;
  aspect-ratio: 1;
`;

const Icon = styled.img`
  width: 30px;
  filter: invert();
  margin-right: 15px;
`;

const ActionText = styled.div`
  margin-right: 5px;
`;

const Name = styled.div``;

const AuthProvider = ({
  background,
  color,
  icon,
  provider,
  onClick,
  method,
  loading,
}) => {
  return (
    <Wrapper background={background} color={color} onClick={onClick}>
      <Icon src={icon} />

      {loading ? (
        <LoaderCircle />
      ) : (
        <>
          <ActionText>
            {method === "login" ? "Log in" : "Sign up"} with{" "}
          </ActionText>
          <Name>{provider}</Name>
        </>
      )}
    </Wrapper>
  );
};

export default AuthProvider;
