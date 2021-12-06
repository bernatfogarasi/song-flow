import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  width: 100px;
  aspect-ratio: 1;
  border: 1px solid #333;
  border-radius: 50%;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const ProfilePicture = () => {
  return <Wrapper></Wrapper>;
};

export default ProfilePicture;
