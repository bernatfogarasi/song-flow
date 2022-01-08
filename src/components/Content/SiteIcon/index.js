import styled from "styled-components";
import imageSpotify from "assets/icons/spotify.png";
import imageYoutube from "assets/icons/youtube.png";

const siteIcons = { spotify: imageSpotify, youtube: imageYoutube };

const Wrapper = styled.img`
  grid-row: 1 / 3;
  grid-column: 5;
  margin-left: auto;
  width: 20px;
  pointer-events: none;
`;

const SiteIcon = ({ className, children, src, site, ...props }) => {
  return (
    <Wrapper className={className} src={src || siteIcons[site]} {...props}>
      {children}
    </Wrapper>
  );
};

export default SiteIcon;
