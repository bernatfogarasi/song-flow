import styled from "styled-components";
import ImageBinaryRaw from "components/ImageBinary";

const Wrapper = styled.div`
  border-radius: 50%;
  height: 30px;
  aspect-ratio: 1;
  border: 1px solid #333;
  overflow: hidden;
`;

const Image = styled(ImageBinaryRaw)`
  height: 100%;
`;

const Member = ({ className, member }) => {
  return (
    <Wrapper className={className} title={member.username}>
      <Image
        type={member.profilePicture.contentType}
        data={member.profilePicture.data}
      />
    </Wrapper>
  );
};

export default Member;
