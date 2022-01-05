import { RoomContext } from "context";
import { useContext, useEffect } from "react";
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

const Activity = styled.div`
  width: 10px;
  height: 10px;
  aspect-ratio: 1;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Members = ({ className }) => {
  const { members, onPlaying } = useContext(RoomContext);
  useEffect(() => {
    console.log(members);
    if (!members || !onPlaying) return;
    if (!members.filter((member) => member.active).length) onPlaying(false);
  }, [members, onPlaying]);
  return (
    <Wrapper className={className}>
      Members
      {members &&
        members
          .sort((x, y) => {
            return x.active === y.active ? 0 : x.active ? -1 : 1;
          })
          .map((member) => (
            <Member
              key={member._id}
              title={`${member.username} is ${
                member.active ? "online" : "offline"
              }`}
            >
              {member.active ? <Active /> : <Inactive />}
              <Text>{member.username}</Text>
            </Member>
          ))}
    </Wrapper>
  );
};

export default Members;
