import styled from "styled-components";
import YouTubeApi from "react-youtube";
// import ReactPlayer from "react-player";
// import { useMessage } from "@rottitime/react-hook-message-event";
// import { Player } from "video-react";
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

// const Wrapper = styled.div`
//   overflow: hidden;
//   width: calc(100% - 2px);
//   height: 40%;
//   border: 1px solid #333;
//   pointer-events: none;
//   iframe {
//     width: 300%;
//     height: 100%;
//     margin-left: -100%;
//   }
// `;

const YouTube = ({ videoId, playing }) => {
  const [player, setPlayer] = useState(null);
  // System.import("https://www.youtube.com/iframe_api").then(function () {
  //   console.log("Loaded!");
  // });

  const options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 0,
      controls: 0,
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

  // https://codepen.io/adamgreenough/pen/bGrgoNb?editors=1100
  return (
    // <Wrapper>
    //   <iframe
    //     title="Youtube video"
    //     src="https://www.youtube.com/embed/aGSKrC7dGcY?autoplay=1&amp;color=white&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;version=3"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowfullscreen
    //   ></iframe>
    // </Wrapper>

    // <ReactPlayer
    //   style={{ width: 200, height: 200, background: "red" }}
    //   playing={true}
    //   src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    // ></ReactPlayer>
    <Wrapper
      videoId={"aGSKrC7dGcY"}
      opts={options}
      // onPlay={(event) => console.log("play")}
      // onStateChange={(event) => {
      //   playing ? event.target.pauseVideo() : event.target.playVideo();
      // }}
      onReady={(event) => {
        setPlayer(event.target);
        console.log("ready");
      }}
    ></Wrapper>
    // <Player style={{ background: "red", width: 100, height: 100 }}>
    //   <source src="https://www.youtube.com/watch?v=aGSKrC7dGcY" />
    // </Player>
  );
};

export default YouTube;
