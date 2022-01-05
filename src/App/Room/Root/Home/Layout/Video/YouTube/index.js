import { useContext, useEffect, useRef } from "react";
import { RoomContext } from "context";
import ReactPlayer from "react-player";

const YouTube = ({ className }) => {
  const { current, playing, onPlaying, progress, setProgressBar } =
    useContext(RoomContext);

  const ref = useRef();

  useEffect(() => {
    ref.current.seekTo(progress);
  }, [progress]);

  // const options = {
  //   playerVars: {
  //     autoplay: 1,
  //     controls: 0,
  //     modestbranding: 1,
  //     rel: 0,
  //     iv_load_policy: 0,
  //   },
  // };

  return (
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
