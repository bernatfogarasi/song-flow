import styled from "styled-components";
import imageMuted from "assets/icons/muted.png";
import imageVolumeHigh from "assets/icons/volume_high.png";
import useRoom from "hooks/useRoom";

const Wrapper = styled.img`
  filter: invert();
  height: 30px;
  align-self: flex-start;
  justify-self: flex-start;
`;

const Mute = ({ className }) => {
  const { sound, setSound } = useRoom();
  const onClick = () => {
    setSound(!sound);
  };
  return (
    <Wrapper
      className={className}
      src={sound ? imageVolumeHigh : imageMuted}
      onClick={onClick}
    ></Wrapper>
  );
};

export default Mute;
