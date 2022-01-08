import { useEffect, useState } from "react";
import styled from "styled-components";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { serverRequest } from "functions/requests";
import useRoom from "hooks/useRoom";

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
    sound,
    setProgressBar,
  } = useRoom();
  const [accessToken, setAccessToken] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    // if (!current) return;
    const fetchData = async () => {
      const json = await serverRequest("/user/auth/spotify-access-token");
      console.log(json.data.accessToken);
      setAccessToken(json.data.accessToken);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const position = Math.round(progress * current.duration);
    setProgressBar(progress);
    const sendProgress = async () => {
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
    sendProgress();
  }, [progress]);

  useEffect(() => {
    console.log("sound-request");
    const sendVolume = async () => {
      await fetch(
        `https://api.spotify.com/v1/me/player/volume?volume_percent=${
          sound ? 100 : 0
        }`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          method: "PUT",
        }
      );
    };
    sendVolume();
  }, [sound]);

  useEffect(() => {
    const updatePeriod = 1000;
    let interval;
    if (playing) {
      interval = setInterval(
        () =>
          setProgressBar(
            (progress) => progress + updatePeriod / current.duration
          ),
        updatePeriod
      );
    }
    return () => clearInterval(interval);
  }, [playing]);

  // useEffect(() => {
  //   if (!accessToken || !playing) return;
  //   const getState = async () => {
  //     const response = await fetch(`https://api.spotify.com/v1/me/player`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       method: "GET",
  //     });
  //     const json = await response.json();
  //     console.log("state");
  //     setProgressBar(json.progress_ms / json.item.duration_ms);
  //   };

  //   const interval = setInterval(async () => {
  //     await getState();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [accessToken, playing]);

  // useEffect(() => {
  //   setProgressBar(progress);
  // }, [accessToken, progress]);

  // useEffect(() => {
  //   if (!accessToken) return;
  //   // sometimes this helps to pause
  //   return async () => {
  //     setPlayingSpotify(false);
  //     const response = await fetch(
  //       `https://api.spotify.com/v1/me/player/pause`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           "Content-Type": "application/json",
  //         },
  //         method: "PUT",
  //       }
  //     );
  //     const body = await response.json();
  //     console.log(body);
  //   };
  // }, [accessToken]);

  return (
    <Wrapper className={className}>
      <Player>
        {accessToken && (
          <SpotifyWebPlayer
            token={accessToken}
            uris={current.url}
            showSaveIcon
            callback={(state) => {
              if (
                playing !== state.isPlaying &&
                progressBar >= 0.95 &&
                state.progressMs === 0
              ) {
                onPlaying(state.isPlaying);
                onNext();
              }
              // if (playing !== state.isPlaying) onPlaying(state.isPlaying);
              setStatus(state.status);
              console.log("error", state.error);
              console.log("status", state.status);
              console.log("progress", state.progressMs);
              console.log("needsUpdate", state.needsUpdate);
              setProgressBar(state.position / 100);
            }}
            play={status === "READY" && playing}
          />
        )}
      </Player>
    </Wrapper>
  );
};

export default Spotify;
