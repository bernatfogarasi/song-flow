import { RoomContext } from "context";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 25px;
  gap: 4px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid black;
  transform: translateX(2px) scaleX(1.6);
`;

const Rectangle = styled.div`
  width: 4px;
  height: 16px;
  background: #111;
`;

const PlayButton = ({ className }) => {
  const { playing, onPlaying } = useContext(RoomContext);

  const onClick = () => {
    onPlaying(!playing);
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      {playing ? (
        <>
          <Rectangle />
          <Rectangle />
        </>
      ) : (
        <Triangle />
      )}
    </Wrapper>
  );
};

export default PlayButton;
