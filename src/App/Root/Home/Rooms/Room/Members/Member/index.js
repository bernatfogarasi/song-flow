import styled from "styled-components";
import ProfilePicture from "components/ProfilePicture";
import { profilePicture } from "functions/image";

const Wrapper = styled(ProfilePicture)`
  border-radius: 50%;
  height: 35px;
  border: 1px solid #333;
`;

const Member = ({ className, member }) => {
  return (
    <Wrapper
      className={className}
      title={member.username}
      src={profilePicture(member.profilePicture)}
    ></Wrapper>
  );
};

export default Member;
