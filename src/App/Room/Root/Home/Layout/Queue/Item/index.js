import { useState } from "react";
import styled from "styled-components";
import Content from "components/Content";
import useRoom from "hooks/useRoom";

const Wrapper = styled(Content)``;

const Item = ({ className, index, content }) => {
  const [over, setOver] = useState();
  const { dragElement, setDragElement, onInsert, onMove } = useRoom();

  const onDragStart = (event) => {
    event.stopPropagation();
    setDragElement(event.currentTarget);
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ ...content, from: index })
    );
  };

  const onDragEnd = (event) => {
    setDragElement(undefined);
  };

  const onDragEnter = (event) => {
    event.stopPropagation();
    setOver(true);
  };

  const onDragOver = (event) => {
    event.stopPropagation();
    setOver(true);
    if (dragElement === event.currentTarget) return;
    event.preventDefault();
  };

  const onDragLeave = (event) => {
    event.stopPropagation();
    setOver(false);
  };

  const onDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setOver(false);
    setDragElement(undefined);
    const { from, ...content } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    if (Number.isInteger(from)) onMove(from, index);
    else onInsert(content, index);
  };

  return (
    <Wrapper
      className={className}
      key={content._id}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      index={index + 2}
      content={content}
      type="queue"
      over={over}
    ></Wrapper>
  );
};

export default Item;
