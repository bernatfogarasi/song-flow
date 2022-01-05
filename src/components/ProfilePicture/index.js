import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

const ProfilePicture = ({ className, src, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Image src={src} />
    </Wrapper>
  );
};

export default ProfilePicture;
