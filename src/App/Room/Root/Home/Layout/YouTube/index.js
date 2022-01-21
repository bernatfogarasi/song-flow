import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import useRoom from "hooks/useRoom";
import styled, { css } from "styled-components";
import imagePlay from "assets/icons/play.png";
import imagePause from "assets/icons/pause.png";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Overlay = styled.div`
  position: absolute;
  border: 2px solid #d6b11c;
  box-sizing: border-box;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  z-index: 1;
  ${({ playing }) =>
    playing
      ? css`
          animation: fade-out 0.2s forwards;
          animation-delay: 0.2s;
        `
      : css`
          animation: fade-in 0s forwards;
          ::before {
            content: "";
            background: black;
            position: absolute;
            opacity: 1;
          }
        `}
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

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  transform: translate(-50%, -50%);
`;

const YouTube = ({ className }) => {
  const {
    current,
    playing,
    progress,
    onNext,
    onPlaying,
    setProgressBar,
    sound,
  } = useRoom();

  const [ready, setReady] = useState();

  const ref = useRef();

  const onClick = () => {
    onPlaying(!playing);
  };

  useEffect(() => {
    if (ready && ref?.current?.seekTo) ref.current.seekTo(progress);
  }, [ready, progress]);

  useEffect(() => {
    if (ready) ref.current.playing = true;
  }, [ready, playing]);

  return (
    <Wrapper className={className}>
      <ReactPlayer
        ref={ref}
        width="1100%"
        height="100%"
        style={{ marginLeft: "-500%" }}
        className={className}
        url={current?.url}
        progressInterval={0}
        onProgress={(event) => {
          setProgressBar(event.played);
        }}
        onPlay={() => onPlaying(true)}
        onPause={() => onPlaying(false)}
        onReady={() => setReady(true)}
        onEnded={() => onNext()}
        playing={playing}
        muted={!sound}
      ></ReactPlayer>
      <Overlay url={current?.thumbnailUrl} playing={playing} onClick={onClick}>
        {playing ? <Icon src={imagePause} /> : <Icon src={imagePlay} />}
      </Overlay>
    </Wrapper>
  );
};

export default YouTube;
