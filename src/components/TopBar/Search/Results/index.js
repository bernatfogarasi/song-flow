import styled from "styled-components";
import Room from "./Room";

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px;
  /* max-width: 300px; */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 20px);
  background: #111;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Results = ({ show, rooms }) => {
  return (
    // show &&
    rooms &&
    rooms.length > 0 && (
      <Wrapper>
        {rooms.map(({ name, url }) => (
          <Room key={name} name={name} url={url} />
        ))}
      </Wrapper>
    )
  );
};

export default Results;
