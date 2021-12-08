import styled from "styled-components";

const Wrapper = styled.div`
  width: 30px;
  aspect-ratio: 1;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  width: 70%;
  aspect-ratio: 1;
  border: ${({ strokeWidth }) => `${strokeWidth}`}px solid
    ${({ color }) => color};
  border-radius: 50%;
`;

const Line = styled.div`
  transform-origin: right;
  position: absolute;
  right: 0px;
  background: ${({ color }) => color};
  bottom: 0px;
  width: 40%;
  height: ${({ strokeWidth }) => `${strokeWidth}`}px;
  transform: rotate(45deg);
`;

const SearchIcon = ({ className, color = "#fff", strokeWidth = 2 }) => {
  return (
    <Wrapper className={className}>
      <Circle color={color} strokeWidth={strokeWidth} />
      <Line color={color} strokeWidth={strokeWidth} />
    </Wrapper>
  );
};

export default SearchIcon;
