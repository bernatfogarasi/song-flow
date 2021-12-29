import styled from "styled-components";
import Room from "./Room";

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  box-sizing: border-box;
  background: #111;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Results = ({ className, rooms }) => {
  return (
    <Wrapper className={className}>
      {rooms.map(({ name, url }) => (
        <Room key={url} name={name} url={url} />
      ))}
    </Wrapper>
  );
};

export default Results;
