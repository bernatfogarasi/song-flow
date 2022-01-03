import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Username from "./Username";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

const PersonalInfo = ({ username }) => {
  return (
    <Wrapper>
      <ProfilePicture />
      <Username text={username} />
    </Wrapper>
  );
};

export default PersonalInfo;
