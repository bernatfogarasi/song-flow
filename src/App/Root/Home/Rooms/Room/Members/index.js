import styled from "styled-components";
import Member from "./Member";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
  gap: 5px;
`;

const Members = ({ className, members }) => {
  return (
    <Wrapper className={className}>
      {members.map((member) => (
        <Member key={member._id} member={member} />
      ))}
    </Wrapper>
  );
};

export default Members;
