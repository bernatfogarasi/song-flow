import styled from "styled-components";
import imageYoutube from "assets/icons/youtube.png";
import imageSpotify from "assets/icons/spotify.png";
import { RoomContext } from "context";
import { useContext } from "react";
import TimeRaw from "components/Time";

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
  aspect-ratio: 1;
  object-fit: cover;
  pointer-events: none;
  border: 1px solid #333;
`;

const TitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 3px;
  width: 100%;
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

const Time = styled(TimeRaw)`
  opacity: 0.6;
  min-width: 60px;
  text-align: right;
  margin-left: auto;
`;

const SiteIcon = styled.img`
  width: 20px;
  pointer-events: none;
`;

const siteIcons = { spotify: imageSpotify, youtube: imageYoutube };

const Result = ({ className, content }) => {
  const { onInsert, setDragElement } = useContext(RoomContext);

  const onContextMenu = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event) => {
    setDragElement(event.target);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify({ ...content }));
  };

  const onDragEnd = (event) => {
    setDragElement(undefined);
  };

  const onClick = () => {
    onInsert(content);
  };

  return (
    <Wrapper
      className={className}
      onContextMenu={onContextMenu}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <Thumbnail src={content.thumbnailUrl} alt="" />
      <TitleAuthor>
        <Title title={content.title}>{content.title}</Title>
        <Author>{content.author}</Author>
      </TitleAuthor>
      <Time duration={content.duration} type="duration"></Time>
      <SiteIcon src={siteIcons[content.site]} alt="" />
    </Wrapper>
  );
};

export default Result;
