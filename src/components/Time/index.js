import useRoom from "hooks/useRoom";
import styled from "styled-components";

const Wrapper = styled.div``;

const Time = ({ className, duration, type }) => {
  const { progressBar } = useRoom();

  duration = duration || 0;
  const showHours = duration >= 60 * 60 * 1000;

  const millisecondsAll =
    type === "elapsed"
      ? progressBar * duration
      : type === "remaining"
      ? (1 - progressBar) * duration
      : type === "duration"
      ? duration
      : 0;

  const secondsAll = Math.round(millisecondsAll / 1000);
  let seconds = secondsAll % 60;
  let minutes = Math.floor(secondsAll / 60) % 60;
  const hours = Math.floor(secondsAll / 3600) % 60;

  const pad = (input, length = 2, padWith = "0") => {
    return String(input).padStart(length, String(padWith));
  };

  minutes = showHours ? pad(minutes) : minutes;
  seconds = pad(seconds);

  const timeComponents = showHours
    ? [hours, minutes, seconds]
    : [minutes, seconds];

  const timeText =
    duration && type && progressBar ? timeComponents.join(":") : "0:00";

  return <Wrapper className={className}>{timeText}</Wrapper>;
};

export default Time;
