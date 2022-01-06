import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import Members from "./Members";

const Wrapper = styled(Link)`
  width: 50vw;
  min-width: 200px;
  max-width: 400px;
  height: 200px;
  border: 1px solid #333;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;

  :hover {
    background: #202020;
    transform: scale(1.05);
    transition: 0.2s;
    div.arrow {
      /* transition: transform 0.2s;
      transform: translateX(40px); */
    }
  }
  transition: 0.2s;
  cursor: pointer;
`;

const Title = styled.div`
  color: #d6b11c;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.1em;
  font-family: Montserrat;
`;

const Arrow = styled.div`
  z-index: 0;
  width: 20px;
  aspect-ratio: 1;
  /* border: 1px solid #fff; */
  transition: 0.2s;
  position: relative;
`;

const ArrowLine = styled.div`
  z-index: 0;
  position: absolute;
  background: #fff;
  height: 2px;
`;

const ArrowHeapTop = styled(ArrowLine)`
  width: 11px;
  top: 6px;
  right: -2px;
  transform: rotate(45deg);
`;

const ArrowHeapBottom = styled(ArrowLine)`
  width: 11px;
  bottom: 6px;
  right: -2px;
  transform: rotate(-45deg);
`;

const ArrowShaft = styled(ArrowLine)`
  width: 20px;
  top: 10px;
  transform: translateY(-50%);
`;

const Activity = styled.div`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid #333;
  border-radius: 50%;
  ${({ active }) =>
    active &&
    css`
      background: #d6b11c;
    `}
`;

const Room = ({ room }) => {
  return (
    <Wrapper to={room.url}>
      <Title>
        <Activity active={room.playing} />
        {room.name}
        <Arrow className="arrow">
          <ArrowHeapTop />
          <ArrowHeapBottom />
          <ArrowShaft />
        </Arrow>
      </Title>
      <Members members={room.members}></Members>
    </Wrapper>
  );
};

export default Room;
