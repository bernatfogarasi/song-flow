import styled from "styled-components";

const Wrapper = styled.div`
  width: 30px;
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
`;

const Circle = styled.div`
  position: absolute;
  border: ${({ showClose, strokeWidth }) =>
      showClose ? strokeWidth / 2 : strokeWidth}px
    solid ${({ color }) => color};
  transition: 0.2s;
  ${({ showClose, strokeWidth }) =>
    `${
      showClose
        ? `
        width: 100%;
        top: calc(50% - ${strokeWidth / 2}px);
        left: -1px;
        border-radius: 1px;
        transform:  rotate(45deg);
        `
        : `
        width: calc(23px - ${(strokeWidth * 2) / 1.4}px);
        aspect-ratio: 1;
        border-radius: 50%;
        transform: rotate(45deg);
        `
    }`}
`;

const Line = styled.div`
  position: absolute;
  border-radius: 1px;
  right: 0px;
  border: ${({ strokeWidth }) => `${strokeWidth / 2}`}px solid
    ${({ color }) => color};
  transition: 0.2s;
  ${({ showClose, strokeWidth }) =>
    `${
      showClose
        ? `
        width: 100%;
        top: calc(50% - ${strokeWidth / 2}px);
        right: -1px;
        transform: rotate(-45deg);
        `
        : `
        bottom: -1px;
        width: 12px;
        transform: rotate(45deg);
        transform-origin: right;
        `
    }`}
`;

const SearchIcon = ({
  className,
  showClose,
  onClose = () => {},
  onOpen = () => {},
  color = "#000",
  strokeWidth = 2,
}) => {
  const onClick = () => {
    showClose ? onClose() : onOpen();
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      <Circle showClose={showClose} color={color} strokeWidth={strokeWidth} />
      <Line showClose={showClose} color={color} strokeWidth={strokeWidth} />
    </Wrapper>
  );
};

export default SearchIcon;
