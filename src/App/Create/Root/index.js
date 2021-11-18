import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";
import TopBar from "components/TopBar";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30%;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  width: 30%;
`;

const LoginSpotifyButton = styled(LoginButton)`
  background: #1ed760;
`;

const MusicSiteName = styled.div`
  display: inline-block;
  font-weight: bold;
`;

// const LoginYoutubeMusicButton = styled(LoginButton)`
//   background: #f00;
// `;

// const LoginAppleMusicButton = styled(LoginButton)``;

// const LoginSoundCloudButton = styled(LoginButton)`
//   background: #ff5500;
// `;

const NoLoginLink = styled(Link)`
  margin-top: 20px;
  color: white;
  :hover {
    color: lightgrey;
  }
`;

const createId = (length) => {
  var result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const Create = () => {
  const [roomId, setRoomId] = useState(createId(10));

  useEffect(() => {
    console.log(roomId);
  }, [roomId]);

  return (
    <Wrapper>
      <TopBar />
      <LoginSpotifyButton>
        Login with <MusicSiteName>Spotify</MusicSiteName>
      </LoginSpotifyButton>
      <NoLoginLink to={"/room/" + roomId}>Continue without spotify</NoLoginLink>
      {/* <LoginYoutubeMusicButton>
        <MusicSiteName>Youtube Music</MusicSiteName>
      </LoginYoutubeMusicButton>
      <LoginAppleMusicButton>
        <MusicSiteName>Apple Music</MusicSiteName>
      </LoginAppleMusicButton>
      <LoginSoundCloudButton>
        <MusicSiteName>SoundCloud</MusicSiteName>
      </LoginSoundCloudButton> */}
    </Wrapper>
  );
};

export default Create;
