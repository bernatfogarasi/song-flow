import styled, { css } from "styled-components";
import useRoom from "hooks/useRoom";

const Wrapper = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.3;
        `
      : css`
          cursor: pointer;
          opacity: 0.8;
        `};
`;

const Triangle = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid white;
  transform: scaleX(1.6);
`;
const Rectangle = styled.div`
  display: inline-block;
  height: 16px;
  width: 3px;
  background: white;
  margin-left: 1px;
`;

const Next = ({ className }) => {
  const { queue, onNext } = useRoom();

  const onClick = () => {
    onNext();
  };

  return (
    <Wrapper className={className} onClick={onClick} disabled={!queue?.length}>
      <Triangle />
      <Rectangle />
    </Wrapper>
  );
};

export default Next;
