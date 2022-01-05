import styled from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import { RoomContext } from "context";
import { useContext } from "react";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
  font-family: Montserrat;
  background: #111;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
`;

const Thumbnail = styled.img`
  height: 100%;
  pointer-events: none;
`;

const TitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: MontserratMedium;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.div`
  font-size: 13px;
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SiteIcon = styled.img`
  width: 20px;
  pointer-events: none;
  margin-left: auto;
`;

const Result = ({ data }) => {
  const { setDrag, onQueue } = useContext(RoomContext);

  const onDragStart = (event) => {
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

  const onClick = () => {
    onQueue(data);
  };

  return (
    <Wrapper
      onContextMenu={(event) => event.preventDefault()}
      key={data.thumbnailUrl}
      draggable
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <Thumbnail src={data.thumbnailUrl} alt="" />
      <TitleAuthor>
        <Title title={data.title}>{data.title}</Title>
        <Author>{data.author}</Author>
      </TitleAuthor>

      <SiteIcon src={icons[data.site]} alt="" />
    </Wrapper>
  );
};

export default Result;
