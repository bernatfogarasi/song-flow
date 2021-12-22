import styled from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import { RoomContext } from "context";
import { useContext, useState } from "react";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 20px;
  grid-template-rows: 50% 50%;
  column-gap: 15px;
  &.over {
    ::before {
      content: "";
      position: absolute;
      top: -50px;
      background: #222;
      height: 50px;
      width: 100%;
    }
    border-top: 50px solid transparent;
  }
  border-top-color: transparent;
  position: relative;
  font-family: Montserrat;
  background: #111;
  cursor: pointer;
  border-radius: 4px;
  width: calc(100% - 30px);
  font-size: 14px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
`;

const Thumbnail = styled.img`
  grid-row: span 2;
  height: 100%;
  pointer-events: none;
`;

const Title = styled.div`
  font-family: MontserratMedium;
  grid-column: 2;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.div`
  grid-column: 2;
  grid-row: 2;
  font-size: 13px;
  /* border: 1px solid; */
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SiteIcon = styled.img`
  grid-row: span 2;
  justify-self: center;
  width: 20px;
  align-self: top;
  pointer-events: none;
`;

const Result = ({ data }) => {
  const { setDrag } = useContext(RoomContext);

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
      <Title title={data.title}>{data.title}</Title>
      <Author>{data.author}</Author>

      <SiteIcon src={icons[data.site]} alt="" />
    </Wrapper>
  );
};

export default Result;
