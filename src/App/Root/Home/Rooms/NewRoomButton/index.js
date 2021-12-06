import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 20px;
  padding: 5px;
  aspect-ratio: 1;
  /* border: 1px solid #fff; */
  border: 2px solid #333;
  border-radius: 50%;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
    border: 2px solid #fff;
    div.line {
      background: #fff;
    }
  }
`;

const Line = styled.div`
  background: #333;
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
    <Wrapper onClick={onClick}>
      <LineVertical />
      <LineHorizontal />
    </Wrapper>
  );
};

export default NewRoomButton;
