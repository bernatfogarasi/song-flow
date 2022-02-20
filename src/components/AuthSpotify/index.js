import AuthProvider from "components/AuthProvider";
import styled from "styled-components";
// import { SpotifyLogin } from "react-spotify-login";
// import SpotifyPlayer from "react-spotify-web-playback";
import imageSpotify from "assets/icons/spotify_black.png";
import { useEffect, useState } from "react";

const Wrapper = styled(AuthProvider)``;

const AuthSpotify = ({ className, method, children }) => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "f791df7f17f84cd69dc57dd991a5dd33";
  const scopes = [
    "user-read-private",
    "user-read-email",
    "streaming",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];
  const loginUrl = `${authEndpoint}?show_dialog=true&client_id=${encodeURIComponent(
    clientId
  )}&response_type=code&redirect_uri=${encodeURIComponent(
    window.location.origin + "/"
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;

  const onClick = () => {
    window.location.href = loginUrl;
  };

  return (
    <Wrapper
      className={className}
      provider="Spotify"
      icon={imageSpotify}
      onClick={onClick}
      method={method}
    >
      {children}
    </Wrapper>
  );
};

export default AuthSpotify;
