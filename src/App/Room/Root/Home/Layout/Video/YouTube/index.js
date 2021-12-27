import styled from "styled-components";
import YouTubeApi from "react-youtube";
import { useContext, useEffect, useRef, useState } from "react";
import { RoomContext } from "context";
import ReactPlayer from "react-player";

const YouTube = ({ className }) => {
  const { current, playing, onPlaying, progress, setProgressBar } =
    useContext(RoomContext);

  const ref = useRef();

  useEffect(() => {
    ref.current.seekTo(progress);
  }, [progress]);

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 0,
    },
  };

  // useEffect(() => {
  //   const pause = () => {
  //     if (!player) return;
  //     player.pauseVideo();
  //   };

  //   const play = () => {
  //     if (!player) return;
  //     player.playVideo();
  //   };
  //   playing ? play() : pause();
  // }, [playing, player]);

  return (
    //   videoId={current && current.id}
    //   // videoId={"qTGbWfEEnKI"}
    //   opts={options}
    //   onReady={(event) => {
    //     setPlayer(event.target);
    //     // onPlaying(true);
    //   }}
    //   onPlay={() => onPlaying(true)}
    //   onStateChange={console.log}
    // ></Wrapper>
    <ReactPlayer
      ref={ref}
      width="1100%"
      height="100%"
      style={{ marginLeft: "-500%" }}
      className={className}
      url={current?.url}
      progressInterval={0}
      onPlay={() => onPlaying(true)}
      onProgress={(event) => {
        setProgressBar(event.played);
      }}
      playing={playing}
    ></ReactPlayer>
  );
};

export default YouTube;
