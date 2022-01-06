import styled, { css } from "styled-components";
import { useContext } from "react";
import { RoomContext } from "context";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  border-radius: 4px;
  transition: 0.4s;
  ${({ hint }) =>
    hint
      ? css`
          background: #1a1a1a;
          margin-right: 10px;
        `
      : css`
          overflow-y: scroll;
          overflow-x: hidden;
          flex-direction: column;
          user-select: none;
          gap: 10px;
          ::-webkit-scrollbar {
            width: 10px;
          }
          scrollbar-width: thin;

          :hover::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: #333;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}
`;

const Hint = styled.div`
  margin: auto;
  opacity: 0.4;
`;

const Queue = ({ className }) => {
  const { queue, onInsert, onMove, dragElement, setDragElement } =
    useContext(RoomContext);

  const onDragEnter = (event) => {
    if (!dragElement) return;
    event.target.style.background = "#222";
  };

  const onDragOver = (event) => {
    if (!dragElement) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = (event) => {
    if (!dragElement) return;
    event.target.style.background = "transparent";
  };

  const onDrop = (event) => {
    if (!dragElement) return;
    event.target.style.background = "transparent";
    event.preventDefault();
    event.stopPropagation();
    const { from, ...content } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );

    console.log(
      "data-drop",
      JSON.parse(event.dataTransfer.getData("text/plain"))
    );
    if (Number.isInteger(from)) onMove(from);
    else onInsert(content);
    setDragElement(undefined);
  };

  return (
    <Wrapper
      className={className}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      hint={!queue?.length}
    >
      {queue?.length ? (
        queue.map((content, index) => (
          <Item key={content._id} content={content} index={index}></Item>
        ))
      ) : (
        <Hint>Queue is empty</Hint>
      )}
    </Wrapper>
  );
};

export default Queue;
