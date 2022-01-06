import styled from "styled-components";
import Profile from "./Profile";
import Username from "./Username";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  @media (max-width: 800px) {
    height: 20vw;
  }
  justify-content: space-between;
  align-items: center;
`;

const PersonalInfo = ({ className, username }) => {
  return (
    <Wrapper className={className}>
      <Profile />
      <Username text={username} />
    </Wrapper>
  );
};

export default PersonalInfo;
