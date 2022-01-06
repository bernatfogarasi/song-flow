import styled from "styled-components";
import { RoomContext } from "context";
import { useContext } from "react";
import YouTube from "./YouTube";
import imagePlay from "assets/icons/play.png";
import imagePause from "assets/icons/pause.png";
import Spotify from "./Spotify";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  z-index: 2;
  &.playing {
    animation: fade-out 0.2s forwards;
    animation-delay: 0.2s;
  }
  &.paused {
    animation: fade-in 0s forwards;
    ::before {
      content: "";
      background: black;
      position: absolute;
      opacity: 1;
    }
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
`;

const Video = ({ className }) => {
  const { current, playing, onPlaying } = useContext(RoomContext);

  const onClick = () => {
    onPlaying(!playing);
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      {current?.site === "spotify" && <Spotify />}
      {current?.site === "youtube" && (
        <>
          <YouTube />
          <Overlay
            className={playing ? "playing" : "paused"}
            url={current?.thumbnailUrl}
          >
            {/* {playing ? (
              <Icon src={imagePause} />
            ) : (
              <>
                <Icon src={imagePlay} />
              </>
            )} */}
          </Overlay>
        </>
      )}
    </Wrapper>
  );
};

export default Video;
