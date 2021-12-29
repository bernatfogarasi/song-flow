import { shuffle } from "functions/math";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 50vw;
  min-width: 200px;
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

const Line = styled.div`
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

const Participants = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
  gap: 5px;
`;

const Participant = styled.div`
  border-radius: 50%;
  height: 30px;
  aspect-ratio: 1;
  border: 1px solid #333;
`;

const Genres = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Genre = styled.div`
  display: flex;
  gap: 10px;
`;

const GenreRank = styled.div`
  width: 20px;
`;

const GenreName = styled.div`
  color: #777;
`;

const genres = [
  "blues",
  "country",
  "easy listening",
  "electronic",
  "contemporary folk",
  "hip hop",
  "jazz",
  "pop",
  "r&b and soul",
  "rock",
];

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

const Room = ({ name, url }) => {
  return (
    <Wrapper to={url}>
      <Line>
        <Title>{name}</Title>
        {/* <Rank color={ranks[rank].color}>{ranks[rank].text}</Rank> */}
        {/* {ranks[rank].element} */}
        <Star />
        <Arrow className="arrow">
          <ArrowHeapTop />
          <ArrowHeapBottom />
          <ArrowShaft />
        </Arrow>
      </Line>
      <Line>
        <Participants>
          {Array((name.length % 10) + 1)
            .fill(0)
            .map((value, index) => (
              <Participant key={index} />
            ))}
        </Participants>
      </Line>
      <Line>
        <Genres>
          {shuffle(genres)
            .slice(0, Math.ceil(Math.random() * 3))
            .map((genre, index) => (
              <Genre key={index}>
                <GenreRank>{["I", "II", "III"][index]}.</GenreRank>
                <GenreName>{genre}</GenreName>
              </Genre>
            ))}
        </Genres>
      </Line>
    </Wrapper>
  );
};

export default Room;
