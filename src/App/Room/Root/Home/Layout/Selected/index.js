import styled, { css } from "styled-components";
import Action from "./Action";
import imageClose from "assets/icons/cross.png";
import imageAdd from "assets/icons/plus.png";
import imageRemove from "assets/icons/bin.png";
import imageContinue from "assets/icons/forward.png";
import imageDuplicate from "assets/icons/duplicate.png";
import imageSkip from "assets/icons/next2.png";
import imagePlay from "assets/icons/play2.png";
import useSelected from "hooks/useSelected";
import useRoom from "hooks/useRoom";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  height: 100vh;
  background: #000000b5;
  padding: 10px;
  width: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageClose = styled.img`
  filter: invert();
  height: 20px;
  padding: 10px;
  margin-left: auto;
  width: fit-content;
  border: 1px solid black;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  background: #fff;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Selected = ({ className }) => {
  const { onInsert, onRemove, onMove, onNext, onJump, selected, setSelected } =
    useRoom();
  const { refExit } = useSelected();

  const onClickClose = () => {
    setSelected(undefined);
  };

  return (
    <Wrapper className={className} show={selected} ref={refExit}>
      <ImageClose src={imageClose} onClick={onClickClose} />
      <Title>Actions</Title>
      <Actions>
        {selected?.type === "result" && (
          <>
            <Action
              src={imageAdd}
              invert
              onClick={() => onInsert(selected.content)}
            >
              Add to queue
            </Action>
          </>
        )}
        {selected?.type === "queue" && (
          <>
            <Action
              src={imagePlay}
              invert
              onClick={() => onMove(selected.index, "current")}
            >
              Play now
            </Action>
            <Action
              src={imageContinue}
              invert
              onClick={() => onJump(selected.index)}
            >
              Continue here
            </Action>
            <Action
              src={imageDuplicate}
              invert
              onClick={() => onInsert(selected.content, selected.index)}
            >
              Duplicate
            </Action>
            <Action
              src={imageRemove}
              invert
              onClick={() => onRemove(selected.index)}
            >
              Remove
            </Action>
          </>
        )}
        {selected?.type === "current" && (
          <>
            <Action src={imageSkip} invert onClick={() => onNext()}>
              Skip
            </Action>
          </>
        )}
      </Actions>
    </Wrapper>
  );
};

export default Selected;
