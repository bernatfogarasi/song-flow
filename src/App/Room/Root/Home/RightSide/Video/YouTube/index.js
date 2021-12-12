import styled from "styled-components";
import YouTubeApi from "react-youtube";
import { useEffect, useState } from "react";

const Wrapper = styled(YouTubeApi)`
  position: absolute;
  background: black;
  width: 1100%;
  height: 100%;
  margin-left: -500%;
`;

// const Wrapper = styled(YouTubeApi)`
//   position: absolute;
//   background: black;
//   width: 100%;
//   height: 300%;
//   top: -100%;
// `;

const YouTube = ({ videoId, playing }) => {
  const [player, setPlayer] = useState(null);

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 0,
    },
  };

  useEffect(() => {
    const pause = () => {
      if (!player) return;
      player.pauseVideo();
    };

    const play = () => {
      if (!player) return;
      player.playVideo();
    };
    playing ? play() : pause();
  }, [playing, player]);

  return (
    <Wrapper
      videoId={"aGSKrC7dGcY"}
      opts={options}
      onReady={(event) => {
        setPlayer(event.target);
        console.log("ready");
      }}
    ></Wrapper>
  );
};

export default YouTube;
