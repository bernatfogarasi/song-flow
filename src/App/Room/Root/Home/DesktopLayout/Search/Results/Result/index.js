import styled from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import { RoomContext } from "context";
import { useContext, useState } from "react";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  user-select: none;
  cursor: move;

  :hover {
    background: #222;
  }
  transition: 0.2s;
  display: flex;
  align-items: center;
  /* background: #1c1c1c; */
  border-radius: 4px;
`;

const Thumbnail = styled.img`
  aspect-ratio: 16/9;
  margin: auto 0;
  border-radius: 3px;
  max-width: 150px;
  pointer-events: none;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  overflow: hidden;
  pointer-events: none;
`;

const Title = styled.div`
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: MontserratSemibold;
`;

const Author = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Montserrat;
  opacity: 60%;
`;

const SiteIcon = styled.img`
  width: 20px;
`;

const Result = ({ data }) => {
  const { onNext, drag, setDrag } = useContext(RoomContext);

  const onDragStart = (event) => {
    // event.target.style.opacity = "0";
    setDrag(true);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ ...data, from: undefined })
    );
  };

  const onDrag = (event) => {};

  const onDragEnd = (event) => {
    setDrag(false);
  };

  return (
    <Wrapper
      onContextMenu={(event) => event.preventDefault()}
      key={data.thumbnailUrl}
      draggable
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Thumbnail src={data.thumbnailUrl} alt="" />
      <Details>
        <Title title={data.title}>{data.title}</Title>
        <Author>{data.author}</Author>
      </Details>

      {/* <SiteIcon src={icons[data.site]} alt="" /> */}
    </Wrapper>
  );
};

export default Result;
