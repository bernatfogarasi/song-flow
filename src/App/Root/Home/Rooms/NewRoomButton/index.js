import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 20px;
  padding: 5px;
  aspect-ratio: 1;
  border: 2px solid #fff;
  opacity: 0.6;
  border-radius: 50%;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

const Line = styled.div`
  background: #fff;
  width: 2px;
  height: 20px;
  position: absolute;
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
