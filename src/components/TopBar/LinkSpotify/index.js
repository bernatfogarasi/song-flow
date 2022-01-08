import styled from "styled-components";
import imageSpotify from "assets/icons/spotify.png";

const Wrapper = styled.div`
  border-radius: 4px;
  background: #fff;
  padding: 5px 10px;
  border: 2px solid #111;
  color: #000;
  font-family: MontserratSemibold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img`
  height: 20px;
`;

const Text = styled.div`
  flex-shrink: 0;
`;

const LinkSpotify = ({ className }) => {
  const onClick = () => {};

  return (
    <Wrapper className={className} onClick={onClick}>
      <Icon src={imageSpotify} />
      <Text>Link Spotify Account</Text>
    </Wrapper>
  );
};

export default LinkSpotify;
