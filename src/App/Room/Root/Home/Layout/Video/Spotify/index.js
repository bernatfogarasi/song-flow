import { useContext, useEffect, useState } from "react";
import { RoomContext } from "context";
import styled from "styled-components";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { serverRequest } from "functions/requests";

const Wrapper = styled.div``;

const Player = styled.div`
  display: none;
`;

const Spotify = ({ className }) => {
  const {
    current,
    playing,
    progress,
    onPlaying,
    onNext,
    progressBar,
    setProgressBar,
  } = useContext(RoomContext);

  const [accessToken, setAccessToken] = useState();
  const [playingSpotify, setPlayingSpotify] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const json = await serverRequest("/user/auth/spotify-access-token");
      console.log(json.data.accessToken);
      setAccessToken(json.data.accessToken);
    };
    fetchData();
  }, [current]);

  const updateSavedStatus = (status) => {
    // return false;
  };

  useEffect(() => {
    const position = Math.round(progress * current.duration);
    const seekTo = async () => {
      await fetch(
        `https://api.spotify.com/v1/me/player/seek?position_ms=${position}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          method: "PUT",
        }
      );
    };
    seekTo();
  }, [progress]);

  useEffect(() => {
    if (!accessToken || !playing) return;
    const getState = async () => {
      const response = await fetch(`https://api.spotify.com/v1/me/player`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const json = await response.json();
      console.log("state");
      setProgressBar(json.progress_ms / json.item.duration_ms);
    };

    const interval = setInterval(async () => {
      await getState();
    }, 1000);
    return () => clearInterval(interval);
  }, [accessToken, playing]);

  // useEffect(() => {
  //   setProgressBar(progress);
  // }, [accessToken, progress]);

  useEffect(() => {
    if (!accessToken) return;
    // sometimes this helps to pause
    return async () => {
      setPlayingSpotify(false);
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/pause`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          method: "PUT",
        }
      );
      const body = await response.json();
      console.log(body);
    };
  }, [accessToken]);

  return (
    <Wrapper className={className}>
      <Player>
        {accessToken && (
          <SpotifyWebPlayer
            styles={{ backgroundColor: "red" }}
            token={accessToken}
            uris={current.url}
            showSaveIcon
            callback={(state) => {
              if (
                playing !== state.isPlaying &&
                progressBar >= 0.9 &&
                state.progressMs === 0
              ) {
                onPlaying(state.isPlaying);
                onNext();
              }
              console.log(state.progressMs);
            }}
            // autoPlay
            play={playingSpotify && playing}
            updateSavedStatus={updateSavedStatus}
          />
        )}
      </Player>
    </Wrapper>
  );
};

export default Spotify;
