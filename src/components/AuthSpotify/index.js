import AuthProvider from "components/AuthProvider";
import styled from "styled-components";
// import { SpotifyLogin } from "react-spotify-login";
// import SpotifyPlayer from "react-spotify-web-playback";
import imageSpotify from "assets/icons/spotify_black.png";

const Wrapper = styled.div``;

const AuthSpotify = ({ className, method }) => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUrl = "http://localhost:3000/";
  const clientId = "f791df7f17f84cd69dc57dd991a5dd33";
  const scopes = [
    "user-read-private",
    "user-read-email",
    "streaming",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];
  const loginUrl = `${authEndpoint}?client_id=${encodeURIComponent(
    clientId
  )}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUrl
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;

  const onClick = () => {
    window.location.href = loginUrl;
  };

  return (
    <Wrapper className={className}>
      <AuthProvider
        provider="Spotify"
        icon={imageSpotify}
        onClick={onClick}
        method={method}
      />
    </Wrapper>
  );
};

export default AuthSpotify;
