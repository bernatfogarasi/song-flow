import useRoom from "hooks/useRoom";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #222;
  padding: 10px;
  text-align: center;
  opacity: 0.8;
  transition: 0.2s;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 1;
    transform: scale(1.1);
  }
  background: black;
`;

const Image = styled.img`
  ${({ invert }) =>
    invert &&
    css`
      filter: invert();
    `}
  height: 40px;
`;

const Text = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Action = ({ className, children, src, invert, onClick = () => {} }) => {
  const { setSelected } = useRoom();

  const onClickThis = (event) => {
    onClick(event);
    setTimeout(() => {
      setSelected(undefined);
    }, 200);
  };

  return (
    <Wrapper className={className} onClick={onClickThis}>
      <Image src={src} alt="" invert={invert} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Action;
