import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 20px;
  padding: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
  padding: 10px;
  background: #d6b11c;
  margin: auto;
`;

const Line = styled.div`
  position: absolute;
  background: #000;
  width: 2px;
  height: 20px;
  left: calc(50% - 1px);
`;

const LineVertical = styled(Line)``;

const LineHorizontal = styled(Line)`
  transform: rotate(90deg);
`;

const NewRoomButton = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick} title="Create a room">
      <LineVertical />
      <LineHorizontal />
    </Wrapper>
  );
};

export default NewRoomButton;
