import styled from "styled-components";
import imageSpotify from "assets/icons/spotify.png";
import AuthSpotify from "components/AuthSpotify";

const Wrapper = styled(AuthSpotify)`
  /* padding: 5px 10px; */
  border: none;
  background: #000;
  /* color: #000; */
  /* font-family: MontserratSemibold; */
  /* display: flex; */
  /* align-items: center; */
  gap: 10px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background: #000;
  }
  height: 100%;
  @media (max-width: 800px) {
    display: none;
  }
  flex-shrink: 0;
`;

const Icon = styled.img`
  height: 20px;
`;

const Text = styled.div``;

const LinkSpotify = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Icon src={imageSpotify} /> Link Spotify
    </Wrapper>
  );
};

export default LinkSpotify;
