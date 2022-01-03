import { RoomContext } from "context";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  max-width: 100px;
`;

const Member = styled.div`
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  transition: 0.2s;
  gap: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const MemberProfile = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 50%;
  aspect-ratio: 1;
  position: relative;
  width: 50px;
`;

const MemberActivity = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 12px;
  border: 2px solid #333;
`;

const MemberActive = styled(MemberActivity)`
  background: orange;
`;

const MemberInactive = styled(MemberActivity)`
  background: #111;
`;

const Activity = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-sizing: border-box;
`;

const Active = styled(Activity)`
  background: #d6b11c;
`;

const Inactive = styled(Activity)`
  border: 4px solid #333;
`;

const Text = styled.div`
  opacity: 0.7;
`;

const Members = ({ className }) => {
  const { members } = useContext(RoomContext);
  return (
    <Wrapper className={className}>
      Members
      {members &&
        members
          .sort((x, y) => {
            return x.active === y.active ? 0 : x.active ? -1 : 1;
          })
          .map((member) => (
            <Member key={member._id}>
              {member.active ? <Active /> : <Inactive />}
              <Text>{member.username}</Text>
            </Member>
          ))}
    </Wrapper>
  );
};

export default Members;
