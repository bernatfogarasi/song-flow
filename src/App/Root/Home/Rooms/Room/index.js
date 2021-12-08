import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 300px;
  border: 1px solid #333;
  border-radius: 4px;
  color: white;
  text-decoration: none;

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

const Line = styled.div`
  margin: 10px;
  /* border: 1px solid #333; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  letter-spacing: 0.1em;
  font-family: Montserrat;
`;

const Rank = styled.div`
  color: ${({ color }) => color};
`;

const Star = styled(Rank)``;

// const ranks = {
//   admin: { color: "yellow", text: "★", element: Star },
//   member: { color: "grey", text: "", element: Star },
// };

const Participants = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 20px; */
`;

const Participant = styled.div`
  border-radius: 50%;
  height: 20px;
  aspect-ratio: 1;
  margin-right: 2px;
  border: 1px solid #333;
`;

const Arrow = styled.div`
  position: relative;
  width: 20px;
  aspect-ratio: 1;
  /* border: 1px solid #fff; */
  transition: 0.2s;
`;

const ArrowLine = styled.div`
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

const Room = ({ name, url }) => {
  return (
    <Wrapper to={url}>
      <Line>
        <Title>{name}</Title>
        {/* <Rank color={ranks[rank].color}>{ranks[rank].text}</Rank> */}
        {/* {ranks[rank].element} */}
        <Star />
      </Line>
      <Line>
        <Participants>
          {Array((name.length % 3) + 1)
            .fill(0)
            .map((value, index) => (
              <Participant key={index} />
            ))}
        </Participants>
        <Arrow className="arrow">
          <ArrowLine />
          <ArrowHeapTop />
          <ArrowHeapBottom />
          <ArrowShaft />
        </Arrow>
      </Line>
    </Wrapper>
  );
};

export default Room;
