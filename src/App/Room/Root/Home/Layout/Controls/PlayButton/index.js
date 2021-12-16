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
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid black;
  transform: translateX(2px) scaleX(1.6);
`;

const PlayButton = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Triangle />
    </Wrapper>
  );
};

export default PlayButton;
