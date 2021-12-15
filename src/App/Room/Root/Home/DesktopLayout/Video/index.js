import { RoomContext } from "context";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import YouTube from "./YouTube";

const Wrapper = styled.div`
  background: blue;
  width: calc(100% - 2px);
  margin: 0 auto;
  height: 40%;
  overflow: hidden;
  /* border: 1px solid #333; */
  position: relative;

  aspect-ratio: 16/9;
  /* pointer-events: none; */
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const PlayIcon = styled(Icon)`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid white;
  transform: translateX(calc(-50% + 10px)) translateY(-50%) scaleX(1.6);
`;

const PauseIcon = styled(Icon)`
  position: absolute;
  width: 7px;
  height: 40px;
  border-left: 7px solid white;
  border-right: 7px solid white;
  transform: translateX(calc(-50% + 10px)) translateY(-50%) scaleX(1.6);
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  &.playing {
    animation: fade-out 0.2s forwards;
    animation-delay: 0.2s;
  }
  &.paused {
    animation: fade-in 0s forwards;
  }
  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
  /* background: red;
  opacity: 60%; */
`;

// const Wrapper = styled.div`
//   background: blue;
//   width: calc(100% - 2px);
//   height: 40%;
// max-width: 400px;
//   /* overflow: hidden; */
//   border: 1px solid #333;
//   position: relative;
//   /* aspect-ratio: 16/9; */
//   /* pointer-events: none; */
// `;

const Video = ({ id }) => {
  const [playing, setPlaying] = useState(false);
  const onClick = () => {
    setPlaying(!playing);
  };

  return (
    <Wrapper onClick={onClick}>
      <YouTube playing={playing} setPlaying={setPlaying} />
      <Overlay className={playing ? "playing" : "paused"}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </Overlay>
    </Wrapper>
  );
};

export default Video;
